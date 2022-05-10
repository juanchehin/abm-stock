import { Itemcompra } from './itemcompra';

export class Facturacompra {
    id: number | undefined;
    puntoventa: number | undefined;
    numero: number | undefined;
    tipo: String | undefined;
    fecha: String | undefined;
    total: number | undefined;
    iva21: number | undefined;
    iva10: number | undefined;
    subtotaliva: number | undefined;
    items: Itemcompra[] | undefined;
    proveedorId: number | undefined;
}
