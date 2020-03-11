import { AxiosService } from './../../service/axios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  public achatForm: FormGroup;
  public listMagasin: any[];
  public listProduit: any[];
  public listAcheteur: any[];
  public message: string;

  constructor(private axiosService: AxiosService,
              private formBuilder: FormBuilder) {
    this.achatForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.axiosService.getMagasins().then(data => {
      this.listMagasin = data.data;
      console.log('listMagasin', this.listMagasin);
    });

    this.axiosService.getProduits().then(listProduit => {
      this.listProduit = listProduit.data;
      console.log('listProduit', this.listProduit);
    });

    this.axiosService.getAcheteurs().then(acheteurs => {
      this.listAcheteur = acheteurs.data;
      console.log('listAcheteur', this.listAcheteur);
    });

    this.initForm();
  }

  private initForm() {
    this.achatForm = this.formBuilder.group({
      magasin: new FormControl('', Validators.required),
      produit: new FormControl('', Validators.required),
      quantite: new FormControl('', [Validators.required, Validators.max(1)]),
      acheteur: new FormControl('', Validators.required)
    });
  }

  public onSubmit() {
    console.log(this.achatForm.getRawValue());
    const formData = this.achatForm.getRawValue();
    const acheteur = _.find(this.listAcheteur, ['id', formData.acheteur]);
    const magasin = _.find(this.listMagasin, ['id', formData.magasin]);
    const produit = _.find(this.listProduit, ['id', formData.produit]);
    this.message = 'Bonjour monsieur ' + acheteur.nom + ', vous avez acheter sur le magasin ' 
      + magasin.ville + ', le produit ' + produit.nom + ' à ' + produit.prix + '€.';
    this.axiosService.postCommande(this.achatForm.getRawValue());
  }
}
