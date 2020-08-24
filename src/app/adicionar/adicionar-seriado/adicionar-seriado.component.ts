import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-adicionar-seriado',
  templateUrl: './adicionar-seriado.component.html',
  styleUrls: ['./adicionar-seriado.component.css']
})
export class AdicionarSeriadoComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }
  capa:string;
  descricao:string;
  serie:string;
  dia:number;
  mes: number;
  ano: number;
  data: {dia:number;
    mes:number;
    ano:number;};
  idDia:string;
  idAno:string;
  idMes:string;
  onDescricao(value: string) {
    this.descricao = value;
  }
  onCapa(value: string) {
    this.capa = value;
  }
  onSerie(value:string){
    this.serie=value;
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
  addItem() {
    this.data={dia:this.dia,mes:this.mes, ano:this.ano}; 
    if(this.data.ano==2019){
      this.idAno="3000"
    }else if(this.data.ano==2020){
      this.idAno="2999"
    }else if(this.data.ano==2021){
      this.idAno="2998"
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
  
  this.firestore.collection('seriados').doc(this.idAno+this.idMes+this.idDia).set(
    { descricao: this.descricao,
      capa:this.capa,
      data: {dia:this.data.dia, mes:this.data.mes, ano:this.data.ano},
      serie:this.serie,      
      timestamp: new Date().getTime()
    }
  ).then(response => {
    this.capa = this.descricao = this.data=this.serie =null;
  }).catch(error => {
    console.log(error);
  });
}
  ngOnInit() {
  }

}
