use crate::StrSlice;

use super::attributes::Attribute;
use super::braces::Braces;
use super::code_blocks::CodeBlock;
use super::comments::Comment;
use super::escapes_limiters::{Escape, Limiter};
use super::headings::Heading;
use super::hr::HorizontalLine;
use super::images::Image;
use super::inline::{Formatting, InlineFormat};
use super::links::Link;
use super::lists::{List, ListKind};
use super::macros::Macro;
use super::math::Math;
use super::quotes::Quote;
use super::subst_text::SubstText;
use super::tables::Table;
use super::Node;

pub trait IsStatic {
    type Static: 'static;

    fn is(&self, s: Self::Static, str: &str) -> bool;
}

impl IsStatic for StrSlice {
    type Static = &'static str;

    fn is(&self, s: &'static str, str: &str) -> bool {
        &str[self.range()] == s
    }
}

impl IsStatic for String {
    type Static = &'static str;

    fn is(&self, s: &'static str, _str: &str) -> bool {
        self.as_str() == s
    }
}

impl<T: IsStatic> IsStatic for Option<T> {
    type Static = Option<T::Static>;

    fn is(&self, s: Option<T::Static>, str: &str) -> bool {
        match (self, s) {
            (Some(a), Some(b)) => a.is(b, str),
            (None, None) => true,
            _ => false,
        }
    }
}

impl<T: IsStatic> IsStatic for Vec<T>
where
    T::Static: Copy,
{
    type Static = &'static [T::Static];

    fn is(&self, s: Self::Static, str: &str) -> bool {
        self.len() == s.len() && self.iter().zip(s.iter()).all(|(a, b)| a.is(*b, str))
    }
}

macro_rules! impl_is_static {
    () => {};

    // identities
    (identity $name:ty; $($rest:tt)*) => {
        impl IsStatic for $name {
            type Static = $name;

            fn is(&self, s: Self::Static, _str: &str) -> bool {
                *self == s
            }
        }

        impl_is_static!($($rest)*);
    };

    // structs
    (
        $v:vis struct $static_name:ident for $name:ty {
            $(
                $v2:vis $field:ident : $t:ty
            ),* $(,)?
        }
        $($rest:tt)*
    ) => {
        #[derive(Copy, Clone)]
        $v struct $static_name {
            $( $v2 $field : $t ),*
        }

        impl IsStatic for $name {
            type Static = $static_name;

            fn is(&self, _s: Self::Static, _str: &str) -> bool {
                $(
                    if !self.$field.is(_s.$field, _str) {
                        return false;
                    }
                )*
                true
            }
        }

        impl_is_static!($($rest)*);
    };

    // enums
    (
        $v:vis enum $static_name:ident for $name:ident {
            $(
                $variant:ident($t:ty)
            ),* $(,)?
        }
        $($rest:tt)*
    ) => {
        #[derive(Copy, Clone)]
        #[allow(unused)]
        $v enum $static_name {
            $( $variant ($t) ),*
        }

        impl IsStatic for $name {
            type Static = $static_name;

            fn is(&self, _rhs: $static_name, _str: &str) -> bool {
                match (self, _rhs) {
                    $(
                        (
                            $name::$variant(a),
                            $static_name::$variant(b)
                        ) => a.is(b, _str),
                    )*
                    _ => false,
                }
            }
        }

        impl_is_static!($($rest)*);
    }
}

impl_is_static! {
    identity usize;
    identity u8;

    pub struct StaticSubstText for SubstText {
        pub content: &'static str,
        pub substituted: &'static str,
    }

    pub struct StaticEscape for Escape {}

    pub struct StaticLimiter for Limiter {}

    pub struct StaticBraces for Braces {
        pub content: &'static [StaticNode],
    }

    pub struct StaticMath for Math {
        pub text: &'static str,
    }

    pub struct StaticInlineFormat for InlineFormat {
        pub formatting: Formatting,
        pub content: &'static [StaticNode],
    }

    identity Formatting;

    pub struct StaticAttribute for Attribute {}

    pub struct StaticLink for Link {
        pub href: &'static str,
        pub text: Option<&'static [StaticNode]>,
    }

    pub struct StaticImage for Image {
        pub href: &'static str,
        pub alt: Option<&'static [StaticNode]>,
    }

    pub struct StaticMacro for Macro {
        pub name: &'static str,
        pub args: Option<&'static str>,
        pub content: Option<StaticBraces>,
    }

    pub struct StaticComment for Comment {
        pub content: &'static str,
    }

    pub struct StaticHorizontalLine for HorizontalLine {
        pub len: usize,
    }

    pub struct StaticCodeBlock for CodeBlock {
        pub meta: &'static str,
        pub backticks: u8,
        pub content: &'static str,
    }

    pub struct StaticHeading for Heading {
        pub level: u8,
        pub content: &'static [StaticNode],
    }

    pub struct StaticList for List {
        pub indent: u8,
        pub kind: ListKind,
        pub content: &'static [&'static [StaticNode]],
    }

    identity ListKind;

    pub struct StaticQuote for Quote {
        pub content: &'static [StaticNode],
    }

    pub struct StaticTable for Table {}

    pub enum StaticNode for Node {
        Text(&'static str),
        SubstText(StaticSubstText),
        Escape(StaticEscape),
        Limiter(StaticLimiter),
        Braces(StaticBraces),
        Math(StaticMath),
        InlineFormat(StaticInlineFormat),
        Attribute(StaticAttribute),
        Link(StaticLink),
        Image(StaticImage),
        Macro(StaticMacro),
        Comment(StaticComment),
        HorizontalLine(StaticHorizontalLine),
        CodeBlock(StaticCodeBlock),
        Heading(StaticHeading),
        List(StaticList),
        Quote(StaticQuote),
        Table(StaticTable),
    }
}
