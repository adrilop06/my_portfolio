<template>
    <div class="crt-contain"></div>
</template>
<script>
export default {
    name:'Crt',
}
</script>
<style lang="scss" scoped>
.crt-contain{
     max-width: 100%;
     height: auto;
    
        &:after {
            content: '';
            position: absolute;
            top:0px;
            left:0px;
            right:0px;
            bottom:0px;
            z-index:100000;
            background: repeating-linear-gradient(0deg, #111 0px, #111 1px, transparent 2px, transparent 5px);
            background-size:100% 5px;
            animation: lines 2s ease-out infinite;
            opacity:0.3;
            mix-blend-mode: color-burn;
            pointer-events: none;   
            overflow: hidden;
        }
    }
   @keyframes lines {
        0% {
            background-position:0px 0px;
        }
        100% {
            background-position:0px 25px;
        }
    }
</style>