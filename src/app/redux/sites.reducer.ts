import {SITE_ACTION, SiteAction} from "./site.action";
const initialState = {
    sites: []
};

export function sitesReducer(state = initialState, action: SiteAction) {
    switch (action.type) {
        case SITE_ACTION.ADD_SITE:
            return {
                ...state,
                sites: [...state.sites, action.payload]
            };
        case SITE_ACTION.DELETE_SITE:
            return {
                ...state,
                sites: [...state.sites.filter(c => c.id !== action.payload.id)]
            };
        case SITE_ACTION.UPDATE_SITE:
            const idx = state.sites.findIndex(c => c.id === action.payload.id);
            state.sites[idx].isSold = true;
            return {
                ...state,
                sites: [...state.sites]
            }
        case SITE_ACTION.LOAD_SITE:
            return{
                ...state,
                sites:[...action.payload]
            }
        default:
            return state
    }
}