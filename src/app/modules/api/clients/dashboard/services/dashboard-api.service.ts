import { Observable, map, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { DashboardApiRepository } from 'app/modules/api/clients/dashboard/repositories/dashboard-api.repository';
import { ITopTracksApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topTracks/fromApi/ITopTracksApiResponse';
import { ITopArtistsApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/ITopArtistsApiResponse';
import { mapITopArtistsApiResponseToITopArtists } from 'app/modules/api/clients/dashboard/mappers/mapITopArtistsApiResponseToITopArtists';
import { mapITopTracksApiResponseToITopTracks } from 'app/modules/api/clients/dashboard/mappers/mapITopTracksApiResponseToITopTracks';

@Injectable({
    providedIn: 'root',
})
export class DashboardApiService {

    public constructor(
        private readonly dashboardApiRepository: DashboardApiRepository,
    ) {}

    public loadUserTopArtists(
        limit?: number,
        offset?: number,
        timeRange?: string,
    ): Observable<ITopArtistsApiResponse> {
        try {
            return this.dashboardApiRepository.loadUserTopItemsByType<ITopArtistsApiResponse>(
                'artists',
                limit,
                offset,
                timeRange,
            ).pipe(
                take(1),
                map(mapITopArtistsApiResponseToITopArtists),
            );
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public loadUserTopTracks(
        limit?: number,
        offset?: number,
        timeRange?: string,
    ): Observable<ITopTracksApiResponse> {
        try {
            return this.dashboardApiRepository.loadUserTopItemsByType<ITopTracksApiResponse>(
                'tracks',
                limit,
                offset,
                timeRange,
            ).pipe(
                take(1),
                map(mapITopTracksApiResponseToITopTracks),
            );
        } catch (error: any) {
            throw new Error(error);
        }
    }

}