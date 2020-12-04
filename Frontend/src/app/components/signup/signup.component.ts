import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.register(this.user).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token )
      },
      (err) => console.log(err)
    );
  }
}
