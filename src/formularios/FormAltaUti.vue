<template >

<body id="termo" style="width:  900px;  height: 1442px;  margin: 0 auto;  padding: 0;  border: 0;  display: block;  align-items: center;" >
    
<div>
    

  <div id="capturar" style="width: 900px; height: 1442px; border: 1px solid; padding: 0; margin: 0 auto;
        background: #FFF; align-items: center; align-content: center;">

    <canvas id="paint-canvas" style="width: 900px; height: 1442px; border: 1px solid black; cursor:crosshair;  position:absolute; display: block; margin: 0 auto">  </canvas>
   
             <table  style="border: 1px solid;   width: 90%;   margin: 0 auto 0 auto;   margin-top: 10px;">
    
            <tr>
               
                <td rowspan="4"  style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif;    color: #808080;">  
                <img crossorigin="anonymous"  src="./samel_logo.jpg" alt="" style="width: 120px; height: 120px;"> </td>

                <td rowspan="4"    style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif; font-weight:bold, color: #808080;  ">
                   SAMEL: TERMO DE CONSENTIMENTO</td>
                    
                <td style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif;    color: #808080;">Código: F-CRP-012</td>
            </tr>
    
            <tr>
                <td style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif;    color: #808080;">Data da Revisão: 13/07/2020</td>
            </tr>
    
              <tr>
                <td style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif;    color: #808080;">N° Revisão: 03</td>
            </tr>
    
              <tr>
                <td style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif;    color: #808080;">Página: 1 de 1</td>
            </tr>
    
    </table>
        
<!--  -----------  INÍCIO --------------- -->

    <div  style=" width: 85%;   margin: 10px auto;   line-height: 14pt;   font: 400 16px Roboto, sans-serif;  color: #000;">
      <table style="width:100%;">
       <tr>
       <td  style=" padding: 10px; border: 1px solid; font: 600 16px Roboto, sans-serif;  text-align: center;    color: #808080;  ">
       RESUMO DE ALTA DA UTI  </td>
        </tr>
      </table>

       <table style="width:100%; border: 1px solid; font: 400 16px Roboto, sans-serif;  text-align: left; color: #000; ">
       <tr><td></td></tr>
       <tr>
         <td style="padding:10px 5px;">
           <strong> Nome:</strong>
         </td>
         </tr>
       <tr>
         <td style="padding:10px 5px;">
           <strong>Idade</strong>
         </td>
       </tr>
       <tr>
         <td style="padding:10px 5px;">
           <strong>LOCAL:</strong> ( ) Psa ( ) Psi ( ) Maternidade ( ) Uti-Aduta ( ) Uti-Neonata ( ) Enfermaria ( ) Apartamento </td>
       </tr>
       <tr>
         <td style=" height:140px; padding: 5px; border: 1px solid;  vertical-align: text-top; ">
           <strong> HDA:</strong>
           </td>
       </tr>
       <tr>
         <td style="height:140px; padding: 5px; border: 1px solid; vertical-align: text-top; ">
          <strong> Diagnostico: </strong>
         </td>
       </tr>
       <tr>
        <td style="height:140px; padding: 5px; border: 1px solid; vertical-align: text-top; text-align: center; ">
          <strong> Recebe Alta para o Apartamento </strong>
        </td>
       </tr>
       </table>
       <div style="width:100%; height:240px;padding:0 5px;  border: 1px solid; font: 400 16px Roboto, sans-serif;  text-align: left; color: #000; ">
           <p style=" vertical-align: text-top;padding: 5px;">
             <strong>condições de Alta/Transferência</strong>
           </p>
           <div style="display: grid;  grid-template-columns: auto auto auto; gap: 5px; ">
           <label><input style="width:20px; height:20px;"  type="checkbox" > Curado</label> 
           <label><input style="width:20px; height:20px;"  type="checkbox" > Melhorado</label> 
           <label><input style="width:20px; height:20px;"  type="checkbox" > Óbito</label>
           <label> <strong> Destino:</strong></label>
           <label><input style="width:20px; height:20px;"  type="checkbox" > Residência</label>
           <label><input style="width:20px; height:20px;"  type="checkbox" > Transferência Para:</label>
           <label> <strong> Retornar:</strong></label> 
           <label><input style="width:20px; height:20px;"  type="checkbox" > Ambulatório de Cardiologia</label> 
           </div>

           <p style="margin-top:15px"><strong>Observação:</strong></p>
           <p><strong>Data:</strong></p>
           <p style="margin-right: 20px;"><strong>Assinatura do Médico:</strong></p>
       </div>

       <table style=" width:100%;border: 1px solid;  ">
       <tr>
       <td  style=" width:70%; padding: 10px 5px; font: 400 14px Roboto, sans-serif;  text-align: left;    color: #000  ">
        <strong> ENTREGUE POR: </strong>_____________________________________________________________</td> 
        <td style="text-align: left;"><strong> EM:</strong>___/___/___ </td> 
        </tr>
        <tr>
       <td  style="width:70%; padding: 10px 5px; font: 400 14px Roboto, sans-serif;  text-align: left;    color: #000  ">
        <strong> RECEBIDO POR: </strong>_____________________________________________________________</td>
         <td style="text-align: left;"><strong> EM:</strong>___/___/___ </td> 
        </tr>
      </table>
    
    </div>  

    <!--  -----------  FIM --------------- -->
      
    
    </div>
    

  <div style="width: 90%; height: auto; justify-content: space-between; margin: 0 auto 50px auto; display: flex;">
    <div class="colors" style=" text-align: center;  ">
        <button type="button" value="#000000"  style=" background-color: #000000;; height: 40px; display: inline-block; padding: 12px;  border: 2px solid #00000026;    outline: none;  cursor: pointer; "></button>

        <button type="button" value="#ffffff"  style="background-color: #ffffff; height: 40px; display: inline-block; padding: 12px;  border: 2px solid #00000026;    outline: none;  cursor: pointer;"></button>

        <button id="clear" type="button" style="margin-left: 50px; margin-bottom: 0; height: 40px; display: inline-block; padding: 12px;  border: 2px solid #00000026;    outline: none;  cursor: pointer;" >Clear</button>
    </div>

        <button style="height: 50px;; border: 2px solid #00000026;   border-radius: 0;  outline: none;  cursor: pointer; padding: 12px;" @click="cap()">salvar formulario</button>

        <div class="brushes" style="display: none;">
          <button type="button" value="1"></button>
          
      </div>
  
        
    </div>


</div>


</body>

</template>



<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

<script>

export default {

methods: {
cap() {
    
     html2canvas(document.getElementById('termo')).then(canvas => {
            crossOrigin: 'Anonymous'
            console.log(canvas.toDataURL('image/jpeg', 1))
    }
     )
 
}
     },

mounted(){
        

function forcanvas() {
var canvas = document.querySelector('#paint-canvas');
var context = canvas.getContext("2d");
// var boundings = canvas.getBoundingClientRect();


// Specifications
var  mouseX = 0;
var mouseY = 0;


canvas.width  =  900;
canvas.height =  1442;


// canvas.style.width = "900px";
// canvas.style.height = "1442px";


context.strokeStyle = 'black'; // initial brush color

var isDrawing = false;

// Handle Colors
var colors = document.getElementsByClassName('colors')[0];

colors.addEventListener('click', function(event) {
  context.strokeStyle = event.target.value || 'black';
});

// Handle Brushes
var brushes = document.getElementsByClassName('brushes')[0];

brushes.addEventListener('click', function(event) {
  context.lineWidth = event.target.value || 1;
});

// Mouse Down Event
canvas.addEventListener('mousedown', function(event) {
  setMouseCoordinates(event);
  isDrawing = true;

  // Start Drawing
  context.beginPath();
  context.moveTo(mouseX, mouseY);
});

// Mouse Move Event
canvas.addEventListener('mousemove', function(event) {

  
  setMouseCoordinates(event);

  if(isDrawing){
    context.lineTo(mouseX, mouseY);
    context.stroke();
    
  }
 
});

// Mouse Up Event
canvas.addEventListener('mouseup', function(event) {
  setMouseCoordinates(event);
  isDrawing = false;
});

// Handle Mouse Coordinates
function setMouseCoordinates(event) {
  var rect = canvas.getBoundingClientRect();

   mouseX = event.clientX - rect.left;
   mouseY = event.clientY - rect.top;

   return {mouseX, mouseY}
}

// Handle Clear Button
var clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
);

}

forcanvas()

},        

    
}
</script>

<style scoped>
d{
  vertical-align: text-top;
 
}
</style>