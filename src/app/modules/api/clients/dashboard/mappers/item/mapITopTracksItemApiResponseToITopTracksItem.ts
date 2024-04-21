import { ITopTracksItemApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topTracks/fromApi/partials/item/ITopTracksItemApiResponse';
import { ITopTracksItem } from 'app/modules/api/clients/dashboard/interfaces/topTracks/toApi/partials/item/ITopTracksItem';

export const mapITopTracksItemApiResponseToITopTracksItem = (data: ITopTracksItemApiResponse): ITopTracksItem => ({
    // popularity: data.popularity,
    // type: data.type,
    // ...(!!data.external_urls && {
    //     externalUrls: {
    //         spotify: data.external_urls.spotify,
    //     }
    // }),
    // ...(!!data.followers && {
    //     followers: {
    //         total: data.followers.total,
    //         href: data.followers.href,
    //     }
    // }),
    // genres: data.genres,
    id: data.id,
    name: data.name,
    // name: data.name,
    // uri: data.uri,
    // ...(!!data.images && {
    //     images: data.images.map((image) => ({
    //         height: image.height,
    //         width: image.width,
    //         url: image.url,
    //     }))
    // }),
});