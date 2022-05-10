import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rubro } from '../../classes/rubro';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-borrar-rubros',
  templateUrl: './borrar-rubros.component.html',
  styleUrls: []
})
export class BorrarRubrosComponent implements OnInit {
  rub: any;
  titulo = '';
  rubrodefault: any;

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getRubro(+this.ruta.snapshot.paramMap.get('id')!).subscribe(
      (r: Rubro) => {
        this.rub = r;
      },
      error => console.log(error));

      this.dataSrv.getRubro(1).subscribe(
        (r: Rubro) => {
          this.rubrodefault = r.nombre;
        },
        error => console.log(error));
    this.titulo = 'Borrar Rubro';
  }

  borrar() {
    this.dataSrv.delRubro(this.rub.id).subscribe(count => {
      alert('Rubros borrados ' + count);
      this.router.navigate(['/listarubros']);
    });
  }

}
