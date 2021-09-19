<template>


    <div class="container-name" >
        <div class="name ">ADRIÁN</div>
       
        <div class="last-name glitch glow text " data-glitch="López">López</div>
        
        <div class="start" > <i class ="fas fa-arrow-down"></i> Scroll down to start <i class ="fas fa-arrow-down"></i></div>
    </div>
    
</template>
<script>
export default {
    name:'NameHeader',
    
}
</script>
<style  lang="scss" scoped>
    @font-face {
        font-family: 'RoadRage';
        font-style: normal;
        font-weight: normal;
        src: local('RoadRage'), url('http://coding-dude.com/wp/wp-content/uploads/Road_Rage.woff') format('woff') ;
    }

    @import url(https://fonts.googleapis.com/css?family=Titillium+Web:900);
    @import url(https://fonts.googleapis.com/css?family=Mr+Dafoe);
    @import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);
    @font-face {
        font-family: OutRun;
        src: url("https://jackphilippi.com.au/cdn/fonts/outrun_future.otf") format("opentype");
    }

     

   
        .container-name {
        
        max-width:100%;
        height:auto;
        position:fixed;
        top:15%;
                left:30%;
            .name{
                font-family:'Titillium Web', sans-serif;
                background-image: -webkit-linear-gradient(#2f353b 0%, #94B6C9 46%, #86DFF5 50%, #ffffff 54%,#9c37ac  58%, #d100b1 90%,#d100b1 100%);
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke: .3vw #f5f5f5;
                -webkit-background-clip: text;
                background-clip: text;
                font-size:11vw;
                text-align:center;
                
                pointer-events: none;   
            }
          
         
            .last-name{
                color: #d100b1;
                font-family:'Road Rage';
                font-style: italic;
                font-size: 9vw;
                text-shadow: 0 0 1px #ffffff, 0 -3px 3px rgba(255, 255, 255, 0.8), 0 3px 3px rgba(0, 0, 0, 0.5), 0 0 15px #d100b1, 0 0 45px rgba(209, 0, 177, 0.8);
                text-align: center;
                text-decoration: underline;
                text-transform: none;
                -webkit-transform: skew(-10deg) rotate(-10deg);
                -ms-transform: skew(-10deg) rotate(-10deg);
                transform: skew(-10deg) rotate(-10deg);
                position:absolute;
                top:60%;
                left:15%;

                
            }
            
            
            .start{
                font-family: 'VT323', monospace;
                color: #ffffff;
                font-size: 2vw;
                position:fixed;
                top:90%;
                left:50%;
                animation: giggle 1s ease infinite;
            }
           
        }
       
    

    

    @keyframes giggle {
        0%, 100% {
            transform:translate(-50%,-50%) translateY(-2.5px);
        }
        50% {
            transform:translate(-50%,-50%) translateY(2.5px);
        }
        
    }
  
.glitch {
	
	
	&:before, &:after {
		display: block;
		content: attr(data-glitch);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: .8;
	} &:after {
		color: #f0f;
		z-index: -2;
	} &:before {
		color: #0ff;
		z-index: -1;
	}
	&:hover {
		&:before {
			animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both infinite
		}
		&:after {
			animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite
		}
	}
}




@keyframes glitch {
	0% {
		transform: translate(0)
	}
	20% {
		transform: translate(-5px, 5px)
	}
	40% {
		transform: translate(-5px, -5px)
	}
	60% {
		transform: translate(5px, 5px)
	}
	80% {
		transform: translate(5px, -5px)
	}
	to {
		transform: translate(0)
	}
}

</style>
