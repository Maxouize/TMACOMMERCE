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
    async getDataTestAxios(){
        let res = await this.axios.get('https://api.github.com/users/KrunalLathiya');
        return res;
    }
    // GET ENDPOINTS
    async getMagasins() {
        let res = await this.axios.get('http://172.20.10.10:8000/api/magasin/');
        return res;
    }
    async getAcheteurs() {
        let res = await this.axios.get('http://172.20.10.10:8000/api/acheteur/');
        return res;
    }
    async getProduits() {
        let res = await this.axios.get('http://172.20.10.10:8000/api/produit/');
        return res;
    }
    async getCommandes() {
        let res = await this.axios.get('http://172.20.10.10:8000/api/commande/');
        return res;
    }
    // POST ENDPOINTS
    async postMagasin(data) {
        let res = await this.axios.post('http://172.20.10.10:8000/api/magasin/', data);
        return res;
    }
    async postAcheteur(data) {
        let res = await this.axios.post('http://172.20.10.10:8000/api/acheteur/', data);
        return res;
    }
    async postProduit(data){
        let res = await this.axios.post('http://172.20.10.10:8000/api/produit/', data);
        return res;
    }
    async postCommande(data){
        let res = await this.axios.post('http://172.20.10.10:8000/api/commande/', data);
        return res;
    }
    // PATCH
    async patchAcheteur(data) {
        let res = await this.axios.patch(`http://172.20.10.10:8000/api/acheteur/${data.id}/`, data);
        return res;
    }
}
