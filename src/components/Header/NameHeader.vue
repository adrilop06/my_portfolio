<template>


    <div v-cloak class="container-name" >
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
   

    @import url('https://fonts.cdnfonts.com/css/road-rage');
    @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
    @import url(https://fonts.googleapis.com/css?family=Titillium+Web:900);
    @import url(https://fonts.googleapis.com/css?family=Mr+Dafoe);
    @import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);

    @font-face {
        font-family: 'OutRun';
        src: url("https://jackphilippi.com.au/cdn/fonts/outrun_future.otf") format("opentype");
    }
    @font-face {
        font-family: 'Road Rage';
        font-style: normal;
        font-weight: 400;
        src: local('Road Rage'), url('https://fonts.cdnfonts.com/s/14068/Road_Rage.woff') format('woff');
    }
    @font-face {
        font-family: 'Kaushan Script';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/kaushanscript/v13/vm8vdRfvXFLG3OLnsO15WYS5DG72wNJHMw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }   
/* latin */
    @font-face {
        font-family: 'Kaushan Script';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/kaushanscript/v13/vm8vdRfvXFLG3OLnsO15WYS5DG74wNI.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* latin-ext */
    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 900;
        src: url(https://fonts.gstatic.com/s/titilliumweb/v14/NaPDcZTIAOhVxoMyOr9n_E7ffEDBGIVzY4SY.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
/* latin */
    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 900;
        src: url(https://fonts.gstatic.com/s/titilliumweb/v14/NaPDcZTIAOhVxoMyOr9n_E7ffEDBGItzYw.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Mr Dafoe';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/mrdafoe/v12/lJwE-pIzkS5NXuMMrFijibIyxw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Mr Dafoe';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/mrdafoe/v12/lJwE-pIzkS5NXuMMrFitibI.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* vietnamese */
    @font-face {
        font-family: 'VT323';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/vt323/v15/pxiKyp0ihIEF2isQFJXGdg.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'VT323';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/vt323/v15/pxiKyp0ihIEF2isRFJXGdg.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'VT323';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/vt323/v15/pxiKyp0ihIEF2isfFJU.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
   
    .container-name {
        
        max-width:100%;
        height:auto;
        position:fixed;
        top:15%;
        left:30%;
            .name{
                font-family: 'Titillium Web', sans-serif;
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
                font-family: 'Road Rage', sans-serif;
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
