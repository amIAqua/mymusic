import { ITopArtistsItemApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/partials/item/ITopArtistsItemApiResponse';
import { ITopArtistsItem } from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';

export const mapITopArtistsItemApiResponseToITopArtistsItem = (data: ITopArtistsItemApiResponse): ITopArtistsItem => ({
    popularity: data.popularity,
    type: data.type,
    ...(!!data.external_urls && {
        externalUrls: {
            spotify: data.external_urls.spotify,
        }
    }),
    ...(!!data.followers && {
        followers: {
            total: data.followers.total,
            href: data.followers.href,
        }
    }),
    genres: data.genres,
    id: data.id,
    name: data.name,
    uri: data.uri,
    ...(!!data.images && {
        images: data.images.map((image) => ({
            height: image.height,
            width: image.width,
            url: image.url,
        }))
    }),
});