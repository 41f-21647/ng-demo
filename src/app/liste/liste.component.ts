import { Component } from '@angular/core';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  produits:Array<IProduit>;
  sontEditable:boolean = false;
  
  constructor(){
    this.produits = [...Array(5)].map((item, index)=>{
      return {  nom : "element " + index, 
              fabricant: "brasserie xyz", 
              prix: (10 + index*2), 
              id:1+index,
              rabais : !(index % 3)};
    })
    console.log(this.produits)
    
  }

  estEnSolde(unProduit:IProduit){
    return (unProduit.prix < 15 && unProduit.rabais);
  }

  verifEditable(unProduit:IProduit):boolean{
    let res:boolean = false;
    if(this.sontEditable || unProduit.estEditable){
      res = true;
    }
    return res;
  }

}
