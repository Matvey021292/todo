import {Component, Input} from '@angular/core';
import {Site} from '../site.model';
import {SitesService} from "../sites.service";

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})
export class SiteComponent {
    @Input() site: Site;

    constructor(private service: SitesService) {
    }

    onDelete() {
        this.service.deleteSite(this.site);
    }

    onBuy() {
        this.site.isSold = true;
        this.service.updateSite(this.site)
    }
}
