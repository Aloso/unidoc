use unidoc_repr::ast::macros::MacroArgs;

use crate::input::Input;
use crate::utils::{Indents, ParseLineBreak, ParseOneWS, Until};
use crate::{Parse, ParseInfallible, StrSlice};

use super::token_trees::ParseTokenTrees;

pub struct ParseMacroArgs<'a> {
    pub name: &'a str,
    pub ind: Indents<'a>,
}

impl Parse for ParseMacroArgs<'_> {
    type Output = Option<MacroArgs>;

    fn parse(&mut self, input: &mut Input) -> Option<Self::Output> {
        let mut input = input.start();

        if input.parse('(').is_none() {
            return Some(None);
        }
        let content = match self.name {
            "LOAD" => MacroArgs::Raw(input.parse_i(ParseRaw)),
            _ => MacroArgs::TokenTrees(
                input.parse(ParseTokenTrees { ind: self.ind.push_indent(2) })?,
            ),
        };

        input.try_parse(ParseLineBreak(self.ind));
        input.try_parse(ParseOneWS);
        input.parse(')')?;

        input.apply();
        Some(Some(content))
    }
}

struct ParseRaw;

impl ParseInfallible for ParseRaw {
    type Output = StrSlice;

    fn parse_infallible(&self, input: &mut Input) -> Self::Output {
        input.parse_i(Until(|c| matches!(c, ')' | '\n' | '\r')))
    }
}
