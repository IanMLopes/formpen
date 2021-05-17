<template>

    <div id="list">
        <h2> Termos</h2>
       <ul v-for="postagens of listar_posts" :key="postagens.id">

            <li @click="$router.push('/form3' )">id unico: {{postagens.id}} </li>
            <li @click="$router.push('/form2' )"> title: {{postagens.title}} </li>
         
          
        </ul>
    </div>
</template>
    
<script>
import DataServices from '../services/DataServices'

export default {
    data(){
        return {
            listar_posts:[]
        }
    },


mounted(){
    DataServices.listar().then(response => {
        // console.log(response.data)
        this.listar_posts = response.data
    })
}


}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

#list {
   width: 50%;
   height:  auto;
   /* border: 1px solid #dcdce6; */
   /* background: #32a976; */
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


</style>