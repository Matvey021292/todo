import {Injectable} from "@angular/core";

import {AddSite, SITE_ACTION} from "./site.action";
import "rxjs/add/operator/switchMap";
import {Site} from "../site.model";
import {SitesService} from "../sites.service";
import {Actions, Effect} from "@ngrx/effects";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class SiteEffect {
    constructor(private actions$: Actions, private service: SitesService) {
    }0
    @Effect() loadSite = this.actions$.ofType(SITE_ACTION.ADD_SITE)
        .switchMap((action: AddSite) => {
            return this.service.preloaderSites();
        })
        .mergeMap((site: Site[]) => {
            return [
                {
                    type: SITE_ACTION.LOAD_SITE,
                    payload: site
                }
            ]
        })
}