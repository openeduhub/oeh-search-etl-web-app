import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Spider } from '@oeh-search-etl-web-app/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
    selector: 'oeh-search-etl-web-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // hello$ = this.http.get<Message>('/api/hello');
    spiders$ = this.api.getSpiders();

    activeSpider = new BehaviorSubject<Spider | null>(null);
    activeSpiderRuns = this.activeSpider.pipe(
        switchMap((spider) => (spider ? this.api.getRuns(spider.name) : []))
    );

    constructor(private api: ApiService) {}

    onSpiderSelectionChange(event: MatSelectionListChange): void {
        console.log(event.options);
    }
}
