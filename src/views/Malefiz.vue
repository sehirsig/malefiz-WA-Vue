<template>
  <Navigation selected="malefiz"></Navigation>
  <div v-if:="backendOnline">
    <div class="grid">
        <InfoPanel></InfoPanel>
        <Gameboard></Gameboard>
    </div>
  </div>
  <div v-else: class="container"><div class="q-pa-md">
      <div class="text-purple q-gutter-md" style="font-size: 2em">
        <q-icon name="warning" />
      </div>
    </div>

    <p>No connection to the server</p>
  </div>
</template>

<script>
import InfoPanel from "@/components/Game/InfoPanel.vue";
import Gameboard from "@/components/Game/Gameboard.vue";
import Navigation from "@/components/Navigation.vue";
import $ from "jquery";

export default {
  name: "Malefiz-Game",
  components: {Navigation, Gameboard, InfoPanel},
  data() {
    return{
      backendOnline: false,
    }
  },
  mounted() {
    $.ajax({
      url: 'http://localhost:9000/status'
    }).done(() => {
            this.backendOnline = true;
        }
    );
  },
}
</script>

<style lang="less">
@input_color: white;
@input_hover_color: #fff;
@nav_item_color: rgba(255, 255, 255, 0.85);
@nav_item_hover_color: #fddb3a;
@game_font: sans-serif;
@background_color_information_panel: lightsteelblue;
@background_color_input_panel_group: lightgray;
@background_color_gameboard: #9e7013;
@background_color_critical_hover: red;
@background_color_normal_hover: rgba(165, 255, 0, 0.4);
@background_color_warning_hover: rgba(255, 120, 0, 1);
@background_color_nav_item: rgba(136, 89, 61, 0.85);
@border_color_game: black;

//responsive
@gamecell_size: 2vw;
@gamefield_width: calc(@gamecell_size * 19);
@gamefield_heigth: calc(@gamecell_size * 20);

@x-small: 575px; // >=
@small: 767px; // >=
@medium: 991px; // >=
@large: 1199px; // >=
@xl: 1399px; // >=
@xxl: 1400px; // <=

/*
Breakpoint	Class	Dimensions
X-Small	None	< 576px
Small	sm	≥ 576px
Medium	md	≥ 768px
Large	lg	≥ 992px
Extra large	xl	≥ 1200px
Extra extra large	xxl	≥ 1400px
 */

#information-panel {
  grid-area: infopanel;
}
#gamepanel {
  grid-area: gamepanel;
}
#input-panel-group {
  grid-area: inputpanel;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 11.7vh);
  grid-template-areas:
      ". . . . . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . infopanel infopanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . . . . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . . . . . . . . . . ."
}

//X-Small

@media (max-width: @x-small) and (orientation: landscape) {
  @gamecell_size: 1vw;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size * 1.5;
    width: @gamecell_size * 1.5;
  }
  .game-field-col {
    height: @gamecell_size * 2;
    width: @gamecell_size * 2;
  }
  #gamepanel {
    height: 20vh;
    width: 20vw;
  }
  .grid {
    display: grid;grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-areas:
      ". infopanel infopanel infopanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". inputpanel inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". . . . . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
  }
  @input_font_size: 1.15vw ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

@media (max-width: @x-small) and (orientation: portrait) {
  @gamecell_size: 2.25vh;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 4 * 11.25vh;
    width: 10 * 1fr;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 11.25vh);
    grid-template-areas:
      ". . infopanel infopanel infopanel infopanel infopanel infopanel infopanel infopanel . ."
      ". . inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel . ."
      ". . inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel . ."
      ". gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". . . . . . . . . . . ."
  }
  @input_font_size: 1.1vh ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}


//Small

@media (max-width: @small - 1) and (min-width: @x-small + 1) and (orientation: landscape) {
  @gamecell_size: 1vw;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size * 1.5;
    width: @gamecell_size * 1.5;
  }
  .game-field-col {
    height: @gamecell_size * 2;
    width: @gamecell_size * 2;
  }
  #gamepanel {
    height: 20vh;
    width: 20vw;
  }
  .grid {
    display: grid;grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 0.1fr);
    grid-template-areas:
      ". infopanel infopanel infopanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". inputpanel inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". . . . . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
  }
  @input_font_size: 1.15vw ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

@media (max-width: @small - 1) and (min-width: @x-small + 1) and (orientation: portrait) {
  @gamecell_size: 2.25vh;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 4 * 11.25vh;
    width: 8 * 1fr;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 11.25vh);
    grid-template-areas:
      ". . . . infopanel infopanel infopanel infopanel . . . ."
      ". . . . inputpanel inputpanel inputpanel inputpanel . . . ."
      ". . . . inputpanel inputpanel inputpanel inputpanel . . . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . . . . . . . . . . ."
  }
  @input_font_size: 1.15vh ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

//Medium

@media (max-width: @medium - 1) and (min-width: @small + 1) and (orientation: landscape) {
  @gamecell_size: 1vw;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size * 2;
    width: @gamecell_size * 2;
  }
  .game-field-col {
    height: @gamecell_size * 2;
    width: @gamecell_size * 2;
  }
  #gamepanel {
    height: 1 * 25vh;
    width: 5 * 1fr;
  }
  .grid {
    display: grid;grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 25vh);
    grid-template-areas:
      ". infopanel infopanel infopanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". inputpanel inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
      ". inputpanel inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel ."
  }
  @input_font_size: 1.15vw ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

@media (max-width: @medium - 1) and (min-width: @small + 1) and (orientation: portrait) {
  @gamecell_size: 2.75vh;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size * 0.85;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 11.25vh * 5;
    width: 8 * 1fr;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 11.25vh);
    grid-template-areas:
      ". . . infopanel infopanel infopanel infopanel infopanel infopanel . . ."
      ". . . inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel . . ."
      ". . . inputpanel inputpanel inputpanel inputpanel inputpanel inputpanel . . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
  }
  @input_font_size: 1.225vh ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

//Large

@media (max-width: @large - 1) and (min-width: @medium + 1) and (orientation: landscape) {
  @gamecell_size: 2vw;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 20vh;
    width: 20vw;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      ". . infopanel infopanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . . . . gamepanel gamepanel gamepanel gamepanel . . ."}
  @input_font_size: 1.15vw ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

@media (max-width: @large - 1) and (min-width: @medium + 1) and (orientation: portrait) {
  @gamecell_size: 2.25vh;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 11.25vh * 4;
    width: 8 * 1fr;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 11.25vh);
    grid-template-areas:
      ". . . . infopanel infopanel infopanel infopanel . . . ."
      ". . . . inputpanel inputpanel inputpanel inputpanel . . . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . . . . . . . . . . ."
  }
  @input_font_size: 1.15vh ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

//X-Large
@media (min-width: @large) and (orientation: landscape) {
  @gamecell_size: 2vw;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 20vh;
    width: 20vw;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      ". . infopanel infopanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . inputpanel inputpanel . gamepanel gamepanel gamepanel gamepanel . . ."
      ". . . . . gamepanel gamepanel gamepanel gamepanel . . ."}
  @input_font_size: 1.15vw ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}

@media (min-width: @large) and (orientation: portrait) {
  @gamecell_size: 2.25vh;
  @gamefield_width: calc(@gamecell_size * 19);
  @gamefield_heigth: calc(@gamecell_size * 20);
  .game-field {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  .game-field-col {
    height: @gamecell_size;
    width: @gamecell_size;
  }
  #gamepanel {
    height: 11.25vh * 4;
    width: 8 * 1fr;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 11.25vh);
    grid-template-areas:
      ". . . . infopanel infopanel infopanel infopanel . . . ."
      ". . . . inputpanel inputpanel inputpanel inputpanel . . . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel gamepanel . ."
      ". . . . . . . . . . . ."
  }
  @input_font_size: 1.15vh ! important;
  .input-critical-button {font-size: @input_font_size;}
  .input-normal-button {font-size: @input_font_size;}
  .input-warning-button {font-size: @input_font_size;}
  .info-text {font-size: @input_font_size;}
}


html {
  font-family: @game_font;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

.modal-backdrop {
  z-index: -1;
}

#information-panel {
  border-style: solid;
  border-color: @border_color_game;
  border-width: 0.2vw;
  border-radius: 0.8vw;
  background-color: @background_color_information_panel;
  background-image: url(../assets/images/background_picture.jpg);
  color: white
}

#input-panel-group {
  background-color: @background_color_input_panel_group;
  border-style: solid;
  border-color: @border_color_game;
  border-width: 0.25vw;
  border-radius: 0.8vw;
  background-image: url(../assets/images/background_picture.jpg);
}

#gamepanel {
  background-image: url(../assets/images/wood-pattern.png);
  border-width: 0.25vw;
  border-radius: 2vw;
  border-style: solid;
  border-color: @border_color_game;
  background-color: @background_color_gameboard;
  min-width: @gamefield_width;
  min-height: @gamefield_heigth;
}

.input-critical-button {
  color: @input_color;
  border: 3px solid white;
  text-shadow: none;
  //font-size: 15px;
  width: 100%;
  background: rgba(120, 34, 34, 0.75);
  text-align: center;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: @background_color_critical_hover;
    box-shadow: 0px 15px 20px rgba(255, 4, 4, 0.4);
    color: @input_hover_color;
    transform: translateY(-2px);
    border-color: white;
  }
}

.input-normal-button {
  color: @input_color;
  border: 3px solid white;
  text-shadow: none;
  font-size: 15px;
  background: rgba(34, 120, 34, 0.75);
  text-align: center;
  width: 100%;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: @background_color_normal_hover;
    box-shadow: 0px 15px 20px rgba(100, 165, 0, 0.4);
    color: @input_hover_color;
    transform: translateY(-2px);
    border-color: white;
  }
}

.input-warning-button {
  color: @input_color;
  border: 3px solid white;
  text-shadow: none;
  font-size: 15px;
  background: rgba(180, 120, 34, 1);
  text-align: center;
  width: 100%;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: @background_color_warning_hover;
    box-shadow: 0px 15px 20px rgba(255, 120, 0, 1);
    color: @input_hover_color;
    transform: translateY(-2px);
    border-color: white;
  }
}

#name {
  margin-bottom: 4px;
}

#restartButton {
  width: 50%
}

.box {
  animation: spin infinite 500s;
}

.cube {
  font-size: 80px;
  width: 160px;
  height: 160px;
  margin: 80px auto;
  transform-style: preserve-3d;
  box-shadow: 5px 5px 150px #666;
  // border-radius: 20px;
  perspective: 1000px;
  animation: move-origin infinite 500s;
}

.side {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 8px;
  box-shadow: inset 0px 0px 40px #666;

  background: red;

  color: white;
  text-align: center;
  line-height: 2em;
}


.front {
  transform: rotateX(0deg) translateZ(80px);
}

.top {
  transform: rotateX(90deg) translateZ(80px);
}

.right {
  transform: rotateY(90deg) translateZ(80px);
}

.left {
  transform: rotateY(-90deg) translateZ(80px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(80px);
}

.back {
  transform: rotateY(-180deg) translateZ(80px);
}


.cube {
  perspective-origin: 0% 100%;
}


@keyframes move-origin {
  0% {
    perspective-origin: 200% 200%;
  }
  1% {
    perspective-origin: 0% 200%;
  }
  2% {
    perspective-origin: 200% 0%;
  }
  100% {
    perspective-origin: 200% 200%;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360000deg);
  }
}

#diceModal {
  background-color: rgba(0, 0, 0, 0);
  border: transparent;
}

</style>