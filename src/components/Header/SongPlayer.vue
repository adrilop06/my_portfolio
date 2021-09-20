<template>
<div>
    <audio id="audio-player" autoplay loop>
        <source src="../../../songs/song.mp3" type="audio/mpeg">
    </audio>
    <button  @click="toggleAudio()" ><i :class='icon' ></i></button>
</div>
</template>
<script>
export default {
    name:'SongPlayer',
     data() {
        return {
              icon: "",
        }
    },
   
    
    methods: {
    toggleAudio() {
        var audio = document.getElementById("audio-player");
        if (audio.paused) {
            audio.play();
            this.icon="fas fa-pause"
        } else {
            audio.pause();
            this.icon ="fas fa-play"
        }
    },
    
    },
 
    
}
</script>
<style lang="scss" scoped>
   .container-song{
       
   }
</style>