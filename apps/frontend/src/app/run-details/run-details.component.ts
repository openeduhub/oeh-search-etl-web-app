import { Component, Input } from '@angular/core';
import { SpiderRun } from '@oeh-search-etl-web-app/api-interfaces';

@Component({
    selector: 'oeh-search-etl-web-app-run-details',
    templateUrl: './run-details.component.html',
    styleUrls: ['./run-details.component.scss'],
})
export class RunDetailsComponent {
    @Input() run!: SpiderRun;
    @Input() log?: string;
}
