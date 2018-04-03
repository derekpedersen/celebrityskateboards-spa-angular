import { Address } from '../address/address.model';
import { ImgurAlbum } from '../imgur/imgur-album.model'

export class Skatepark {
    id: string;
    name: string;
    description: string;
    address: Address;
    albumId: string;
    album: ImgurAlbum;
}