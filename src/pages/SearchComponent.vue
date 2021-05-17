<template>


  <div class="buscar" >
        <input type="text" placeholder="Pesquisar RN "/>
 
          <button   type="button"  @click="$router.push('/list' )" > <strong>Pesquisar</strong> </button>

      
  </div>

</template>

<script>
// import DataServices from '../services/DataServices'

export default {

  // mounted: {
  //   DataServices.buscar(nr_atendimento)
  //   .then(response => {
  //   console.log(response)             
  //   console.log(response.data)
  //  })
  // }

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

.buscar {
  position: relative;
  display: flex;
  width: 500px;
  height: 200px;
  background: #f0f0f5;
  padding: 50px;
  align-items: center;
  border-radius: 8px;
/*   
  left: 50%;
  transform: translateX(-50%); */

  margin: auto ;
 /* margin-left: auto;
    margin-right: auto; */
   bottom: 50%;
  transform: translateY(50%);
   
}

.buscar input {
  position: relative;
  display: flex;
  width: 50%;
  height: 50px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  margin-right: 5px;
  padding-left: 10px;
  margin-left: 60px;
  font: 400 18px Roboto, sans-serif;
  background: #FFFFFF;
 

  }
.buscar input:focus {
 border: 1px solid #808080;
 outline: 0;
} 

.buscar  button{
  position: flex;
  width: auto;
  height: 50px;
  background: #32a976;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}
.buscar button:hover {
 background: #219462;
}

.buscar strong {
  text-align: center;
  font: 600 18px Roboto, sans-serif;
  color: #fff;
}

</style>