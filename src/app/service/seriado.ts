export interface Seriado{
    id:string;
    nome:string;
    data:{
        dia:string;
        mes: string;
        ano: string;
    }
    tipo:string;
    descrição: string;
    tags: string[];
    paginas:string[];
    serie:string;
}
    