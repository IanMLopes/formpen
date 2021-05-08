<template>

    <div>
         <p>Formulario</p>
          
    <div class="can">
  

    <div class="left-block">
        <div class="colors">
            <button type="button" value="#000000"></button>

            <button type="button" value="#ffffff"></button>
        </div>

        <div class="brushes">
            <button type="button" value="1"></button>
            <button type="button" value="2"></button>
            <button type="button" value="3"></button>
            <button type="button" value="4"></button>
            <button type="button" value="5"></button>
        </div>

        <div class="buttons">
            <button id="clear" type="button">Clear</button>
            <button id="save" type="button" onclick="doCapture();">Save</button>
            <!-- <button id="send" type="button" onclick="sendData();">Send Data</button> -->

            <form action="http://localhost:3333/form/receiveData" method="post">

                <input type="text" name="base64" id="base64" value="teste">

                <button type="submit" id="send">Send Data</button>

            </form>
        </div>
    </div>

    <div id="div2download">

        <div>
            <!-- <img src="../images/form.jpg" alt="" id="form_image"> -->
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <label for="teste1">cond</label>
            <input type="checkbox" name="teste1" id="teste1"><br>
            <br><span>Assinatura</span>
        </div>

        <div class="right-block">
            <canvas id="paint-canvas" width="400" height="75"></canvas>    
        </div>

    </div> <!-- div2download -->

    </div>
 
</div>

</template>
 <script>

export default {

  mounted(){
    
    var canvas = document.getElementById("paint-canvas");
    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
  
    // Specifications
    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = 'black'; // initial brush color
    context.lineWidth = 1; // initial brush width
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
      mouseX = event.clientX - boundings.left;
      mouseY = event.clientY - boundings.top;
    }
  
    // Handle Clear Button
    var clearButton = document.getElementById('clear');
  
    clearButton.addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  

}}

 </script>


<style scoped>

</style>

