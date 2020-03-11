import { Component, OnInit } from '@angular/core';
import { AxiosService } from './../../service/axios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public listAcheteur: any[];

  constructor(private axiosService: AxiosService) {
  }

  ngOnInit() {
    this.axiosService.getAcheteurs().then(acheteurs => {
      this.listAcheteur = acheteurs.data;
      console.log('listAcheteur', this.listAcheteur);
    });
  }

  changeAcheteurStatus(id, status) {
    this.axiosService.patchAcheteur({ id: id, actif: !status })
    setTimeout(() => this.axiosService.getAcheteurs().then(acheteurs => { this.listAcheteur = acheteurs.data }), 1000)
  }

}
