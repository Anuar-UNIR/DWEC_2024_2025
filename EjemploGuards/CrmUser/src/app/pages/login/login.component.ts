import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userService = inject(UserService);
  router = inject(Router);

  async getUser(loginForm: NgForm) {

    //"emilys","password":"emilyspass"
    const loginUser: IUser = loginForm.value as IUser;
    loginUser.expiresInMins = 30;

    try {
      let response = await this.userService.login(loginUser);
      
      if (response.accessToken) {
        console.log(response);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        this.router.navigate(['/dashboard'])
        loginForm.reset();
      }

    }
    catch (error)
    {
      alert("Credenciasles incorrectos");
      loginForm.reset();
    }
    
  }

}
