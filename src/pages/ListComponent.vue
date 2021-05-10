<template>

    <div id="list" >
        <h2> Lista</h2>
        <ul v-for="contato of listar_info" :key="contato.id">

            <li  class="list1" @click="$router.push('/form' )">opção 1</li>
            <li @click="$router.push('/form' )"> {{contato.nome}} opção 2</li>
            <li @click="$router.push('/form' )"> {{contato.sexo}} opção 3</li>
            <li @click="$router.push('/form' )"> {{contato.email}} opção 4</li>
            <li @click="$router.push('/form' )">opção 5</li>
        </ul>
    </div>
</template>
    
<script>
import DataServices from '../services/DataServices'

export default {

    data(){
    return {
        listar_info:[]
    }
    },


    mounted(){
        DataServices.listar().then(response => {
            console.log(response.data)
            this.listar_info = response.data
        })

    }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

#list {
   width: 100%;
   height: 100%;
   border: 1px solid #dcdce6;
   background: #3CB371;
   border-radius: 5px;
   align-content: center;
}

h2 {
    font: 600 24px Roboto, sans-serif;
    text-align: center;
}
ul{
    width: 95%;
    margin: auto;
    padding: 0;
}

li {
    list-style: none;
    padding: 20px;
    border-bottom: 1px solid #B0C4DE;
    text-align: center;
    cursor: pointer;
    width: auto;
    height: 100%;
    font: 40 16px Roboto, sans-serif;
    text-align: center;
    margin: auto;
}
.list1{
     border-top: 1px solid #B0C4DE;
}

</style>