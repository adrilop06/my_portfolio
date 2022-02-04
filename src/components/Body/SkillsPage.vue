<template>
<div v-cloak class="container-skills">
  <div class="contain">
    <h2 id="sk-section">&#60;&#47;SKILLS&#62;</h2>
    <div class="container-cards-skills">
      <div class="card-skills">
        <div class="face face1">
          <div class="content-skills">
            <chart-web></chart-web>
          </div>
        </div>
        <div class="face face2">
          <h2><i class ="fas fa-laptop-code"></i></h2>
        </div>
      </div>

      <div class="card-skills">
        <div class="face face1 ">
          <div class="content-skills">
          <chart-game></chart-game>
          </div>
        </div>
        <div class="face face2">
          <h2><i class="fas fa-gamepad"></i>  </h2>
        </div>
      </div>

      <div class="card-skills">
        <div class="face face1">
          <div class="content-skills">
            <chart-design></chart-design>
          </div>
        </div>
        <div class="face face2">
          <h2><i class="far fa-edit"></i></h2>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import ChartWeb from './ChartWeb.vue'
import ChartGame from './ChartGame.vue'
import ChartDesign from './ChartDesign.vue'
export default {
    components: {ChartWeb, ChartGame, ChartDesign},
    name:'SkillsPage',
     
       data() {
        return {
          height:300,
          isShow: {
            'ChartWeb': false,
            'ChartGame': false,
            'ChartDesign': false,
      },
        }
       },

}

   


</script>
<style lang="scss" scoped>
  


  .container-skills{
    max-width: 100%;
    height: auto;
    position: relative;
    margin-top:-10%;
    z-index:10000000000001;
    overflow: hidden;
    background-color: #0B0314;
  }
  .contain{
    max-width: 100%;
    height: auto;
    background: url('../../../images/backgroundimage.png');
  }
  
  #sk-section{
    position:absolute;
    font-size:3vw;
    font-weight: bold;
    left:5%;
    top:2%;
    color:rgb(9, 212, 219);
    opacity:.3;
    font-family: 'VT323', monospace;
    text-align: center;
    z-index:10;
  }

  .container-cards-skills {
    width:100%;
    height: auto;
    display: flex;
    margin: 40px auto;
    padding: 40px 0;
    flex-wrap: wrap;
    .card-skills {
      position: relative;
      width: 290px;
      height: 400px;
      margin: 40px auto;
      background: linear-gradient(#272325 40%, #020104);
      border-radius: 15px;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
      
      .face {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &.face1 {
          box-sizing: border-box;
          padding: 20px;
          

        }

        &.face2 {
          transition: 0.5s;
          
          h2 {
            margin: 0;
            padding: 0;
            font-size: 5em;
            color: #fff;
            transition: 0.5s;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 10;
          }
        }
      }
    }
    
    
    .card-skills:hover .face{
      transform:scale(1.2);
      

    }
    .card-skills:hover .face.face2 {
      transform:scale(1.2);
      opacity: 0;
      pointer-events: none; 
      h2 {
        opacity: 0;
        pointer-events: none; 
      }
    }

    .card-skills .face.face2 {
      background-image: linear-gradient(
        
        #00ccff 0%,
        #fc00ff 50%,
        #330047 100%
      );
      border-radius: 15px;
    }

  }


</style>