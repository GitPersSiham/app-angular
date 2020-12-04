import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils: any[];
  appareilSubscription: Subscription;
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit(){

    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
    
  }

  onAllumer(){
  this.appareilService.switchOnAll();

 }
 onEteindre(){
   this.appareilService.switchOfAll();
 }
 onSave(){
 this.appareilService.SaveAppareilsToServer();

 }
 onFetch(){
   this.appareilService.getAppareilsFromServer();
 }
}
