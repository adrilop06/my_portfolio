<template>

    <div class="container-welcome">
      <div class="about">&#60;ABOUT ME&#47;&#62;</div>
      <h3 id="hi-title">Hi <span id="world">World!</span></h3>
      <div class="text-intro"><p id="presentation-text">This is Adrián <span id="last-name">López</span>, a <span id="createWord">creative Multimedia designer</span> from Spain based in Austin, Texas. Currently, I´m studing my last year at University Oberta of Catalonia. My specialties are web and software engineering, with passion for graphic design.
      </p></div>
      <div id="my-photo"><photo></photo></div>
    
      
  
  </div>
  
</template>
<script>
import Photo from './Photo.vue'

/*<div class="noise"></div>
    <div class="overlay"></div>
    <div class="overlay glitch"></div> */
export default {
  
    name:'WelcomePage',
     components: { Photo},
     data() {
    return {
      
    }
  }
 
}
</script>
<style lang="scss" scoped>
 @import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);

 
@mixin for-600 {
      @media (max-width: 600px) { @content; }
    }


.container-welcome{
    max-width: 100%;
    height: 60vw;
    position: relative;
    background: url('../../../images/backgroundimage.png');
    margin-top:-50%;
    z-index:1000000000000;
     @include for-600 {    
          height: 100vw;
          
      }
  }

  .about{
    position:absolute;
    font-size:3vw;
    font-weight: bold;
    left:5%;
    top:5%;
    color:rgb(9, 212, 219);
    opacity:.3;
    font-family: 'VT323', monospace;
    text-align: center;
    z-index:10;
  }

  #hi-title{
    position:absolute;
    font-size:10vw;
    left:5%;
    top:15%;
    color:white;
    font-family: 'VT323', monospace;
    text-align: center;
    z-index:10;
    
    #world{
    color:rgb(206, 0, 171);
    }
  }

  #presentation-text {
    left:5%;
    position:absolute;
    font-size:2vw;
    top:35%;
    color:white;
    width:45%;
    font-family: 'VT323', monospace;
    text-align: center;
    z-index:10;
    text-align: justify;
    @include for-600 {    
         width:90%;
         font-size:5vw;
         top:45%;
      }
  }
 
  #createWord{
    color:rgb(11, 218, 255);
    font-weight: bold;
  }

</style>