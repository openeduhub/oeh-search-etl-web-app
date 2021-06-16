import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spider, SpiderRun } from '@oeh-search-etl-web-app/api-interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private readonly http: HttpClient) {}

    getSpiders(): Observable<Spider[]> {
        return of([
            {
                name: 'foo',
                lastRun: null,
            },
            {
              name: 'bar',
              lastRun: null,
          },
        ]);
    }

    getRuns(spider: string): Observable<SpiderRun[]> {
        return of([{ startTime: new Date(), state: 'complete', id: 'foo' }]);
    }
}
