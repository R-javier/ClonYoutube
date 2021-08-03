<template>
 <div class="home">
  
   <Chips />
   <Thumbnail />
 </div>
</template>

<script>
  import Chips from '@/components/Chips.vue'
  import Thumbnail from '@/components/Thumbnail.vue'


  export default {
    name: 'Home',
    components: {Chips , Thumbnail}
   
  }
</script>
