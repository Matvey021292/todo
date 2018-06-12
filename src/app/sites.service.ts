///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import {Http, Response} from "@angular/http";
import {Store} from "@ngrx/store";
import {AppState} from "./redux/app.state";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Site} from "./site.model";
import {AddSite, DeleteSite, LoadSite, UpdateSite} from "./redux/site.action";
import {Observable} from "rxjs/Observable";


@Injectable()
export class SitesService {
    static BASE_URL: string = 'http://localhost:3000';

    constructor(private http: Http, private store: Store<AppState>) {
    }

    preloaderSites(): Observable<Site[]> {
        return this.http.get(SitesService.BASE_URL + '/sites')
            .map((response: Response) => response.json())

    }

    loadSites(): void {
        this.http.get(SitesService.BASE_URL + '/sites')
            .map((response: Response) => response.json())
            .toPromise()
            .then((sites: Site[]) => {
                this.store.dispatch(new LoadSite(sites));
            })
    }

    addSite(site: Site) {
        this.http.post(SitesService.BASE_URL + '/sites', site)
            .map((response: Response) => response.json())
            .toPromise()
            .then((site: Site) => {
                this.store.dispatch(new AddSite(site))
            })
    }

    deleteSite(site: Site) {
        this.http.delete(SitesService.BASE_URL + '/sites/' + site.id)
            .map((response: Response) => response.json())
            .toPromise()
            .then(_ => {
                this.store.dispatch(new DeleteSite(site))
            })
    }

    updateSite(site: Site) {
        this.http.put(SitesService.BASE_URL + '/sites/' + site.id, site)
            .map((response: Response) => response.json())
            .toPromise()
            .then((site: Site) => {
                this.store.dispatch(new UpdateSite(site))
            })
    }
}