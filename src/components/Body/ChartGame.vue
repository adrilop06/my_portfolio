<template>
<div class="card">
  <div class="ds-skill">
    <h6 class="chart-tittle">HIGH SCORE</h6>
    <div class="skill csharp">
      <h6><img src="../../../images/c.png" class="icono">C# </h6>
      <div class="bar bar-csharp">
        <p>80%</p>
      </div>
    </div>
    <div class="skill cmas">
      <h6><img src="../../../images/c+.png" class="icono"> C++ </h6>
      <div class="bar bar-cmas">
        <p>70%</p>
      </div>
    </div>
    <div class="skill java">
      <h6><img src="../../../images/java.png" class="icono"> Java </h6>
      <div class="bar bar-java">
        <p>70%</p>
      </div>
    </div>
    <div class="skill unity">
      <h6><img src="../../../images/unity.png" class="icono">Unity </h6>
      <div class="bar bar-unity">
        <p>70%</p>
      </div>
    </div>
    <div class="skill gamemaker">
      <h6><img src="../../../images/gm.png" class="icono"> Game Maker </h6>
      <div class="bar bar-gm">
        <p>70%</p>
      </div>
    </div>
    <div class="skill android">
      <h6><img src="../../../images/android.png" class="icono"> Android Studio </h6>
      <div class="bar bar-as">
        <p>60%</p>
      </div>
    </div>
    <div class="skill eclipse">
      <h6><img src="../../../images/eclipse.png" class="icono"> Eclipse </h6>
      <div class="bar bar-eclipse">
        <p>50%</p>
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
      .bar-csharp {
        width: 80%;
        animation: csharpSkill 1s forwards;
        
      }
      .bar-cmas {
        width: 70%;
        animation: cmasSkill 1.5s forwards;
        
      }
      .bar-java {
        width: 70%;
        animation: cmasSkill 1.7s forwards;
        
      }
      .bar-unity{
        width: 70%;
        animation: cmasSkill 2s forwards;
        
      }
      .bar-gm{
        width: 70%;
        animation: cmasSkill 2.2s forwards;
        
      }
      .bar-as{
        width: 60%;
        animation: asSkill 2.4s forwards;
        
      }
      .bar-eclipse{
        width: 50%;
        animation: eclipseSkill 2.5s forwards;
        
      }
     
    }
  }




@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes csharpSkill {
  0% {width: 0;}
  100% {width: 80%;}
}

@keyframes cmasSkill {
  0% {width: 0;}
  100% {width: 70%;}
}

@keyframes asSkill {
  0% {width: 0;}
  100% {width: 60%;}
}

@keyframes eclipseSkill {
  0% {width: 0;}
  100% {width: 50%;}
}




</style>