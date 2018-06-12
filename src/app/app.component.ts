import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store'
import {Site} from './site.model';
import {AppState} from "./redux/app.state";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public sites: Site[] = [];
    public siteState: Observable<Site>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.store.select('sitePage').subscribe(({sites}) => {
            this.sites = sites
        })
    }
}
