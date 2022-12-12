<template>
  <div class="container m-1" id="information-panel">
    <p v-if="(playerNum > 0)" class="text-center">
      You are Player {{ playerNum }}
    </p>
    <p v-if="(status === stat_ready1 && playerNum === 1)" class="text-center">
      {{ gameMessage }}
    </p>
    <p v-if="(status === stat_ready1 && playerNum !== 1)" class="text-center">
      Wait for Player 1 to start <svg class="spinner" viewBox="0 0 50 50"> <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>
    </p>
    <p v-if="(status === stat_ready2 && playerNum === 1)" class="text-center">
      {{ gameMessage }}
    </p>
    <p v-if="(status === stat_ready2 && playerNum === 1)" class="text-center">
      {{ players }}
    </p>
    <p v-if="(status === stat_ready2 && playerNum !== 1)" class="text-center">
      Wait for Player 1 to start
    </p>
    <p v-if="((status === stat_playing) && (playerNum === turn_id))" class="text-center">
      {{ currentplayer }}
    </p>
    <p v-if="((status === stat_choosefig || status === stat_moving) && (playerNum === turn_id))" class="text-center">
      {{ currentplayer }}
    </p>
    <p v-if="((status === stat_choosefig || status === stat_moving) && (playerNum === turn_id))" class="text-center">
      {{ diceRolled }}
    </p>
    <p v-if="((0 < turn_id) && (playerNum !== turn_id) && (status === stat_playing || status === stat_choosefig || status === stat_moving) && 0 < playerNum)" class="text-center">
      Wait for Player {{ turn_id }} to end his turn<svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>
    </p>
    <p v-if="((status === stat_welcome || status === stat_ready1 || status === stat_idle) && (player_count < 2))" class="text-center">
      {{ atLeast2Players }}
    </p>
    <p v-if="(status === stat_welcome || status === stat_ready1 || status === stat_idle)" class="text-center">
      {{ players }}
    </p>
    <p v-if="(status === stat_gamewinner)" class="text-center">
      We have a winner ! Congratulations {{ gamewinner }} !
    </p>
    <p v-if="(playerNum === -1 && (status !== stat_welcome && status !== stat_ready1 && status !== stat_ready2 && status !== stat_idle))" class="text-center text-light">
      Wait for this game to end.
    </p>
  </div>
  <div class="container m-1" id="input-panel-group">
    <div class="row justify-content-center">
      <div class="row justify-content-center">
        <div class="row m-1">
          <div class="col text-center">
            <button type="button" class="btn btn-danger input-critical-button" v-on:click="resetGame()">
              Reset Game &#8634;
            </button>
          </div>
        </div>
      </div>
      <div v-if="((status === stat_ready1 || status === stat_ready2) && playerNum === 1)" class="row m-1">
        <div class="col text-center">
          <button type="button" class="btn btn-warning btn-block input-warning-button" v-on:click="startGame()">
            Start Game</button>
        </div>
      </div>
      <div v-if="(playerNum === turn_id)">
        <div v-if="(status === stat_playing)" class="row m-1">
          <div class="col">
            <button type="button" v-on:click="rollDice()" class="btn btn-success btn-block input-normal-button" data-bs-toggle="modal" data-bs-target="#rollModal">
              Roll Dice</button>
          </div>
        </div>
        <div v-if="(status === stat_choosefig)" class="row m-1">
          <div class="col btn-group justify-content-center" role="group" aria-label="First group">
            <button type="button" class="btn btn-success input-normal-button" v-on:click="selectFig(1)">
              1</button>
            <button type="button" class="btn btn-success input-normal-button" v-on:click="selectFig(2)">
              2</button>
            <button type="button" class="btn btn-success input-normal-button" v-on:click="selectFig(3)">
              3</button>
            <button type="button" class="btn btn-success input-normal-button" v-on:click="selectFig(4)">
              4</button>
            <button type="button" class="btn btn-success input-normal-button" v-on:click="selectFig(5)">
              5</button>
          </div>
        </div>
        <div v-if="(status === stat_moving)" class="row m-1">
          <div class="col">
            <button type="button" class="btn btn-success input-normal-button" v-on:click="figMove('w')">
              &#9650;</button>
          </div>
        </div>
        <div v-if="(status === stat_moving)" class="row m-1">
          <div class="col btn-group justify-content-center" role="group" aria-label="First group">
            <button type="button" class="btn btn-success input-normal-button" v-on:click="figMove('a')">
              &#9668;</button>
            <button type="button" class="btn btn-success input-normal-button" v-on:click="figMove('s')">
              &#9660;</button>
            <button type="button" class="btn btn-success input-normal-button" v-on:click="figMove('d')">
              &#9658;</button>
          </div>
        </div>
        <div v-if="(status === stat_moving)" class="row m-1">
          <div class="col">
            <button type="button" class="btn btn-warning input-warning-button" v-on:click="skipMove">
              Skip</button>
          </div>
        </div>
      </div>
      <div v-if="((playerNum === -1 && player_count < 4) && (status === stat_welcome || status === stat_ready1 || status === stat_idle))" class="row m-1">
        <div class="col text-center">
          <input type="text" class="form-control text-center" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="name">
          <button type="button" class="btn btn-success input-normal-button" v-on:click="addPlayer()">
            Join Game</button>
        </div>
      </div>
      <p v-if="(playerNum === -1 && (status !== stat_welcome && status !== stat_ready1 && status !== stat_ready2 && status !== stat_idle))" class="text-center text-light">
        <svg class="spinner" viewBox="0 0 50 50"> <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>
      </p>
      <p v-if="(playerNum > 0 && playerNum !== turn_id)" class="text-center text-light">
        Wait for your turn.
      </p>
    </div>
  </div>
  <audio loop id="winAudio" type="audio/mpeg" src="../audio/win.mp3"></audio>
  <audio autoplay="true" loop id="backgroundAudio" type="audio/mpeg" src="../audio/backgroundaudio.mp3" preload="auto"></audio>
</template>

<script>
import {webSocketMixin} from "@/mixins/webSocketMixin";
import $ from "jquery";

export default {
  name: "InfoPanel",
  mixins: [webSocketMixin],
  data() {
    return {
      stat_welcome: 0,
      stat_loaded: 1,
      stat_saved: 2,
      stat_gamewinner: 3,
      stat_choosefig: 4,
      stat_idle: 5,
      stat_ready1: 6,
      stat_ready2: 7,
      stat_playing: 13,
      stat_moving: 14,
      stat_entername: 15,
    }
  },
  methods: {
    rollDice() {
      this.processCmdWS("rollDice", " ")
    },
    selectFig(num) {
      this.processCmdWS("selectFig", num)
    },
    figMove(direction) {
      this.processCmdWS("figMove", direction)
    },
    skipMove() {
      this.processCmdWS("skip", " ")
    },
    addPlayer() {
      const player_name = $('#name').get(0).value;
      if (player_name === "") {
        this.$swal({
          icon: "warning",
          text: "Blank name is not allowed!",
          title: "Error!",
          showCloseButton: "Nice",
        })
      } else {
        this.playerNum = this.player_count + 1
        this.processCmdWS("addPlayer", player_name)
      }
    },
    startDiceAudio() {
      let audio = $('#diceAudio').get(0);
      audio.loop = true;
      audio.play();
    },
    startGame() {
      this.processCmdWS("start", " ")
    },
    resetGame() {
      this.$swal({
        buttons: true,
        dangerMode: true,
        icon: "warning",
        text: "Do you really want to reset the game?",
        title: "Are you sure?",
        showCancelButton: true,
        confirmButtonText: 'Reset',
      })
          .then((willDelete) => {
            if (willDelete.isConfirmed) {
              this.processCmdWS("reset", " ")
            }
          });
    },
  },
  created() {
    this.connectWebSocket();
  },
}
</script>

<style lang="less">

</style>