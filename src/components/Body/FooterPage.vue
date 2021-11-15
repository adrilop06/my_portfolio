<template>
    <div class="container-footer">
            
        <h2 class="footer-name"><span id="contact">Contact</span> me</h2>
        <div class="content-footer">
        <div class="contect-flex">
            <div class="row-content">
        <button class="btn-primary email-icon" v-on:click="isHidden = !isHidden" v-if="isHidden"><i class="far fa-envelope"></i></button>
            </div>
            <div class="row-content">
        <button @click="gotoLinked()" class="btn-primary linkedin-icon" v-if="isHidden" target="_blank" rel="noreferrer noopener"><i class="fab fa-linkedin-in"></i></button>
            </div>
        </div> 
            <div v-if="!isHidden" class="card-contact-container">
                <form action="https://formsubmit.co/adrianlopezpazos@gmail.com" method="POST">
                    <button class="btn-primary close-icon-mail" v-on:click="isHidden = !isHidden"><i class="far fa-window-close "></i></button>
                    <h6 class="contact-me-title">Contact me</h6>
                    <input class="feedback-input" type="email" name="email" placeholder="Your email" required>
                    <input class="feedback-input" type="text" name="name" placeholder="Your message" required>
                    <button class="feedback-input" type="submit">Send</button>
                </form>
            </div>
        </div>
        
        <img  id="background-image" src="../../../images/syntwave.png">
        
            
        
    </div> 
</template>
<script>


export default {
  
    name:'FooterPage',
     data() {
         
        return {
      isHidden: true
    }
    
  },
   methods: {
    gotoLinked() {
      window.open("https://www.linkedin.com/in/adrian-lopez-pazos-38a44516b");
    },
  },
 
}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);

@mixin for-800 {
      @media (max-width: 800px) { @content; }
}


    .container-footer{
        max-width: 100%;
        height: 50vw;
        position: relative;
        background:#0B0314;
        margin-top:-5%;
        overflow: hidden;
        z-index:1000000000002;
        @include for-800 {    
          height: 100vw;
        }
    }
    #background-image{
        width:100%;
        height:auto;
        left:0%;
        top:-20%;
        position:absolute;
        opacity:.2;
        pointer-events: none;
        @include for-800 {    
          top:40%;
        }
    }
    .footer-name{
        position:absolute;
        font-size:5vw;
        left:5%;
        top:5%;
        color:rgb(206, 0, 171);
        font-family: 'VT323', monospace;
        text-align: center;
        z-index:10;
       #contact{
           color:white;
       }
    }

    .content-footer{
        margin-top:15vw;
         z-index:1000000000000003;
    }

.card-contact-container{
     position: relative;
     background: rgb(30, 0, 32);
      width: 30vw;
      height: 40vw;
      margin: -15vw auto;
      border-radius: 15px;
      box-shadow: 0 0 15px #ff1bce;
       @include for-800 {    
          width: 50vw;
        height: 60vw;
        }
}


.feedback-input {
  color:white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:150vw;
  font-size: 2vw;
  border-radius: 5px;
  line-height: 3vw;
  background-color: transparent;
  border:2px solid #ff1bce;
  transition: all 0.3s;
  width:90%;
  display: flex;
  margin: 1vw auto;
  box-sizing: border-box;
  justify-content: center;
    align-items: center;
  
}

.feedback-input:focus { border:2px solid #ff1bce; }

[type="email"] {
  margin-top:2vw;
}

[type="text"] {
  height: 20vw;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 60%;
  background:#ff1bce;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:rgb(255, 255, 255);
  font-size:3vw;
  padding-top:1vw;
  padding-bottom:1vw;
  transition: all 0.3s;
  margin-top:3vw;
}
[type="submit"]:hover { background:#ff1bce; }

.contect-flex{
    height: 50%;
    padding: 3vw;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}


.row-content {
    width: auto;
    padding:1vw;
     @include for-800 {    
          padding:15vw;
        }
}
.email-icon{
    font-size: 3em; 
    background: transparent;
    border-color: transparent;
    display:flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}

.email-icon:hover{
    font-size: 3em; 
    background: transparent;
    border-color: transparent;
    animation: icon-hover 2s ease-in-out infinite;
}
.linkedin-icon{
    font-size: 3em; 
    background: transparent;
    border-color: transparent;
    display:flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}
.linkedin-icon:hover{
    font-size: 3em; 
    background: transparent;
    border-color: transparent;
    animation: icon-hover 2s ease-in-out infinite;
}

.close-icon-mail{
    background: transparent;
    border-color: transparent;  
}
.close-icon-mail{
    background: transparent;
    border-color: transparent;  
    float:right;
}

.contact-me-title{
    font-size: 2vw;
    color:white;
    margin-left:1em;
}
@keyframes icon-hover {
    0%{
        transform:scale(1)
    }
   
    50%{
      transform:scale(2)
    }
    100%{
        transform:scale(1)
    }
}
</style>