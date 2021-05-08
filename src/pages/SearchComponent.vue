<template>
  <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search "
          />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary"
                  type="button"
                  @click="$router.push('/list' )"  
          >
            Search
          </button>
        </div>
      </div>
</template>

<script>

</script>

<style scoped>

</style>