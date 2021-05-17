<template>
<!-- style="width: 200px; height: 200px; padding: 15px;" -->
<div class="termo">

<div id="capturar" >

    <!-- <p>salvar</p> -->
        

  
         <table class="table1">

        <tr>
            <td rowspan="4"  > <img src="../assets/samel_logo.jpg" alt=""></td>
            <td rowspan="4" class="title">TERMO DE CONSENTIMENTO INFORMADO PARA INTERNAÇÃO E PROCEDIMENTOS NAS UNIDADES DE TERAPIA INTENSIVA (UTI)</td>
            <td>Código: F-CRP-012</td>
        </tr>

        <tr>
            <td>Data da Revisão: 13/07/2020</td>
        </tr>

          <tr>
            <td>N° Revisão: 03</td>
        </tr>

          <tr>
            <td>Página: 1 de 1</td>
        </tr>

</table>
    
<div class="corpo">
    <p>Este Termo de Consentimento Informado tem o objetivo de informar ao paciente e/ou ao seu 
    responsável/representante legal, todos os aspectos, riscos e objetivos da INTERNAÇÃO NA UNIDADE DE
    TERAPIA INTENSIVA (UTI) a qual o paciente será submetido, complementando as informações prestadas pelo médico 
    assistente e pela equipe multidisciplinar do Hospital SAMEL.
    </p>
    <p>
    Paciente: Registo: <br/>
    Convênio: UTI:  Aduto (  )  NEO (  )  <br/>  Leito:
    Indicação/Diagnóstico: <br/>
    Data da entrada na UTI: _____/_____/_________.
    </p>
    <p>
        <strong>DECLARO QUE:</strong><br/>
1. Após a realização de exames e cuidadosas avaliações fui informado da necessidade e indicação de internação e procedimentos médico-hospitalares em Unidade de Terapia Intensiva (UTI);<br/>
2.Todas as minhas perguntas foram detalhadamente respondidas e as minhas dúvidas foram esclarecidas satisfatoriamente;<br/>
3. Fui informado que, com frequência, são necessários cuidados e procedimentos específicos como monitorização dos sinais vitais; instalação de 
equipamentos de suporte da função respiratória que auxiliam a respiração; procedimentos invasivos, como colocação de cateter de longa permanência,
 que podem ser de inserção central ou periférica; sondas em vasos sanguíneos, no aparelho urinário, no sistema nervoso central, no tórax ou no abdome;
  intervenções cirúrgicas e do estado nutricional e metabólico; instalação de equipamentos que auxiliam ou substituem a função dos rins; sedação/anestesia; 
  atendimento por equipe multiprofissional (médicos, enfermeiras, fisioterapeutas, nutricionistas); realização de exames de imagem como tomografias, ressonâncias, 
  angiografias, cateterismos, eventualmente com  realizados na própria UTI, no setor de diagnósticos ou no centro cirúrgico); assim como, traqueostomia; gastrostomia; 
  endoscopia; colonoscopia e broncoscopia, punção de LCR; cateter umbilical em caso de RN; dentre outros;<br/>
4. Fui esclarecido que, em decorrência de situações ainda não diagnosticadas ou de complicações emergenciais, inesperadas e não discutidas ou previstas,
 poderá ser necessário um procedimento cirúrgico e transfusão sanguínea, conforme o caso;<br/>
5. Tenho consciência que, apesar da evolução da medicina e da perícia do médico, 
não existe qualquer garantia de resultado do tratamento e que todo tipo de procedimento pode ter complicações inesperadas, 
risco de sequelas graves, incapacidade permanente e até de morte;<br/>
6. Prestei ao médico todas as informações relativas à saúde e hábitos do paciente, presentes e passadas, clínicas e cirúrgicas,
 inclusive as medicações em uso ou já utilizadas, e fui avisado que qualquer omissão ou informação equivocada poderá trazer graves prejuízos ou 
 comprometer o resultado do tratamento;<br/>
7. Estou plenamente informado e satisfeito com as informações recebidas e sei que poderei esclarecer quaisquer novas dúvidas que possam surgir em qualquer fase do tratamento; e,
8. Estou ciente que a Unidade de Terapia Intensiva (UTI) é um local com regras próprias e restritivas para acompanhantes e visitas, conforme o caso.
    </p>
    <p>
       <strong> LIDO, COMPREENDIDO, CIENTE E DE ACORDO COM TODO O CONTEÚDO DESTE TERMO, AUTORIZO EXPRESSAMENTE A INTERNAÇÃO E PROCEDIMENTOS EM UNIDADE DE TERAPIA INTENSIVA (UTI).</strong><br/>

    </p>
    <p>
(Reservo-me o direito de revogar, total ou parcialmente, este consentimento antes da internação)
    </p>
    <p>
         Manaus, _____/_____/_________. Hora :____:____<br/>
    </p>

    <p class="asspaciente">

     ____________________________________________________<br/>
    Assinatura do Paciente ou Responsável/Representante Legal<br/>

    </p>

    <p>
        Nome:____________________RG/CPF:____________________Parentesco:____________
    </p>


    <p>
       <strong> Termo de Responsabilidade Médica</strong>
Declaro para os devidos fins e efeitos que expliquei ao paciente (ou seu responsável/representante legal) de forma clara e objetiva o diagnóstico, o prognóstico, os riscos e objetivos da necessidade de internação em Unidade de Terapia Intensiva (UTI), assim como os seus benefícios e alternativas, esclarecendo suas dúvidas e deixando-o livre para decidir a respeito da internação. De acordo com o meu entendimento, o paciente (ou seu responsável/ representante legal) está em perfeitas condições de compreender todo o conteúdo deste Termo e de autorizar a internação para cuidados intensivos.

    </p>

    <p>
        Manaus, _____/_____/_________. Hora :____:____
    </p>
    <p class="assmedico">
        ____________________________________________<br/>
        Assinatura do Médico com carimbo do CRM

    </p>

</div>  
 

   <Canvas/>

<button type="button" @click="cap();">SalvarIMG</button>
  </div>
   
</div>
</template>

<script>
import Canvas from './AssinaturaComponent';

// import  html2canvas from '../../public/html2canvas';

import html2canvas from 'html2canvas';

export default {
    
    methods:{

     cap() {
        html2canvas(document.getElementById("capturar")).then(canvas => {
            console.log(canvas.toDataURL('image/jpeg', 1))
        })
    }
    },

    components: {
        Canvas
    },

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

.termo {
    margin: 0;
    padding:0;
    }

#capturar{
    
    width: 900px;
    height: auto;
    border: 1px solid;
    padding: 0;
    margin: 0 auto;
    background: #DCDCDC;    
    align-items: center;
    align-content: center;
    margin-bottom: 20px;

}

.table1 {
    border: 1px solid;
    width: 90%;
    margin: 0 auto 0 auto;
    margin-top: 10px;
    
}
.table1 td {
    border: 1px solid;
    text-align: center;
      font: 400 14px Roboto, sans-serif;
        color: #808080;
}
.table1 img {
    width: 120px;
    height: 120px;
}
.table1 .title {
    font-weight: bold;
    color: #808080;
}
#capturar .corpo {
    width: 90%;
    margin: 10px auto;
    line-height: 14pt;
    font: 400 16px Roboto, sans-serif;
    color: #000;
    
}

#capturar .corpo p {
     text-align: justify;
     margin: 10px auto;
}
#capturar .corpo .asspaciente {
    margin-top: 50px ;
    margin-left: 50%;
    transform: translateX(-50%);
   
}

#capturar .corpo .assmedico {
  margin-top: 80px;
}


   

</style>