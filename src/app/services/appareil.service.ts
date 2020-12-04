import { Subject } from 'rxjs/Subject';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AppareilService {
  appareilsSubject = new Subject<any[]>();

    private appareils = [];
    

      constructor(private HttpClient: HttpClient){

      }

      getAppareilById(id: number){
       const appareil = this.appareils.find(
           (appareilObject) => {
             return appareilObject.id === id;
           }
       );
       return appareil
      }

      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }


      switchOnAll(){
       for(let appareil of this.appareils){
           appareil.status = 'allumé'
       }

      }
      switchOfAll(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint'
        }
 
       } 
      swichOnOne(index: number){
       this.appareils[index].status ='allumé';

      }
      swichOfOne(index: number){
        this.appareils[index].status ='éteint';
 
       }
       addAppareil(name:string, status:string){
        const appareilObject = {
          id: 0,
          name:'',
          status:''
        };
        appareilObject.name = name ;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length-1)].id + 1;
        this.appareils.push(appareilObject);
       }

       SaveAppareilsToServer() {
        this.HttpClient
        .put('https://http-client-demo-45172-default-rtdb.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
          () => {
           console.log('Enregistrement terminé !');
          },
          (error) => {
           console.log('Erreur  de sauvgarde' + error);
          }
        );
       }

       getAppareilsFromServer(){
        this.HttpClient
        .get<any[]>('https://http-client-demo-45172-default-rtdb.firebaseio.com/appareils.json')
         .subscribe(
           (response) => {
             this.appareils = response;
             this.emitAppareilSubject();

           },
           (error) => {

            console.log('Erreur  de sauvgarde' + error);
           }
         )               

       }

}