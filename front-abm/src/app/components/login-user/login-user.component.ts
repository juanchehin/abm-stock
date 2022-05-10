import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../classes/usuario';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: []
})

export class LoginUserComponent implements OnInit {
  usuario = { nombre: '', clave: '' };
  error = false;
  enviado = false;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.enviado = true;
    this.authSrv.login(this.usuario.nombre, this.usuario.clave)
      .subscribe((u: any) => {
        if (u === null) {
          console.log(u);
          this.error = true;
          this.enviado = false;
        } else {
          this.authSrv.nuevoLogueado(u);
          this.enviado = false;
          if (this.authSrv.redirectUrl) {
            this.router.navigate([this.authSrv.redirectUrl]);
          } else {
            this.router.navigate(['/listaarticulos']);
          }
        }

      });

  }
}
