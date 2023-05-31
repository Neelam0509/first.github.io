import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent implements OnInit {
  imgStyle={
     'width.px':200,
     'height.px':200,
};
  products:Product[]=[

]
ngOnInit(): void {
  this.ps.getProducts().subscribe(products =>{
    this.products = products;
  })
}
constructor(private ps:ProductserviceService){}

filter='';
addtocart(pro:any){
  //console.log(pro);
  this.ps.increment();
}
onRatingClicked():void{
  alert('You have Clicked');
}
}
