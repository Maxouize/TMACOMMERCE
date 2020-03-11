import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class AxiosService {

    private baseUrl = environment.contextBackUrl;
    private axios: any;

    constructor(private http: HttpClient) {
        this.axios = axios;
    }

    /**
     * 
     */
    async getDataTestAxios(): Promise<any[]> {
        let res = await this.axios.get('https://api.github.com/users/KrunalLathiya');
        return res;
    }
    // GET ENDPOINTS
    async getMagasins(): Promise<any[]> {
        let res = await this.axios.get('https://127.0.0.1/api/magasin/');
        return res;
    }
    async getAcheteurs(): Promise<any[]> {
        let res = await this.axios.get('https://127.0.0.1/api/acheteur/');
        return res;
    }
    async getProduits(): Promise<any[]> {
        let res = await this.axios.get('https://127.0.0.1/api/produit/');
        return res;
    }
    async getCommandes(): Promise<any[]> {
        let res = await this.axios.get('https://127.0.0.1/api/commande/');
        return res;
    }
    // POST ENDPOINTS
    async postMagasin(data): Promise<any[]> {
        let res = await this.axios.post('https://127.0.0.1/api/magasin/', data);
        return res;
    }
    async postAcheteur(data): Promise<any[]> {
        let res = await this.axios.post('https://127.0.0.1/api/acheteur/', data);
        return res;
    }
    async postProduit(data): Promise<any[]> {
        let res = await this.axios.post('https://127.0.0.1/api/produit/', data);
        return res;
    }
    async postCommande(data): Promise<any[]> {
        let res = await this.axios.post('https://127.0.0.1/api/commande/', data);
        return res;
    }
}
