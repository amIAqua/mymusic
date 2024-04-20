import { Observable, map, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { DashboardApiRepository } from 'app/modules/api/clients/dashboard/repositories/dashboard-api.repository';
import { mapITopArtistsApiResponseToITopArtists } from 'app/modules/api/clients/dashboard/mappers/mapITopArtistsApiResponseToITopArtists';

@Injectable({
    providedIn: 'root',
})
export class DashboardApiService {

    public constructor(
        private readonly dashboardApiRepository: DashboardApiRepository
    ) {}

    public loadUserTopArtists(limit?: number, offset?: number, timeRange?: string): Observable<any> {
        try {
            return this.dashboardApiRepository.loadUserTopArtists(
                limit, offset, timeRange,
            ).pipe(
                take(1),
                map(mapITopArtistsApiResponseToITopArtists),
            );
        } catch (error: any) {
            throw new Error(error);
        }
    }

}