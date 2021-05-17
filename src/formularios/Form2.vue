<template>

  <div  >
     <div v-html="paghtml"> </div>
     
   <div > {{2 + 1}} </div>
     
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
           DataServices.list().then(response => {
             
                    // console.log(response.data[0].HTML_FORM)
                    this.paghtml = response.data[0].HTML_FORM;
                
                })                
        },
        

methods: {
cap() {
  console.log("SSSSSSSSSSSSS")
    
     html2canvas(document.getElementById('termo')).then(canvas => {
            crossOrigin: 'Anonymous'
            console.log(canvas.toDataURL('image/jpeg', 1))
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


</style>