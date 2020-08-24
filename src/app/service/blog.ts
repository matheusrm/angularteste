
export interface Blog{
    id:string;
    subtitulo:string;
    titulo: string;
    data: {dia:Number;
            mes:Number;
            ano:Number;};
    tags: string[];
    capa:string;
    texto:string;
    timestamp:any;
}