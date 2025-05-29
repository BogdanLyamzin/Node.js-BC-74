import * as fs from 'node:fs/promises';

import { PATH_DB_ALBUMS } from '../../constants/albums.js';

export const writeAlbums = albums => fs.writeFile(
    PATH_DB_ALBUMS,
    JSON.stringify(albums, null, 2),
);