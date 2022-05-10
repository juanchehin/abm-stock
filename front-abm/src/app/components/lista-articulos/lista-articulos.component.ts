import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: []
})
export class ListaArticulosComponent implements OnInit {
  articulos: any;
  titulo = 'Articulos';
  vendedor = false;

  constructor(private authSrv: AuthService, private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getArticulos().subscribe(articulos => {
      this.articulos = articulos;
    });
    this.vendedor = this.authSrv.isVenta();
  }

}
