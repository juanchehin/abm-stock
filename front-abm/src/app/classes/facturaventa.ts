import { Itemventa } from './itemventa';

export class Facturaventa {
    id: number | undefined;
    puntoventa: number | undefined;
    numero: number | undefined;
    tipo: String | undefined;
    fecha: String | undefined;
    total: number | undefined;
    iva21: number | undefined;
    iva10: number | undefined;
    subtotaliva: number | undefined;
    items: Itemventa[] | undefined;
    clienteId: number | undefined;
}
