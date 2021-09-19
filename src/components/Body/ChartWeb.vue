<template>
<div class="card">
  <div class="ds-skill">
    <h6 class="chart-tittle">HIGH SCORE</h6>
    <div class="skill html">
      <h6><img src="../../../images/html.png" class="icono">HTML5 </h6>
      <div class="bar bar-html">
        <p>95%</p>
      </div>
    </div>
    <div class="skill css">
      <h6><img src="../../../images/css.png" class="icono"> CSS3 </h6>
      <div class="bar bar-css">
        <p>90%</p>
      </div>
    </div>
    <div class="skill sass">
      <h6><img src="../../../images/sass.png" class="icono"> Sass </h6>
      <div class="bar bar-sass">
        <p>75%</p>
      </div>
    </div>
    <div class="skill javascript">
      <h6><img src="../../../images/js.png" class="icono"> JavaScript </h6>
      <div class="bar bar-js">
        <p>75%</p>
      </div>
    </div>
    <div class="skill jquery">
      <h6><img src="../../../images/jquery.png" class="icono"> Jquery/Ajax </h6>
      <div class="bar bar-jq">
        <p>60%</p>
      </div>
    </div>
    <div class="skill php">
      <h6><img src="../../../images/php.png" class="icono"> PHP </h6>
      <div class="bar bar-php">
        <p>60%</p>
      </div>
    </div>
    <div class="skill bootstrap">
      <h6><img src="../../../images/boot.png" class="icono"> Bootstrap </h6>
      <div class="bar bar-boot">
        <p>90%</p>
      </div>
    </div>
    <div class="skill sql">
      <h6><img src="../../../images/mysql.png" class="icono"> SQL </h6>
      <div class="bar bar-sql">
        <p>75%</p>
      </div>
    </div>
    <div class="skill postgre">
      <h6><img src="../../../images/postgres.png" class="icono"> PostgreSQL </h6>
      <div class="bar bar-postgre">
        <p>75%</p>
      </div>
    </div>
    <div class="skill vue">
      <h6><img src="../../../images/vue.png" class="icono"> VUE </h6>
      <div class="bar bar-vue">
        <p>90%</p>
      </div>
    </div>
    <div class="skill react">
      <h6><img src="../../../images/react.png" class="icono"> React </h6>
      <div class="bar bar-react">
        <p>80%</p>
      </div>
    </div>
    <div class="skill wordpress">
      <h6><img src="../../../images/wordpress.png" class="icono"> Wordpress </h6>
      <div class="bar bar-wordpress">
        <p>80%</p>
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
      .bar-html {
        width: 95%;
        animation: htmlSkill 1s forwards;
        
      }
      .bar-css {
        width: 90%;
        animation: cssSkill 1.5s forwards;
        
      }
      .bar-js {
        width: 75%;
        animation: jsSkill 1.7s forwards;
        
      }
      .bar-sass{
        width: 75%;
        animation: jsSkill 2s forwards;
        
      }
      .bar-jq{
        width: 60%;
        animation: jqSkill 2.2s forwards;
        
      }
      .bar-php{
        width: 60%;
        animation: jqSkill 2.4s forwards;
        
      }
      .bar-boot{
        width: 90%;
        animation: cssSkill 2.5s forwards;
        
      }
      .bar-sql{
        width: 75%;
        animation: jsSkill 2.8s forwards;
        
      }
      .bar-postgre{
        width: 75%;
        animation: jsSkill 2.9s forwards;
        
      }
      .bar-vue{
        width: 90%;
        animation: cssSkill 3s forwards;
        
      }
      .bar-react{
        width: 80%;
        animation: reactSkill 3.2s forwards;
        
      }
      .bar-wordpress{
        width: 80%;
        animation: reactSkill 3.5s forwards;
        
      }
    }
  }




@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes htmlSkill {
  0% {width: 0;}
  100% {width: 95%;}
}

@keyframes cssSkill {
  0% {width: 0;}
  100% {width: 90%;}
}

@keyframes jsSkill {
  0% {width: 0;}
  100% {width: 75%;}
}

@keyframes jqSkill {
  0% {width: 0;}
  100% {width: 60%;}
}
@keyframes reactSkill {
  0% {width: 0;}
  100% {width: 80%;}
}



</style>