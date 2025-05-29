import * as fs from 'node:fs/promises';

import { PATH_DB_ALBUMS } from '../../constants/albums.js';

export const readAlbums = async ()=> JSON.parse(
    await fs.readFile(PATH_DB_ALBUMS, 'utf-8'),
);