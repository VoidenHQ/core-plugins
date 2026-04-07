import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

for (const extId of fs.readdirSync(srcDir)) {
  const skillSrc = path.join(srcDir, extId, 'skill.md');
  const skillDest = path.join(distDir, extId, 'skill.md');
  if (fs.existsSync(skillSrc)) {
    fs.mkdirSync(path.dirname(skillDest), { recursive: true });
    fs.copyFileSync(skillSrc, skillDest);
    console.log(`Copied skill.md → dist/${extId}/skill.md`);
  }
}
