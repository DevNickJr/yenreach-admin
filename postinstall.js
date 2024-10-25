import fse from 'fs-extra';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const topDir = path.dirname(__filename);
// const topDir = import.meta.dirname;
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'));
fse.copySync(path.join(topDir, 'node_modules', 'tinymce'), path.join(topDir, 'public', 'tinymce'), { overwrite: true });