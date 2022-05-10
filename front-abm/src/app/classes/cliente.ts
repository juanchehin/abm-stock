import { Telefono } from './telefono';
import { Facturaventa } from './facturaventa';

export class Cliente {
    id: number | undefined;
    razonsocial: String | undefined;
    cuit: String | undefined;
    condicioniva: String | undefined;
    telefonos: [Telefono] | undefined;
    facturas: [Facturaventa] | undefined;
}
