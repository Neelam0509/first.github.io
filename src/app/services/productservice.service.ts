import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, delay, filter, interval, map, of, pipe } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


   value$= of(1,2,3,'hello',[1,2,3]);

   myObservable$ = new Observable(observer =>
    {
      observer.next(1);
      observer.next(2);
      //throw new Error('error occured');
      observer.next(3);
      observer.complete();
      observer.next(4);
      observer.next(5);
    })
    oprate$ = of(1,2,3,4,5);
    sub$ !: Subscription;
    myinterval$ = interval(1000);
    private cartcount =0;
    subject$ = new Subject<number>();//creates a subject
    cartcount$ = new BehaviorSubject<number>(0);

 constructor(private http : HttpClient) {
    //this.value$.subscribe(val => console.log(val));
    //this.myObservable$.subscribe(val => console.log(val));
   /* this.myObservable$.subscribe({
      next : val => console.log(val),
      error : err => console.log(err),
      complete  : () => console.log('completed')
    });*/
    //this.sub$=this.myinterval$.subscribe(val => console.log(val));
    this.subject$.subscribe(val => console.log('A',val)); // subscribes a subject
    this.subject$.next(1);  //passes the value to subject
    this.subject$.next(2);
    this.subject$.subscribe(val => console.log('B',val));
    this.subject$.next(3);
    this.subject$.complete();
    this.subject$.next(4);
    setTimeout(()=>
    {
      if(this.sub$){
      this.sub$.unsubscribe();
      }
    })
    /*this.oprate$.pipe(
      map(val => val*val),
      filter(val => val% 2 ==0),
       delay(5000)
      ).subscribe(val => console.log(val))*/

  }
getProducts():Observable<Product[]>
{
  return this.http.get<Product[]>(`http://localhost:3000/products`)
}
  increment():void{
    this.cartcount += 1;
    console.log(this.cartcount);
    this.cartcount$.next(this.cartcount);
  }
}
