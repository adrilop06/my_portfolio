<template>
     <div class="grid">
     </div>
    
</template>
<script>

export default {
  
    name:'GridBackground',
     components: { },
     data() {
    return {
      
    }
  }
 
}
</script>
<style lang="scss" scoped>
.grid {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 700px;
  background: transparent;
  background-image: linear-gradient(#ff65e87c .1em, transparent .1em), linear-gradient(90deg, #ff65e87c  .1em, transparent .1em);
  background-size: 6em 6em;
  opacity:.4;
  z-index:1000;
  box-shadow: inset 0px 0px 100px 100px #000000;
}

.window{
  position:absolute;
  z-index:1;
}
</style>