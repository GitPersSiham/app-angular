export class AppareilService {

    appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id:3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

      getAppareilById(id: number){
       const appareil = this.appareils.find(
           (appareilObject) => {
             return appareilObject.id === id;
           }
       );
       return appareil
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
}