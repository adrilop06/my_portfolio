<template>
<div>
    <audio id="audio-player"  preload loop >
        <source src="../../../songs/song.mp3" type="audio/mp3"/>
    </audio>
    
    <button class="button-music" @click="toggleAudio()" >{{icon}}</button>
</div>
</template>
<script>
export default {
    name:'SongPlayer',
     data() {
        return {
              icon: 'Play',
              paused:true
              
        }
    },
   
    mounted: function() {
        this.toggleAudio();
      },
    methods: {
    toggleAudio() {
        var audio = document.getElementById("audio-player");
        
        if (this.paused==false) {
            audio.play();
            this.paused=true;
            this.icon="Pause"
        } else {
            audio.pause();
            this.paused=false;
            this.icon ="Play"
            console.log(this.icon)
        }
    },
    
    },
   
    
}
</script>
<style lang="scss" scoped>
   .button-music{
        background: none;
        color: white;
        border: none;
        cursor: pointer;
   }
   
</style>