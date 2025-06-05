import { readAlbums } from "../../utils/albums/readAlbums.js";

const getAllAlbums = ()=> readAlbums();

console.log(await getAllAlbums());