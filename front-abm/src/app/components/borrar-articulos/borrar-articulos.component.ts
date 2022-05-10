import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../classes/articulo';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-articulos',
  templateUrl: './borrar-articulos.component.html',
  styleUrls: []
})
export class BorrarArticulosComponent implements OnInit {

  art: any;
  titulo = '';

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getArticulo(+this.ruta.snapshot.paramMap.get('id')!).subscribe(
      (a: Articulo) => {
        this.art = a;
      },
      error => console.log(error));
    this.titulo = 'Borrar Articulo';
  }

  borrar() {
    this.dataSrv.delArticulo(this.art.id).subscribe(count => {
      alert('Articulos Borrados ' + count);
      this.router.navigate(['/listaarticulos']);
    });
  }

}
