<template>
    <div class="container-wave">
      
    <div class="retro">
    <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
  </div>
</div>
    </div>
</template>
<script>



export default {
    name:'Wave',
    

    
    
}
</script>

<style lang="scss" scoped>
  
  
  .name-title{
    z-index:1000000;
  }
  .retro {
    position: fixed;
    left: 37%;
    top: 15%;
    height: auto;
    max-width: 100%;
    border-radius: 50%;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 50%;
      filter: blur(40px);
      animation: fadeIn 1s easeIn;
      opacity: 1;
      transform: scale(1.6);
      
    }
    .lines {
      position: absolute;
      border-radius: 50%;
      overflow: hidden;
      opacity: 0.9;
      width: 25vw;
      height: 25vw;
      .line {
        width: 100%;
        position: relative;
        height: 1.4%;
        margin-bottom: 0.6%;
        background: rgb(255, 255, 255);
      }
      @for $i from 1 through 50 {
        .line:nth-child(#{$i}) {
          animation: rotateLine 4s ($i * 0.2s) infinite;
        }
      }
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes rotateLine {
    0% { transform: rotateX(0deg); }
    60% { transform: rotateX(60deg); }
    90% { transform: rotateX(90deg); }
    100% { transform: rotateX(0deg); }
  }


</style>>

