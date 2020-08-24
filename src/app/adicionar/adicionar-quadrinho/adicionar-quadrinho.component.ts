import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-adicionar-quadrinho',
  templateUrl: './adicionar-quadrinho.component.html',
  styleUrls: ['./adicionar-quadrinho.component.css']
})
export class AdicionarQuadrinhoComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,private consulta: AngularFirestore, private consulta2:AngularFirestore
  ) { 
  }
  comentarios:any[]=[{comentario:"",usuario:""}];
  quadrinhos: any[] = [];
  quadrinhosid: any[] = [];
  seriadossid: any[] = [];
  seriados: any[] = [];
  anterior:string;
  numero:number;
  idAno:string;
  idMes:string;
  idDia:string;
  enviado:string;
  seriado:boolean=false;
  descricao:string;
  nome: string;
  data: {dia:number;
          mes:number;
          ano:number;};
  idNumero:string;
  dia:number;
  mes: number;
  ano: number;
  tags: string[]=[];
  paginas:string[]=[];
  tagsA: string[]=[];
  paginasA:string[]=[];
  tipo:string;
  capitulo:number;
  serie:string;
 

  onDescricao(value: string) {
    this.descricao = value;
  }
  onNome(value: string) {
    this.nome = value;
  }
  onNumero(value: number) {
    this.numero = Number(value);
  }
  onTipo(value:string){
    if(value=="seriados"){
      this.seriado=true
      this.consulta2.collection('seriados').snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
      }else{
   
    this.seriadossid=[];
    this.seriados=[];
    for (let item of response) {
      this.seriados.push(item.payload.doc.data());
      this.seriadossid.push(item.payload.doc.id);
    }
  }
  })
    }else{
      this.seriado=false
    }
    this.tipo=value;
  }
  onSerie(value:string){
    this.serie=value;
  }
  onCapitulo(value:number){
    this.capitulo=Number(value);
  }
  addTag(tag: string) {
    if (tag) {
      this.tags.push(tag);
    }
  }
  addPagina(pagina: string) {
    if (pagina) {
      this.paginas.push(pagina);
    }
  }
  onDia(value: number){
    this.dia= Number(value);
  }
  onMes(value: number){
    this.mes=Number(value);
  }
  onAno(value: number){
    this.ano=Number(value);
  }
  ngOnInit() {    
   
  }
  removerPagina(i:number){
    this.paginas.splice(i,1);
  }
  removerTag(i:number){
    this.tags.splice(i,1);
  }
 
  
  addItem() {
     this.tagsA=this.tags;
     this.paginasA= this.paginas
       this.data={dia:this.dia,mes:this.mes, ano:this.ano}; 
      if(this.data.ano==2019){
        this.idAno="3000"
      }else if(this.data.ano==2020){
        this.idAno="2999"
      }else if(this.data.ano==2021){
        this.idAno="2998"
      }else if(this.data.ano==2022){
        this.idAno="2997"
      }
      if(this.data.mes==12){
        this.idMes="01"
      }else if(this.data.mes==11){
        this.idMes="02"
      }else if(this.data.mes==10){
        this.idMes="03"
      }else if(this.data.mes==9){
        this.idMes="04"
      }else if(this.data.mes==8){
        this.idMes="05"
      }else if(this.data.mes==7){
        this.idMes="06"
      }else if(this.data.mes==6){
        this.idMes="07"
      }else if(this.data.mes==5){
        this.idMes="08"
      }else if(this.data.mes==4){
        this.idMes="09"
      }else if(this.data.mes==3){
        this.idMes="10"
      }else if(this.data.mes==2){
        this.idMes="11"
      }else if(this.data.mes==1){
        this.idMes="12"
      }
      if(this.numero==31){
        this.idNumero="00"
      }else if(this.numero==30){
        this.idNumero="01"
      }else if(this.numero==29){
        this.idNumero="02"
      }else if(this.numero==28){
        this.idNumero="03"
      }else if(this.numero==27){
        this.idNumero="04"
      }else if(this.numero==26){
        this.idNumero="05"
      }else if(this.numero==25){
        this.idNumero="06"
      }else if(this.numero==24){
        this.idNumero="07"
      }else if(this.numero==23){
        this.idNumero="08"
      }else if(this.numero==22){
        this.idNumero="09"
      }else if(this.numero==21){
        this.idNumero="10"
      }else if(this.numero==20){
        this.idNumero="11"
      }else if(this.numero==19){
        this.idNumero="12"
      }else if(this.numero==18){
        this.idNumero="13"
      }else if(this.numero==17){
        this.idNumero="14"
      }else if(this.numero==16){
        this.idNumero="15"
      }else if(this.numero==15){
        this.idNumero="16"
      }else if(this.numero==14){
        this.idNumero="17"
      }else if(this.numero==13){
        this.idNumero="18"
      }else if(this.numero==12){
        this.idNumero="19"
      }else if(this.numero==11){
        this.idDia="20"
      }else if(this.numero==10){
        this.idNumero="21"
      }else if(this.numero==9){
        this.idNumero="22"
      }else if(this.numero==8){
        this.idNumero="23"
      }else if(this.numero==7){
        this.idNumero="24"
      }else if(this.numero==6){
        this.idNumero="25"
      }else if(this.numero==5){
        this.idNumero="26"
      }else if(this.numero==4){
        this.idNumero="27"
      }else if(this.numero==3){
        this.idNumero="28"
      }else if(this.numero==2){
        this.idNumero="29"
      }else if(this.numero==1){
        this.idNumero="30"
    }
    
      if(this.data.dia==31){
        this.idDia="00"
      }else if(this.data.dia==30){
        this.idDia="01"
      }else if(this.data.dia==29){
        this.idDia="02"
      }else if(this.data.dia==28){
        this.idDia="03"
      }else if(this.data.dia==27){
        this.idDia="04"
      }else if(this.data.dia==26){
        this.idDia="05"
      }else if(this.data.dia==25){
        this.idDia="06"
      }else if(this.data.dia==24){
        this.idDia="07"
      }else if(this.data.dia==23){
        this.idDia="08"
      }else if(this.data.dia==22){
        this.idDia="09"
      }else if(this.data.dia==21){
        this.idDia="10"
      }else if(this.data.dia==20){
        this.idDia="11"
      }else if(this.data.dia==19){
        this.idDia="12"
      }else if(this.data.dia==18){
        this.idDia="13"
      }else if(this.data.dia==17){
        this.idDia="14"
      }else if(this.data.dia==16){
        this.idDia="15"
      }else if(this.data.dia==15){
        this.idDia="16"
      }else if(this.data.dia==14){
        this.idDia="17"
      }else if(this.data.dia==13){
        this.idDia="18"
      }else if(this.data.dia==12){
        this.idDia="19"
      }else if(this.data.dia==11){
        this.idDia="20"
      }else if(this.data.dia==10){
        this.idDia="21"
      }else if(this.data.dia==9){
        this.idDia="22"
      }else if(this.data.dia==8){
        this.idDia="23"
      }else if(this.data.dia==7){
        this.idDia="24"
      }else if(this.data.dia==6){
        this.idDia="25"
      }else if(this.data.dia==5){
        this.idDia="26"
      }else if(this.data.dia==4){
        this.idDia="27"
      }else if(this.data.dia==3){
        this.idDia="28"
      }else if(this.data.dia==2){
        this.idDia="29"
      }else if(this.data.dia==1){
        this.idDia="30"
    }
    
    if(this.capitulo!=null){
      if(this.capitulo==1){
        this.firestore.collection('quadrinho').doc(this.idAno+this.idMes+this.idDia+"-"+this.idNumero).set(
      { descricao: this.descricao,
        tipo:this.tipo,
        nome:this.nome,
        tags: this.tagsA,
        paginas:this.paginasA,
        data: {dia:this.data.dia, mes:this.data.mes, ano:this.data.ano},
        serie:this.serie,
        capitulo:this.capitulo,
        timestamp: new Date().getTime()
      }
    ).then(response => {
      this.nome = this.descricao = this.tipo=this.tags=this.paginas=this.data=this.capitulo=this.serie =null;
    }).catch(error => {
      console.log(error);
    });
        
      }else{
      this.consulta.collection('quadrinho', ref => ref
      .where('serie', '==', this.serie)
      .where('capitulo', '==', this.capitulo-1)  
      .limit(1)
      ).snapshotChanges()
        .subscribe(response => {
          if (!response.length) {
            console.log("No Data Available");
            return false;
        }else{
     
      this.quadrinhosid=[];
      for (let item of response) {
        this.quadrinhosid.push(item.payload.doc.id);
      }
      this.anterior=this.quadrinhosid[0];
    }
    })
     this.firestore.collection('quadrinho').doc(this.idAno+this.idMes+this.idDia+"-"+this.idNumero).set(
        { descricao: this.descricao,
          tipo:this.tipo,
          nome:this.nome,
          tags: this.tags,
          paginas:this.paginas,
          data: {dia:this.data.dia, mes:this.data.mes, ano:this.data.ano},
          serie:this.serie,
          capitulo:this.capitulo,
          anterior:this.anterior,
          timestamp: new Date().getTime()
        }
      ).then(response => {
        this.nome = this.descricao = this.tipo=this.tags=this.paginas=this.data=this.capitulo=this.serie =null;
      }).catch(error => {
        this.enviado="Erro no envio algum campo nao foi preenchido";
        console.log(error);
      });
  }
  this.firestore.collection('quadrinho').doc(this.quadrinhosid[0]).update(
    { proximo: this.idAno+this.idMes+this.idDia+"-"+this.numero})
      
  }else{
    this.firestore.collection('quadrinho').doc(this.idAno+this.idMes+this.idDia+"-"+this.idNumero).set(
      { descricao: this.descricao,
        nome:this.nome,
        tipo:this.tipo,
        tags: this.tags,
        paginas:this.paginas,
        data: {dia:this.data.dia, mes:this.data.mes, ano:this.data.ano},
        timestamp: new Date().getTime()
      }
    ).then(response => {
      this.nome = this.descricao = this.tipo=this.tags=this.paginas=this.data=null;
    }).catch(error => {
      this.enviado="Erro no envio algum campo nao foi preenchido";
      console.log(error);
    });
  }
  this.firestore.collection('avaliacao').doc(this.idAno+this.idMes+this.idDia+"-"+this.idNumero).set(
    { comentarios: this.comentarios});
  
}
 

}
