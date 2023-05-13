
import { baseURL} from './baseURL'

export const getAlbum = async (albumId) => {
    const url = `${baseURL}/api/gallery/album/${albumId}/`;
    const response = await fetch(url);
    const album = await response.json();
    if (response.ok) {
        return album;
    } else {
        throw album
    }
}

export const getAllAlbums = async () => {
    const url = `${baseURL}/api/gallery/albums/`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {'content-type': 'application/json',}
    });
    const albums = await response.json();
    if (response.ok) {
        return albums;
    } else {
        throw albums
    }
}
