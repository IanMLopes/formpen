<template>

    <div id="list">
        <h2> Lista</h2>
        <ul>

            <li    class="list1">  <router-link to="/form">opção 1</router-link></li>
            <li @click="$router.push('/form' )">opção 2</li>
            <li @click="$router.push('/form' )">opção 3</li>
            <li @click="$router.push('/form' )">opção 4</li>
            <li @click="$router.push('/form' )">opção 5</li>
        </ul>
    </div>
</template>
    
<script>


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