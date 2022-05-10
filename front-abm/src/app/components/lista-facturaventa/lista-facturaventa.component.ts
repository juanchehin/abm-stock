import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../../classes/cliente';
import { Facturaventa } from '../../classes/facturaventa';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista-facturaventa',
  templateUrl: './lista-facturaventa.component.html',
  styleUrls: []
})
export class ListaFacturaventaComponent implements OnInit {
  listaventaForm = new FormGroup({ clienteControl: new FormControl() });
  titulo = 'Listado Facturas Ventas';
  clientes: any;
  facturas: Facturaventa[] = [];
  poolfacturas: any;
  clie: any;

  constructor(private dataSrv: DataService) { }

  cambiaCliente() {
    const id = this.listaventaForm.controls['clienteControl'].value;
    if (id !== 0) {
      this.facturas = this.poolfacturas.filter(function (factura: any) {
        return factura.clienteId === id;
      });
    } else {
      this.facturas = this.poolfacturas;
    }
  }

  ngOnInit() {
    this.dataSrv.getClientes().subscribe((c: any) => this.clientes = c);
    this.dataSrv.getFacturasVentas().subscribe(
      (f: Facturaventa[]) => {
        this.poolfacturas = f;
        this.facturas = f;
      });
    this.listaventaForm.controls['clienteControl'].setValue(0);
  }

}
