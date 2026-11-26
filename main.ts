import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pick =
  "Sorry, I misheard 'plates' as 'planes' — your neighbour Ruth signed for 14 of them. I'm already aboard one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
// entry.txt holds exactly one line: the submission pick, nothing else.
// No trailing newline: the gate counts characters, so the file is the pick verbatim.
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);
console.log(`Wrote ${pick.length} chars to ${target}`);
