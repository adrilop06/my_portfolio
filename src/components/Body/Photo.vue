<template>
  <div class="container-photo">
    
    <img  id="myphoto1" src="../../../images/photo.png">
    <img  id="myphoto" src="../../../images/photo.png">
    <img  id="myphoto2" src="../../../images/photo.png">
    <img  id="blurred" src="../../../images/photo.png">
    
  </div>
</template>
<script>


export default {
  
    name:'photo',
     data() {
    return {
      
    }
  }
 
}
</script>
<style lang="scss" scoped>

    .container-photo{
        max-width: 100%;
        height: auto;
    }
    #myphoto{
        position:absolute;
        width: 35vw;
        height: auto;
        background-color: transparent;
        z-index: 500;
        left:59.6%;
        top:0%;
        animation: glitchPhoto 10s cubic-bezier(0,.82,1,.42) both infinite;
    }

    #myphoto1{
        position:absolute;
       width: 35vw;
        height: auto;
        background-color: transparent;
        z-index: 500;
        left:59.6%;
        top:0%;
    }
    #myphoto2{
        position:absolute;
        width: 35vw;
        height: auto;
        background-color: transparent;
        z-index: 500;
        left:59.6%;
        top:0%;
        animation: glitchPhoto2 10s cubic-bezier(0,.82,1,.42) both infinite;
    }

    #blurred {
        width: 35vw;
        height: auto;
        position: absolute;
        left:59.6%;
        top:0%;
        z-index: 0;
        filter: blur(50px);
    }


    @keyframes glitchPhoto {
    

        0% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        19% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        22% {
            -webkit-transform: translate(-10px,10px) skew(
        -10deg
        ,
        0deg
        );
            transform: translate(-10px,10px) skew(
        -10deg
        ,
        0deg
        );
            opacity: .4;
        }
        26% {
            -webkit-transform: translate(-10px,-20px);
            transform: translate(-10px,-20px);
            opacity: 0;
        }
        27% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        52% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        56% {
            -webkit-transform: translate(-10px,10px) skew(10deg,0deg);
            transform: translate(-10px,10px) skew( 10deg,0deg);
            opacity: .8;
        }
        57% {
            -webkit-transform: translate(20px,0);
            transform: translate(20px,0);
            opacity: .4;
        }
        58% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
    }


    @keyframes glitchPhoto2 {
        0% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        19% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        22% {
            -webkit-transform: translate(-10px,10px) skew(-10deg,0deg);
            transform: translate(-10px,10px) skew(-10deg,0deg);
            opacity: .4;
        }
        26% {
            -webkit-transform: translate(-10px,-20px);
            transform: translate(-10px,-20px);
            opacity: 0;
        }
        27% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        52% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        56% {
            -webkit-transform: translate(-10px,10px) skew(10deg,0deg);
            transform: translate(-10px,10px) skew(10deg,0deg);
            opacity: .8;
        }
        57% {
            -webkit-transform: translate(20px,0);
            transform: translate(20px,0);
            opacity: .4;
        }
        58% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate(0);
            transform: translate(0);
            opacity: 0;
        }
    }

</style>