// import detect from "detect-file-encoding-and-language";

import { createFakeAlbum } from '../../utils/albums/createFakeAlbum.js';
import { readAlbums } from '../../utils/albums/readAlbums.js';
import { writeAlbums } from '../../utils/albums/writeAlbums.js';

const generateAlbums = async (number) => {
  const newAlbums = Array(number).fill(0).map(createFakeAlbum);
  const prevAlbums = await readAlbums();
//   const {encoding} = await detect('src/db/db-albums.json');
//   const data = await fs.readFile('src/db/db-albums.json', encoding);

  await writeAlbums([...prevAlbums, ...newAlbums]);
};

generateAlbums(5);
