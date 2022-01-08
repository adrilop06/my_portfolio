<template>
<div v-cloak class="card">
  <div class="ds-skill">
    <h6 class="chart-tittle">HIGH SCORE</h6>
    <div class="skill photoshop">
      <h6><img src="../../../images/photoshop.png" class="icono">Photoshop </h6>
      <div class="bar bar-photoshop">
        <p>95%</p>
      </div>
    </div>
    <div class="skill illustrator">
      <h6><img src="../../../images/illustrator.png" class="icono"> Illustrator </h6>
      <div class="bar bar-illustrator">
        <p>95%</p>
      </div>
    </div>
    <div class="skill premiere">
      <h6> <img src="../../../images/premiere.png" class="icono"> Premiere </h6>
      <div class="bar bar-premiere">
        <p>95%</p>
      </div>
    </div>
    <div class="skill davinci">
      <h6><img src="../../../images/davinci.png" class="icono"> DaVinci </h6>
      <div class="bar bar-davinci">
        <p>95%</p>
      </div>
    </div>
    <div class="skill after">
      <h6><img src="../../../images/effect.png" class="icono"> After Effect </h6>
      <div class="bar bar-after">
        <p>95%</p>
      </div>
    </div>
    <div class="skill animate">
      <h6><img src="../../../images/animate.png" class="icono"> Animate </h6>
      <div class="bar bar-animate">
        <p>80%</p>
      </div>
    </div>
    <div class="skill indesign">
      <h6><img src="../../../images/design.png" class="icono"> Indesign </h6>
      <div class="bar bar-indesign">
        <p>95%</p>
      </div>
    </div>
    <div class="skill xd">
      <h6><img src="../../../images/xd.png" class="icono"> XD </h6>
      <div class="bar bar-xd">
        <p>95%</p>
      </div>
    </div>
    <div class="skill audition">
      <h6><img src="../../../images/aud.png" class="icono"> Audition </h6>
      <div class="bar bar-audition">
        <p>80%</p>
      </div>
    </div>
    <div class="skill audacity">
      <h6><img src="../../../images/audacity.png" class="icono"> Audacity </h6>
      <div class="bar bar-audacity">
        <p>85%</p>
      </div>
    </div>
    <div class="skill sketch">
      <h6><img src="../../../images/sketchup.png" class="icono"> Sketchup </h6>
      <div class="bar bar-sketch">
        <p>80%</p>
      </div>
    </div>
    <div class="skill blender">
      <h6><img src="../../../images/blender.png" class="icono"> Blender </h6>
      <div class="bar bar-blender">
        <p>60%</p>
      </div>
    </div>
    
  </div>
</div>
</template>
<script>
export default {
    name:'ChartWeb',
  
    }
   

</script>
<style lang="scss" scoped>
  .card {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);
  background: linear-gradient(#272325 40%, #020104);
  overflow: hidden;
  }
.icono{
    height: 15px;
    width: auto;
}
 .chart-tittle{
        font-family:'Titillium Web', sans-serif;
        background-image: -webkit-linear-gradient(#ffffff 0%, #e0da7d 46%, #e3ff42 50%, #fffb0f 54%,#c47c10  58%, #e0911a 90%,#ffaa2a 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        flex:1;
        text-align: center;
    }
  
  .card:hover .ds-skill{
    position: absolute;
    margin: auto;
    bottom: 280px;
    right: 0;
    left: 0;
    width: 200px;
    height: 100px;
    h6 {
      margin-bottom: 5px;
      font-weight: 700;
      text-transform: uppercase;
      color: white;
    }
    .skill {
      h6 {
        font-weight: 400;
        font-size: 8px;
        letter-spacing: 0.05em;
        margin: 4px 0;
        color: white;
      }
      .fab {
        color: crimson;
        font-size: 14px;
      }
      .bar {
        height: 5px;
        background: linear-gradient(#ffffff 5%, #497bd8 10%, #ba3aec );
        text-align: right;
        p {
          color: white;
          font-size: 8px;
          padding-top: 5px;
          animation: fadeIn 5s;
        }
        &:hover {
          background: rgb(255, 10, 194);
          transform:scale(1.1);
        }
      }
      .bar-photoshop {
        width: 95%;
        animation: photoshopSkill 1s forwards;
        
      }
      .bar-illustrator {
        width: 95%;
        animation: photoshopSkill 1.5s forwards;
        
      }
      .bar-premiere {
        width: 95%;
        animation: photoshopSkill 1.7s forwards;
        
      }
      .bar-davinci{
        width: 95%;
        animation: photoshopSkill 2s forwards;
        
      }
      .bar-after{
        width: 95%;
        animation: photoshopSkill 2.2s forwards;
        
      }
      .bar-animate{
        width: 80%;
        animation: animateSkill 2.4s forwards;
        
      }
      .bar-indesign{
        width: 95%;
        animation: photoshopSkill 2.5s forwards;
        
      }
      .bar-xd{
        width: 95%;
        animation: photoshopSkill 2.8s forwards;
        
      }
      .bar-audition{
        width: 80%;
        animation: animateSkill 2.9s forwards;
        
      }
      .bar-audacity{
        width: 85%;
        animation: audacitySkill 3s forwards;
        
      }
      .bar-sketch{
        width: 80%;
        animation: animateSkill 3.2s forwards;
        
      }
      .bar-blender{
        width: 60%;
        animation: blenderSkill 3.5s forwards;
        
      }
    }
  }




@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes photoshopSkill {
  0% {width: 0;}
  100% {width: 95%;}
}

@keyframes animateSkill {
  0% {width: 0;}
  100% {width: 80%;}
}

@keyframes audacitySkill {
  0% {width: 0;}
  100% {width: 85%;}
}

@keyframes blenderSkill {
  0% {width: 0;}
  100% {width: 60%;}
}


</style>