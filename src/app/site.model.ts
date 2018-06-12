export class Site {
    constructor(
        public url: string,
        public date: string,
        public login: string,
        public pass: string,
        public image: string,
        public isSold: boolean = false,
        public id?: number
    ){}
}

export interface Sites {
    sites: Site[]
}