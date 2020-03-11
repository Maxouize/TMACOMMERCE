import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

    private baseUrl = environment.contextBackUrl;
    private axios: any;

    constructor(private http: HttpClient) {
        this.axios = require('axios');
    }

    /**
     * 
     */
    async getDataTestAxios(): Promise<any[]> {
        let res = await this.axios.get('https://api.github.com/users/KrunalLathiya');
        return res;
        console.log(res.data.login);
    }
}
