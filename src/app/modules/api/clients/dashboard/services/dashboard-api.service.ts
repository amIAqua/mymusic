import { Observable, map, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { DashboardApiRepository } from 'app/modules/api/clients/dashboard/repositories/dashboard-api.repository';
import { ITopArtistsApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/ITopArtistsApiResponse';
import { mapITopArtistsApiResponseToITopArtists } from 'app/modules/api/clients/dashboard/mappers/mapITopArtistsApiResponseToITopArtists';

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
    ): Observable<ITopArtistsApiResponse> {
        try {
            return this.dashboardApiRepository.loadUserTopItemsByType<any>(
                'tracks',
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

}