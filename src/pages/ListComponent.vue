<template>
<div>
    <div id="list">
       
        <h2> Termos</h2>
       <ul v-for="termos of  listaResultados" :key="termos.NR_SEQUENCIA"  >

<li v-on:click.prevent="armazenarTermo(termos.NR_SEQUENCIA)" :class="{ inactive: termos.status }"> {{termos.NR_SEQUENCIA}}- {{termos.DS_TERMO}} </li>

        </ul>
     
    </div>
    <button class="sair" v-on:click.prevent="sair()">SAIR</button>
</div>
</template>
    
<script>
import DataServices from '../services/DataServices'

export default {
    data(){
        return {
            listar_termos:[],
            armazenar_termo:'',
            nr_atendimento:localStorage.getItem('nr_atendimento'),
            listaFormTermos: '',
            listaResultados:''
            
        }
    },

mounted(){

    this.carregarDados()
    

},



methods: {

async carregarDados(){

  await  DataServices.buscartermos().then(response => {
    
        this.listar_termos = response.data
console.log("11111111",this.listar_termos)
    

})


   await DataServices.listaFormTermos(this.nr_atendimento)
    .then(response => {
        this.listaFormTermos = response.data
        console.log("22222222",response.data)

        this.buscarFormTermos()
    })
},

buscarFormTermos() {

console.log("sss",this.listar_termos, this.listaFormTermos)
if(this.listaFormTermos.length == 0){
    this.listaResultados = this.listar_termos 
}else {

for(let item of this.listaFormTermos){
    this.listaResultados = this.listar_termos.map(item2 => {
        if(item.NR_SEQ_TERMO_PADRAO == item2.NR_SEQUENCIA){
           item2['status'] = true
        }
        return item2
    }) 
  }
  
}


  console.log("3333333",this.listaResultados)
},

armazenarTermo(termoSequencia) {

localStorage.setItem('armazenar_termo', JSON.stringify(termoSequencia))
    //   console.log(localStorage.setItem('armazenar_termo', JSON.stringify(this.listar_termos[0].NR_SEQUENCIA)))

this.$router.push('/form2')
},

sair(){
    localStorage.clear();
    this.$router.push('/')
} 

},

   
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

.inactive{
    background: #cccccc ;
    border: 1px solid #999999;
    color: #666666;
    pointer-events:none;

}

#list {
   width: 50%;
   height:  auto;
   border-radius: 5px;
   align-content: center;
   transform: translateX(50%);
   
}

h2 {
    font: 600 24px Roboto, sans-serif;
    text-align: center;
    color: #333;
    border-bottom: 1px solid #B0C4DE;
     border-radius: 8px;
    margin: 0;
    padding:  20px 0;
    background: #f0f0f5;

}
ul{
    width: 100%;
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
    padding: 30px 0;
    border: 1px solid #B0C4DE;
    border-radius: 8px;
    cursor: pointer;
    width: auto;
    height: 100%;
    font: 500 16px Roboto, sans-serif;
    text-align: center;
    margin: 0;
    color: rgb(41, 40, 40);
    background: #32a976;
}

li:hover {
      border: 1px solid #808080;
      /* background:#3CB371 ; */
     background: #2e9669;
}

.sair{
    position: absolute;
    right:20px;
    bottom: 10px;
    padding: 12px 20px;
    border: 1px solid #B0C4DE;
    border-radius: 8px;
    cursor: pointer;
    width: auto;
    height: auto;
    font: 500 16px Roboto, sans-serif;
    text-align: center;
    color: #292828;
    background: #32a976;
}

.sair:hover{
    border: 1px solid #808080;
    background: #2e9669;
}


</style>