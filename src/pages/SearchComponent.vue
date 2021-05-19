<template>


  <div class="buscar" >
        <input type="text"  placeholder="Pesquisar por número de atendimento "  v-model="nr_atendimento"/>

            <button  v-on:click.prevent="botao()"  > <strong>Pesquisar</strong> </button>
          <!-- <button   type="button"  @click="$router.push('/list' )" > <strong>Pesquisar</strong> </button> -->
     
  

  </div>

</template>

<script>
import DataServices from '../services/DataServices'

export default {

  data() {
    return{

    nr_atendimento: '',

    } 
  },

  methods: {

    async botao(){
      if(this.nr_atendimento == ""){
    alert("Digite o Número de Atendimento!")
      }
      else {

        let ex = await DataServices.validarNrAtendimento(this.nr_atendimento)

        if(ex.data.length > 0){
          this.armazenarNrAtendimento()
        
        }else {
           alert("Número de Atendimento Não Existe!")
        }

      }


    },

   armazenarNrAtendimento() {
      console.log("nr_atendimento:"+ this.nr_atendimento);

      localStorage.setItem('nr_atendimento', parseInt(this.nr_atendimento))

      this.$router.push('/list')
    }
 
  }
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
  padding: 40px;
  align-items: center;
  border-radius: 8px;
  margin: auto ;
   bottom: 50%;
  transform: translateY(50%);
   
}

.buscar input {
  position: relative;
  display: flex;
  width: 90%;
  height: 50px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  margin-right: 5px;
  padding-left: 10px;
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