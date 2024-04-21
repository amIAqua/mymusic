import { ITopTracks } from 'app/modules/api/clients/dashboard/interfaces/topTracks/toApi/ITopTracks';
import {
    mapITopTracksItemApiResponseToITopTracksItem
} from 'app/modules/api/clients/dashboard/mappers/item/mapITopTracksItemApiResponseToITopTracksItem';
import { ITopTracksApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topTracks/fromApi/ITopTracksApiResponse';

export const mapITopTracksApiResponseToITopTracks = (data: ITopTracksApiResponse): ITopTracks => ({
    href: data.href,
    limit: data.limit,
    next: data.next,
    offset: data.offset,
    previous: data.previous,
    total: data.total,
    items: data.items.map(mapITopTracksItemApiResponseToITopTracksItem),
});