import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit{
  starwidth =0;
  @Input()
  rating!:number;
   @Output()
   ratingClick = new EventEmitter<number>();
  constructor(){}
  ratingClicked():void{
    this.ratingClick.emit(this.rating);
  }
  ngOnInit(): void {
    this.starwidth=this.rating*20;
  }



}
