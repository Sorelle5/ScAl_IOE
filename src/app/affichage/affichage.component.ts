import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScanService } from '../services/scan.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  scannedCode!: string;
  product: any; // Variable pour stocker les informations du produit
  valDep!: number;
  valCom!: number;
  valEnt!: number;
  dep_com!: string;
  euUnion!: string;
  states!: { name: string; };
  lp!: string;

  constructor(private route: ActivatedRoute, private scanService: ScanService, private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.scannedCode = this.scanService.code
    this.getProductInfo(this.scannedCode).then((result) => {
      console.log(result)
      this.product = result.product;
    });

    if(this.scanService.department!=0 && this.scanService.commune!=0) {
      this.valDep=this.scanService.department;
      this.valCom=this.scanService.commune;
      var code_po = "" + this.valDep + this.valCom;
      this.getLieuProductInfo(code_po).then((result) => {
        console.log(result)
        this.lp = "Lieu de production : ";
        this.dep_com = "" + result.nom + ", " + result.departement.nom;
      });
    } 

  }

  // Fonction pour récupérer les informations du produit à partir de l'API Open Food Facts
  getProductInfo(code: string): Promise<any> {
    return fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  getLieuProductInfo(code: string): Promise<any> {
    return fetch(`https://geo.api.gouv.fr/communes/${code}?fields=departement&format=json&geometry=centre`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  /*getGeographicalInfo() {
    this.http.get<any[]>(`https://geo.api.gouv.fr/communes/?codeDepartement=${this.valDep}&codeCommune=${this.valCom}&codePostal=${this.valEnt}`)
      .subscribe((data: any[]) => {
        if (data.length > 0) {
          const firstCommune = data[0];
          this.department = firstCommune.departement.nom;
          this.commune = firstCommune.nom;
          this.euUnion = firstCommune.codesPostaux.includes('UE') ? 'Oui' : 'Non';
          this.states.name = firstCommune.nom;
        }
      });
  }

  submitForm() {
    this.http.get<any[]>(`https://geo.api.gouv.fr/communes/?codeDepartement=${this.valDep}&codeCommune=${this.valCom}&codePostal=${this.valEnt}`)
      .subscribe((data: any[]) => {
        if (data.length > 0) {
          const firstCommune = data[0];
          this.department = firstCommune.departement.nom;
          this.commune = firstCommune.nom;
          this.euUnion = firstCommune.codesPostaux.includes('UE') ? 'Oui' : 'Non';
          this.states.name = firstCommune.nom;
        }
      });
    this.getGeographicalInfo();
  }*/

}
