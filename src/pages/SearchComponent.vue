<template>
  <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search "
          />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" v-model="busca"
                  type="button"
                  @click="$router.push('/list' )"  
          >
            Search
          </button>
        </div>
      </div>
</template>

<script>

export default {

data(){
    return {
      busca:''
    }
  },

computed: {
  resultadoBusca: function(){
    if(this.busca == '' || this.busca == ' '){
      alert("insira RN")
    }else {
      return this.
    }
  }
}




}

</script>

<style scoped>

</style>