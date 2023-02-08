import { Component,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit{
 
  @Input() product={

    
    "createdAt":'',
    "name":'',
    "image":'',
    "rate":0,
    "count":0,
    "description":'',
    "price":'',
    "reviews":[],
    "id":''


}
constructor(private router:Router ){}


ngOnInit(): void {}


  redirectToDetails(){
    this.router.navigate(['details' , this.product.id])
  }
}

