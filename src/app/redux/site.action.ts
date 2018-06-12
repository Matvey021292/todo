import {Site} from "../site.model";
import {Action} from "@ngrx/store";

export namespace SITE_ACTION {
    export const ADD_SITE = 'ADD_SITE';
    export const DELETE_SITE = 'DELETE_SITE';
    export const UPDATE_SITE = 'UPDATE_SITE';
    export const LOAD_SITE = 'LOAD_SITE';
}

export class AddSite implements Action {
    readonly type = SITE_ACTION.ADD_SITE;

    constructor(public payload: Site) {
    }
}

export class DeleteSite implements Action {
    readonly type = SITE_ACTION.DELETE_SITE;

    constructor(public payload: Site) {
    }
}

export class UpdateSite implements Action {
    readonly type = SITE_ACTION.UPDATE_SITE;

    constructor(public payload: Site) {
    }
}

export class LoadSite implements Action {
    readonly type = SITE_ACTION.LOAD_SITE;

    constructor(public payload: Site[]) {
    }
}

export type SiteAction = DeleteSite | AddSite | UpdateSite | LoadSite;