import { Single, setSingleValue } from './../model/Single';
import { AxiosService } from './../service/axios.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public magasinsCA: any[];
  public displayedColumns: string[];
  public displayedColumnsDelay: string[];
  public singleCa: Single[];

  view: number[];
  viewMobile: number[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Magasin';
  showYAxisLabel = true;
  yAxisLabel = 'Chiffre d\'affaire';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private aviosService: AxiosService) {
    this.magasinsCA = [];
    this.singleCa = [];
    this.view = [700, 400];
    this.viewMobile = [400, 200];
  }

  ngOnInit() {
    this.displayedColumns = ['magasin', 'chiffre'];
    this.aviosService.getCommandes().then(commandes => {
      const commandeGroup = _.groupBy(commandes.data, 'magasin.ville');
      const hourAgo = new Date(new Date().getTime() - (1000 * 60 * 60));
      Object.keys(commandeGroup).forEach(key => {
        let CA = 0;
        commandeGroup[key].forEach(commande => {
          if (new Date(commande.date) > hourAgo) {
            CA += commande.produit.prix;
          }
        });
        const CAtoDisplay = CA.toLocaleString('fr');
        this.magasinsCA.push({magasin: key, chiffre: CAtoDisplay});
        this.singleCa.push(setSingleValue(key, CA));
      });
    });
  }

}
