import { Telefono } from './telefono';
import { Facturacompra } from './facturacompra';

export class Proveedor {
    id: number | undefined;
    razonsocial: String | undefined;
    cuit: String | undefined;
    condicioniva: String | undefined;
    telefonos: [Telefono] | undefined;
    facturas: [Facturacompra] | undefined;
}
