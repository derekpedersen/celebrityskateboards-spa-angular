import { ImgurImage } from "./imgur-image.model";

export class ImgurAlbum {
    id: string;
    title: string;
    descripton: string;
    images: ImgurImage;
}