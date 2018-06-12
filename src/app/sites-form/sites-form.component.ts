import {Component, OnInit} from '@angular/core';
import {Site} from "../site.model";
import * as moment from 'moment';
import {SitesService} from "../sites.service";

@Component({
    selector: 'app-sites-form',
    templateUrl: './sites-form.component.html',
    styleUrls: ['./sites-form.component.css']
})
export class SitesFormComponent implements OnInit {

    siteUrl = '';
    siteLogin = '';
    sitePass = '';
    siteImage = '';

    constructor( private service: SitesService) {
    }
    onAdd() {
        if (this.siteUrl === '' || this.siteLogin === '' || this.sitePass === '' || this.siteImage === '') return;
        const date =  moment().format('DD.MM.YY');
        const site = new Site(
            this.siteUrl,
            date,
            this.siteLogin,
            this.sitePass,
            this.siteImage,
        );
        this.service.addSite(site);
        // this.addSite.emit(site);
        this.siteUrl = '';
        this.siteLogin = '';
        this.sitePass = '';
        this.siteImage = '';
    }

    onLoad() {
        this.service.loadSites()
    }

    ngOnInit() {
    }

}
