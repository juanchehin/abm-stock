import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Facturacompra } from '../../classes/facturacompra';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-facturacompra',
  templateUrl: './lista-facturacompra.component.html',
  styleUrls: []
})

export class ListaFacturacompraComponent implements OnInit {
  listacompraForm = new FormGroup({ proveedorControl: new FormControl() });
  titulo = 'Listado Facturas Compras';
  proveedores: any;
  facturas: Facturacompra[] = [];
  poolfacturas: any;
  prov: any;

  constructor(private dataSrv: DataService) { }

  cambiaProveedor() {
    const id = this.listacompraForm.controls['proveedorControl'].value;
    if (id !== 0) {
      this.facturas = this.poolfacturas.filter(function (factura: any) {
        return factura.proveedorId === id;
      });
    } else {
      this.facturas = this.poolfacturas;
    }
  }

  ngOnInit() {
    this.dataSrv.getProveedores().subscribe((p: any) => this.proveedores = p);
    this.dataSrv.getFacturasCompras().subscribe(
      (f: Facturacompra[]) => {
        this.poolfacturas = f;
        this.facturas = f;
      });
    this.listacompraForm.controls['proveedorControl'].setValue(0);
  }

}
