import { writeAlbums } from "../../utils/albums/writeAlbums.js";

export const removeAllAlbums = async()=> {
    await writeAlbums([]);
};

removeAllAlbums();