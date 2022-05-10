import { Rubro } from './rubro';

export class Articulo {
    id: number | undefined;
    codigo: String | undefined;
    nombre: String | undefined;
    descripcion: String | undefined;
    preciocompra: number | undefined;
    precioventa: number | undefined;
    cantidad: number | undefined;
    rubro: Rubro | undefined;
}
