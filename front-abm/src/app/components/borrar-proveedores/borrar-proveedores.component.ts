import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Proveedor } from '../../classes/proveedor';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-borrar-proveedores',
  templateUrl: './borrar-proveedores.component.html',
  styleUrls: []
})
export class BorrarProveedoresComponent implements OnInit {
  prov: any;
  titulo = '';

  constructor(
    private dataSrv: DataService,
    private ruta: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataSrv.getProveedor(+this.ruta.snapshot.paramMap.get('id')!).subscribe(
      (p: Proveedor) => {
        this.prov = p;
      },
      error => console.log(error));
    this.titulo = 'Borrar Proveedor';
  }

  borrar() {
    this.dataSrv.delProveedor(this.prov.id).subscribe(count => {
      alert('Proveedores borrados ' + count);
      this.router.navigate(['/listaproveedores']);
    });
  }

}
