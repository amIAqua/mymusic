import { ITopArtistsApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/ITopArtistsApiResponse';
import { ITopArtists } from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/ITopArtists';
import {
    mapITopArtistsItemApiResponseToITopArtistsItem
} from 'app/modules/api/clients/dashboard/mappers/item/mapITopArtistsItemApiResponseToITopArtistsItem';

export const mapITopArtistsApiResponseToITopArtists = (data: ITopArtistsApiResponse): ITopArtists => ({
    href: data.href,
    limit: data.limit,
    next: data.next,
    offset: data.offset,
    previous: data.previous,
    total: data.total,
    items: data.items.map(mapITopArtistsItemApiResponseToITopArtistsItem),
});