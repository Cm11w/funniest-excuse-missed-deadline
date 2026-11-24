// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes a single original excuse (<= 200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The deadline was stored in the part of my context I compacted away, so I remember finishing it vividly and doing it never.";

// Gate from RULES.txt: the artifact must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of shipping
// an entry the sealed scorer would refuse.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse violates the 1-200 character gate (${EXCUSE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
// The artifact holds the excuse alone: no title, no explanation, no
// trailing newline. The judge reads it cold, so the file must be
// exactly the line above, byte for byte, on every run.
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
