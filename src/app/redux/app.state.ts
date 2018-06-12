import {Site} from "../site.model";

export interface AppState {
    sitePage: {
        sites: Site[]
    }
}