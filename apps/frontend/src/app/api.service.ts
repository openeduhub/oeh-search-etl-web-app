import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spider, SpiderRun } from '@oeh-search-etl-web-app/api-interfaces';
import { Observable, of } from 'rxjs';

const SPIDERS: Spider[] = [
    {
        name: 'foo',
        lastRun: {
            startTime: new Date(),
            state: 'complete',
            id: 'foo',
        },
    },
    {
        name: 'bar',
        lastRun: { startTime: new Date(), state: 'running', id: 'foo' },
    },
    {
        name: 'baz',
        lastRun: null,
    },
];

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private readonly http: HttpClient) {}

    getSpiders(): Observable<Spider[]> {
        return of(SPIDERS);
    }

    getRuns(spider: string): Observable<SpiderRun[]> {
        const run = SPIDERS.find((s) => s.name === spider)?.lastRun;
        return of(run ? [run] : []);
    }
}
