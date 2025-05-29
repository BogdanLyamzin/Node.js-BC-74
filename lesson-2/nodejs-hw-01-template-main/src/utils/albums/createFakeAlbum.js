import {faker} from "@faker-js/faker";

export const createFakeAlbum = ()=> ({
    album: faker.music.album(),
    artist: faker.music.artist(),
    genre: faker.music.genre(),
});