import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'm sorry I computed your deadline by hand, landed 40 minutes outside the window, and briefly concluded the bounty did not exist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
