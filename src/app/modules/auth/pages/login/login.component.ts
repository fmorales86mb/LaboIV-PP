
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credential } from '../../models/credential';
import { ResponseFirebase } from '../../models/response-firebase';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public credential: Credential;
  public showSpinner:boolean;
  public hasAlert:boolean;
  public alertMessage:string;

  empleado = new Credential("empleado@email.com", "pas123");
  admin = new Credential("admin@email.com", "pas123");

  constructor(private fb:FormBuilder, 
    private authService: AuthService,
    private router:Router,
    private userService:UsersService) {
    
    this.credential = new Credential("","");
    this.showSpinner = false;
    this.hasAlert = false;
    this.alertMessage ="";
   }

  async clickIngresar(){
    this.hasAlert = false;
    this.showSpinner = false;

    this.credential = new Credential(
      this.getEmailCtrl().value, 
      this.getPassCtrl().value
    );    
    
    if(this.credential.GetEmail() == this.empleado.GetEmail() && this.credential.GetPass() == this.empleado.GetPass()){
      let user = new User();
      user.email = this.credential.email;
      user.name = "empleado";
      this.userService.currentUser =user;
      this.authService.isAuth = true;
      this.router.navigate(['lista-repartidor']);
    }
    else if(this.credential.GetEmail() == this.admin.GetEmail() && this.credential.GetPass() == this.admin.GetPass()){
      let user = new User();
      user.email = this.credential.email;
      user.name = "admin";
      this.userService.currentUser =user;
      this.authService.isAuth = true;
      this.router.navigate(['lista-repartidor']);
    }
    else{
      this.alertMessage = "Usuario inválido";
      this.showSpinner = false;
      this.hasAlert = true;    
    }
    // try{                 
    //   let response: ResponseFirebase = await this.authService.Ingresar(this.credential);      

    //   if (await response.ok){   
    //     this.userService.getCurrentUserById(this.credential.GetEmail()).subscribe(
    //       user => {
    //         this.userService.currentUser = user.data();
    //         this.router.navigate(['']);
    //         this.showSpinner = false;
    //       });
    //   }
    //   else{        
    //     this.alertMessage = await response.error.description;
    //     this.showSpinner = false;
    //     this.hasAlert = true;        
    //   }      
    // }
    // catch(error){
    //   this.alertMessage = "Ocurrió un error inesperado";
    //   this.hasAlert = true;
    //   console.log(error);
    //   this.showSpinner = false;
    // }   
  }

  getEmailCtrl(){return this.loginForm.get("emailCtrl");}

  getPassCtrl(){return this.loginForm.get("passCtrl");}

  goToRegister() {this.router.navigate(['register']); }

  cargarUsuario(id:number){
    if(id == 1){
      this.credential = new Credential("empleado@email.com", "pas123");
    }
    else if(id ==2){
      this.credential = new Credential("usuario2@email.com", "pas123");
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailCtrl:['', [Validators.required, Validators.email]],
      passCtrl:['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
