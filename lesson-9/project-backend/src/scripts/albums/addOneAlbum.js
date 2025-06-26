import {createFakeAlbum} from "../../utils/albums/createFakeAlbum.js";
import { readAlbums } from "../../utils/albums/readAlbums.js";
import { writeAlbums } from "../../utils/albums/writeAlbums.js";

export const addOneAlbum = async ()=> {
    const prevAlbums = await readAlbums();
    const newAlbum = createFakeAlbum();
    await writeAlbums([...prevAlbums, newAlbum]);
};

addOneAlbum();