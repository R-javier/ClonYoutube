<template>
  <v-app dark>
    <Navbar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue';



export default {
  name:'App',
  
  components:{
   
    Navbar,
  
   
    
   
  }
}
</script>


<style>
 ::-webkit-scrollbar{
   width: 8px !important;
 }

  ::-webkit-scrollbar-track{
    background: var(--v-primary-base) !important;
  }

  ::-webkit-scrollbar-thumb{
    background: var(--v-tertiary-base) !important;
    border-radius: 8px !important
  }
</style>
