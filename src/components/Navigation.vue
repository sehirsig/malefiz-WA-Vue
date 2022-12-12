<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" id="navBrand">Malefiz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a v-if="selected === 'home'" class="nav-link active hoverable text-center" aria-current="page" :href="homeLink">Home</a>
          <a v-else class="nav-link hoverable text-center" :href="homeLink">Home</a>
          <a v-if="selected === 'about'" class="nav-link active hoverable text-center" aria-current="page" :href="aboutLink">About</a>
          <a v-else class="nav-link hoverable text-center" :href="aboutLink">About</a>
          <a v-if="selected === 'malefiz'" class="nav-link active hoverable text-center" aria-current="page" :href="malefizLink">Malefiz</a>
          <a v-else class="nav-link hoverable text-center" :href="malefizLink">Malefiz</a>
          <button type="button" class="btn btn-dark hoverable" data-bs-toggle="modal" data-bs-target="#infoModal" >
            <q-icon name="info"/>
            Game Instructions
          </button>
          <div class="modal fade fixed-top" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel" aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog modal-dialog-centered" role="document" >
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="infoModalLabel">Game Instructions</h5>
                </div>
                <div class="modal-body">
                  <h3>Game Rules</h3>
                  <em>Malefiz is a board game for 2 to 4 players. Each player has 5 figures to play with. Every figure starts in their base, at the bottom of the board. The beginning player rolls the dice. The thrown number has to be pulled completly. While walking with the figure, change of direction is not allowed. If a player lands on an enemys figure, the enemy has to put his figure back to his base. Figures are allowed to jump over other figures, but not over barricades. If a player lands on the barricade (with the exact number), the barricade gets set anywhere on the game board, all black fields are allowed, except the lowest row.
                  </em>
                  <h4>Goal Of The Game</h4>
                  <em>The player reaching the top of the gameboard first (with the exact number rolled with the dice) with one figure wins the game.
                  </em>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation-Bar",
  data() {
    return {
      homeLink: "/",
      aboutLink: "/about",
      malefizLink: "/malefiz",
    }
  },
  props: ['selected'],
}
</script>

<style lang="less">
@header_color: #fcedd8;
@header_font: 'Niconne', cursive;

#header_text {
  clear: both;
  font-size: 5vw;
  width: 5vw;
  color: @header_color;
  font-family: @header_font;
  text-shadow: 0.1vw 0.1vw #eb452b, 0.15vw 0.15vw #efa032, 0.2vw 0.2vw #46b59b, 0.25vw 0.25vw #017e7f, 0.3vw 0.3vw #052939, 0.35vw 0.35vw #c11a2b;
}

.modal-backdrop {
  position:unset !important;
}

.hoverable{
  display:inline-block;
  backface-visibility: hidden;
  vertical-align: middle;
  position:relative;
  box-shadow: 0 0 1px rgba(0,0,0,0);
  tranform: translateZ(0);
  transition-duration: .3s;
  transition-property:transform;
}

.hoverable:before{
  position:absolute;
  pointer-events: none;
  z-index:-1;
  content: '';
  top: 100%;
  left: 5%;
  height:10px;
  width:90%;
  opacity:0;
  background: -webkit-radial-gradient(center, ellipse, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
  /* W3C */
  transition-duration: 0.3s;
  transition-property: transform, opacity;
}

.hoverable:hover, .hoverable:active, .hoverable:focus{
  transform: translateY(-5px);
}
.hoverable:hover:before, .hoverable:active:before, .hoverable:focus:before{
  opacity: 1;
  transform: translateY(-5px);
}



@keyframes bounce-animation {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }

  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.bounce {
  animation-name: bounce-animation;
  animation-duration: 2s;
}


.spinner {
  animation: rotate 2s linear infinite;
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;

  & .path {
    stroke: hsl(210, 70, 75);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

</style>