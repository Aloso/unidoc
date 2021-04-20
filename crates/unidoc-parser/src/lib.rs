#[cfg(test)]
#[macro_use]
mod test_macros;

pub mod blocks;
pub mod inlines;
pub mod ir;

mod input;
mod parse;
mod utils;

use crate::blocks::{Block, Context};
use crate::input::Input;
use crate::ir::{DocIr, IntoIR};
use crate::parse::{Parse, ParseInfallible};

pub use detached_str::{Str, StrSlice, StrSliceIndex};

pub fn parse(s: &str) -> DocIr {
    let mut input = Input::new(s);
    let parsed = input.parse(Block::global_parser()).unwrap();
    DocIr { blocks: parsed.into_ir(s) }
}
