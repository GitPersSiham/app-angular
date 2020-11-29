export class AppareilService {

    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
    
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
}