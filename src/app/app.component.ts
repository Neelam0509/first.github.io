import { Component, OnInit } from "@angular/core";
import { ProductserviceService } from "./services/productservice.service";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
  })
export class AppComponent implements OnInit{
  cartcount = 0;

  title = "MyStore";
  danger=true;
  themeclass={
    'bg-danger':false,
    'bg-purple':true
  }
   ngOnInit(): void {
    this.ps.cartcount$.subscribe(count =>{
      console.log(count);
      this.cartcount=count;
     })
  }
  toogletheme(){
    this.danger = !this.danger;
    this.themeclass={
      'bg-danger':this.danger,
      'bg-purple':!this.danger
    };
  }

  constructor(private ps:ProductserviceService){}
    getCartCount():void{
       //this.cartcount=this.ps.cartcount;

    }




}
