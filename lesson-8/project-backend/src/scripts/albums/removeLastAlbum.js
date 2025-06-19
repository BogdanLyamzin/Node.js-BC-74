import { readAlbums } from "../../utils/albums/readAlbums.js";
import { writeAlbums } from "../../utils/albums/writeAlbums.js";

export const removeLastAlbum = async ()=> {
    const albums = await readAlbums();
    albums.pop();
    writeAlbums(albums);
};

removeLastAlbum();