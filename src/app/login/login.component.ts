import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  processing = false;
  
  user: User = new User();
  constructor(private router: Router, private userService: UserService,page: Page) { 
    page.actionBarHidden = true;
  }

  ngOnInit() {
      }

  

  submit() {
    if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
    }

    this.processing = true;
        this.login();
}

  login() {
    this.userService.login(this.user).subscribe(
      res => {
        let navigationExtras = {
          queryParams: {
           'status': res['status'],
           'message': res['message']
        }
        }
        this.processing = false;
        this.router.navigate(["/home"],navigationExtras);
      },
      err => {
       this.processing = false; 
       this.alert("error");
       
        });
           
}

alert(message: string) {
  return alert({
      title: "Oops!",
      okButtonText: "OK",
      message: message 
  });
}
}
