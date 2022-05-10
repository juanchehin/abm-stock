import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: []
})
export class ListaClientesComponent implements OnInit {

  clientes: any;
  titulo = 'Clientes';
  admin = false;

  constructor(private dataSrv: DataService, private authSrv: AuthService) { }

  ngOnInit() {
    this.dataSrv.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
    this.admin = this.authSrv.isAdmin();
  }

}
