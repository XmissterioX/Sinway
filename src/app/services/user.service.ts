import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import * as sha512 from 'js-sha512';


@Injectable()
export class UserService {

adresse = 'http://siniway.com/stages/connexion.php';
data: any;

constructor(private http: HttpClient) {}


login(user: User){
    var hashedUser: User = new User();;
    hashedUser.email = user.email;
    hashedUser.password = sha512.sha512.hex(user.password);
this.data = { user : hashedUser };
return this.http.post(this.adresse, this.data);
}

}
