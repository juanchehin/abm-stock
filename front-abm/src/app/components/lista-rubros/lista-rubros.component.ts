import { Component, OnInit } from '@angular/core';
import { Rubro } from '../../classes/rubro';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lista-rubros',
  templateUrl: './lista-rubros.component.html',
  styleUrls: []
})

export class ListaRubrosComponent implements OnInit {
  rubros: any;
  titulo = 'Rubros';
  admin = false;

  constructor(private dataSrv: DataService, private authSrv: AuthService) {
    this.dataSrv.getRubros().subscribe((r: any) => {
      this.rubros = r;
    });
  }

  ngOnInit() {
    this.admin = this.authSrv.isAdmin();
  }

}
