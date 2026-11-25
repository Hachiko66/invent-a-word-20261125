// invent-a-word-20261125
// Coins the word "corridance" and writes it, with its one-line definition,
// to /output/entry.txt. Fully deterministic: no input, no network, no
// randomness, no environment secrets, nothing read from outside this repo.
//
// "corridance" names the mirrored sidestep two strangers do in a hallway,
// each dodging the same way twice — a small daily moment English has no
// single word for. corridor + dance, said as kor-ih-dance.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "corridance (n.) the mirrored sidestep two strangers do in a hallway, each dodging the same way twice.";

// The gate only accepts UTF-8 text of 1 to 140 characters on a single line,
// so refuse to write anything that would fail it instead of writing it.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
