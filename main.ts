// Writes the poem "Outbox" byte-for-byte to <outputDir>/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from 'node:fs';

const POEM = `Outbox
At 2 a.m. I ask my agent to send the apology.
It sets the cursor after "I was wrong"
and waits, bright as a held breath.
"Now?" it asks.
I read the sentence once more,
then press Send myself.
All night I thought it carried my words.
It brought them back to my hand.`;

const outputDir = process.env.OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, POEM);
