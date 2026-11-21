// Writes the poem "Umbrella" byte-for-byte to <outputDir>/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from 'node:fs';

const POEM = `Umbrella
I open it above my father's slow steps.
"Take the dry side," I say.
Rain beads along my sleeve.
He asks me to stop, shifts the handle
into my palm, folds my wet shoulder in.
At the gate, he lets me lead.
All the way home, he keeps me dry.`;

const outputDir = process.env.OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, POEM);
