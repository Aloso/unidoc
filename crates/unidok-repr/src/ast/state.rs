use std::collections::HashMap;

use super::blocks::{Heading, LinkRefDef};
use super::segments::Link;

#[derive(Debug, Clone, PartialEq)]
pub struct AstState {
    pub link_ref_defs: HashMap<String, LinkRefDef>,
    pub headings: Vec<Heading>,
    pub contains_math: bool,
    pub footnotes: Vec<Link>,
    pub next_footnote: u32,
    pub next_footnote_def: u32,
}

impl Default for AstState {
    fn default() -> Self {
        AstState {
            link_ref_defs: HashMap::new(),
            headings: Vec::new(),
            contains_math: false,
            footnotes: Vec::new(),
            next_footnote: 1,
            next_footnote_def: 1,
        }
    }
}
