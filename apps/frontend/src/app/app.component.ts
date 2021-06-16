import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Spider, SpiderRun } from '@oeh-search-etl-web-app/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
    selector: 'oeh-search-etl-web-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // hello$ = this.http.get<Message>('/api/hello');
    spiders$ = this.api.getSpiders();
    log = `✔ Workspace name (e.g., org name)     · oeh-search-etl-web-app
    ✔ What to create in the new workspace · angular-nest
    ✔ Application name                    · frontend
    ✔ Default stylesheet format           · scss
    ✔ Use Nx Cloud? (It's free and doesn't require registration.) · No
    
    >  NX  Nx is creating your workspace.
    
      To make sure the command works reliably in all environments, and that the preset is applied correctly,
      Nx will run "npm install" several times. Please wait.
    
    ✔ Installing dependencies with npm
    ✔ Nx has successfully created the workspace.
    
    ———————————————————————————————————————————————
    
    
    >  NX   NOTE  Nx CLI is not installed globally.
    
      This means that you might have to use "yarn nx" or "npx nx" to execute commands in the workspace.
      Run "yarn global add nx" or "npm install -g nx" to be able to execute command directly.
    
    
    ———————————————————————————————————————————————
    
    
    >  NX   NOTE  First time using Nx? Check out this interactive Nx tutorial.
    
      https://nx.dev/angular/tutorial/01-create-application
      
      Prefer watching videos? Check out this free Nx course on YouTube.
      https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco
    
    npx create-nx-workspace@latest  86.91s user 9.22s system 129% cpu 1:14.28 total
    `;

    activeSpider = new BehaviorSubject<Spider | null>(null);
    activeSpiderRuns = this.activeSpider.pipe(
        tap(() => this.selectedRun.next(null)),
        switchMap((spider) => (spider ? this.api.getRuns(spider.name) : [])),
        tap((runs) => this.selectedRun.next(runs[0]))
    );
    selectedRun = new BehaviorSubject<SpiderRun | null>(null);

    constructor(private api: ApiService) {}

    onSpiderSelectionChange(event: MatSelectionListChange): void {
        console.log(event.options);
    }

    startSpider(spider: string): void {
        this.api.startSpider(spider);
    }

    cancelSpider(spider: string): void {
        this.api.cancelSpider(spider);
    }
}
