import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent{
adm=new Admin();
constructor(private router: Router){}
  public loginAdminAngular(name:string,pass:string){
    console.log(name+"*"+pass);
    if(name=="Admin"&&pass=="password"){
      this.router.navigate(['/Admin']);
    }
  }
}
