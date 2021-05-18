<template>


  <div id="termo" >

    <div >

    <table  style="border: 1px solid;   width: 100%;   margin: 0 auto 0 auto;   margin-top: 30px;">
    
            <tr>
               
                <td rowspan="4"  style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif;    color: #808080;">  
                <img crossorigin="anonymous"  src="./samel_logo.jpg" alt="" style="width: 120px; height: 120px;"> </td>

                <td rowspan="4"    style="border: 1px solid;  text-align: center;   font: 400 14px Roboto, sans-serif; font-weight:bold, color: #808080;  ">
                    SAMEL: TERMO DE CONSENTIMENTO </td>
                    
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
    <div class="teste">
    <canvas id="paint-canvas"></canvas>

     <div v-html="paghtml"> </div>
    </div>

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

</template>

<script src="~/lib/vue/vue_v2.5.16.js"></script> 
<script src="~/vue/blade-account-update-credit-card-vue.js" asp-append-version="true"></script>

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

<script>
import DataServices from '../services/DataServices'

export default {
    
        data(){
            return {
                paghtml:[],        
            }
            
        },
        created() {
           DataServices.buscar().then(response => {
            //  console.log(response.data[0].HTML_FORM)
                    // console.log(response.data[0].HTML_FORM)
                    this.paghtml = response.data[0].HTML_FORM;
                    
                
                })                
        },
        

methods: {
cap() {
  console.log("SSSSSSSSSSSSS")
    
     html2canvas(document.querySelector('#termo')).then(canvas => {
           
            console.log(canvas.toDataURL('image/jpeg'))
    }
     )
 
}
     },


mounted(){
  

        

function forcanvas() {
  console.log("AAAAAAAAAAAa")
var canvas = document.querySelector('#paint-canvas');
var context = canvas.getContext("2d");
// var boundings = canvas.getBoundingClientRect();


// Specifications
var  mouseX = 0;
var mouseY = 0;


canvas.width  =  900;
canvas.height =  1200;


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
#paint-canvas{
     position: absolute; width: 900px; height: 1200px; border: 1px solid black; cursor:crosshair;   margin: 0 auto
}
#termo {

   position: relative; width:  900px;  margin: 0 auto;  padding: 0;  border: 0;    align-items: center;

}



</style>