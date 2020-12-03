import { Subject } from 'rxjs';
import {User} from "../models/User.models";


export class UserService {

private users: User[] = [
 {
    firstName: 'Siham' ,
    lastName: 'Lahouali',
    email: 'lahoualisiham91@gmail.com',
    drinkPreference: 'jus',
    hobbies: [
        'coder', 
        'sport'
    ]
 }

];
userSubject = new Subject<User[]>();

emiteUsers() {

this.userSubject.next(this.users.slice());

}

addUser(user:User) {
this.users.push(user);
this.emiteUsers();
}
}