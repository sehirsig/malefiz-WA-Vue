<template>
  <div class="container m-1" id="information-panel">
    <p v-if="(playerNum > 0)" class="text-center info-text">
      You are Player {{ playerNum }}
    </p>
    <p v-if="(status === stat_ready1 && playerNum === 1)" class="text-center info-text">
      {{ gameMessage }}
    </p>
    <p v-if="(status === stat_ready1 && playerNum !== 1)" class="text-center info-text">
      Wait for Player 1 to start
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </p>
    <p v-if="(status === stat_ready2 && playerNum === 1)" class="text-center info-text">
      {{ gameMessage }}
    </p>
    <p v-if="(status === stat_ready2 && playerNum === 1)" class="text-center info-text">
      {{ players }}
    </p>
    <p v-if="(status === stat_ready2 && playerNum !== 1)" class="text-center info-text">
      Wait for Player 1 to start
    </p>
    <p v-if="((status === stat_playing) && (playerNum === turn_id))" class="text-center info-text">
      {{ currentplayer }}
    </p>
    <p v-if="((status === stat_choosefig || status === stat_moving) && (playerNum === turn_id))" class="text-center info-text">
      {{ currentplayer }}
    </p>
    <p v-if="((status === stat_choosefig || status === stat_moving) && (playerNum === turn_id))" class="text-center info-text">
      {{ diceRolled }}
    </p>
    <p v-if="((0 < turn_id) && (playerNum !== turn_id) && (status === stat_playing || status === stat_choosefig || status === stat_moving) && 0 < playerNum)"
       class="text-center info-text">
      Wait for Player {{ turn_id }} to end his turn
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </p>
    <p v-if="((status === stat_welcome || status === stat_ready1 || status === stat_idle) && (player_count < 2))"
       class="text-center info-text">
      {{ atLeast2Players }}
    </p>
    <p v-if="(status === stat_welcome || status === stat_ready1 || status === stat_idle)" class="text-center info-text">
      {{ players }}
    </p>
    <p v-if="(status === stat_gamewinner)" class="text-center info-text">
      We have a winner ! Congratulations {{ gamewinner }} !
    </p>
    <p v-if="(playerNum === -1 && (status !== stat_welcome && status !== stat_ready1 && status !== stat_ready2 && status !== stat_idle))"
       class="text-center text-light info-text">
      Wait for this game to end.
    </p>
  </div>
  <div class="container m-1" id="input-panel-group">
    <div class="row justify-content-center">
      <reset-button :method="resetGame"/>
        <div v-if="((status === stat_ready1 || status === stat_ready2) && playerNum === 1)" class="row m-1">
          <start-button :method="startGame"/>
        </div>
        <div v-if="(playerNum === turn_id)">
          <div v-if="(status === stat_playing)" class="row m-1">
            <roll-dice-button :method="rollDice"/>
          </div>
          <div v-if="(status === stat_choosefig)" class="row m-1">
            <div class="col btn-group justify-content-center" role="group" aria-label="First group">
              <select-fig-button :method="selectFig" :num="1" />
              <select-fig-button :method="selectFig" :num="2" />
              <select-fig-button :method="selectFig" :num="3" />
              <select-fig-button :method="selectFig" :num="4" />
              <select-fig-button :method="selectFig" :num="5" />
            </div>
          </div>
          <div v-if="(status === stat_moving)" class="row m-1">
            <div class="col">
              <fig-move-button :method="figMove" :direction="'w'" :symbol="'&#9650;'"/>
            </div>
          </div>
          <div v-if="(status === stat_moving)" class="row m-1">
            <div class="col btn-group justify-content-center" role="group" aria-label="First group">
              <fig-move-button :method="figMove" :direction="'a'" :symbol="'&#9668;'"/>
              <fig-move-button :method="figMove" :direction="'s'" :symbol="'&#9660;'"/>
              <fig-move-button :method="figMove" :direction="'d'" :symbol="'&#9658;'"/>
            </div>
          </div>
          <div v-if="(status === stat_moving)" class="row m-1">
            <div class="col">
              <skip-button :method="skipMove"/>
            </div>
          </div>
        </div>
        <div
            v-if="((playerNum === -1 && player_count < 4) && (status === stat_welcome || status === stat_ready1 || status === stat_idle))"
            class="row m-1">
          <div class="col text-center">
            <add-player-form :method="addPlayer"/>
          </div>
        </div>
        <p v-if="(playerNum === -1 && (status !== stat_welcome && status !== stat_ready1 && status !== stat_ready2 && status !== stat_idle))"
           class="text-center text-light">
          <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
          </svg>
        </p>
        <p v-if="(playerNum > 0 && playerNum !== turn_id)" class="text-center text-light">
          Wait for your turn.
        </p>
    </div>
  </div>
  <audio loop id="winAudio" type="audio/mpeg" src="../audio/win.mp3"></audio>
  <audio autoplay="true" loop id="backgroundAudio" type="audio/mpeg" src="../audio/backgroundaudio.mp3"
         preload="auto"></audio>
</template>

<script>
import {webSocketMixin} from "@/mixins/webSocketMixin";
import $ from "jquery";
import firebase from "firebase/compat/app";
import StartButton from "@/components/Game/Buttons/StartButton.vue";
import ResetButton from "@/components/Game/Buttons/ResetButton.vue";
import RollDiceButton from "@/components/Game/Buttons/RollDiceButton.vue";
import SelectFigButton from "@/components/Game/Buttons/SelectFigButton.vue";
import FigMoveButton from "@/components/Game/Buttons/FigMoveButton.vue";
import SkipButton from "@/components/Game/Buttons/SkipButton.vue";
import AddPlayerForm from "@/components/Game/Buttons/AddPlayerForm.vue";

export default {
  name: "InfoPanel",
  components: {AddPlayerForm, SkipButton, FigMoveButton, SelectFigButton, RollDiceButton, ResetButton, StartButton},
  mixins: [webSocketMixin],
  data() {
    return {
      user: "",
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
      if (this.user.displayName === "") {
        this.playerNum = this.player_count + 1
        this.processCmdWS("addPlayer", " ")
      } else {
        this.playerNum = this.player_count + 1
        this.processCmdWS("addPlayer", this.user.displayName)
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = ""
      }
    })
    this.connectWebSocket();
  },
}
</script>

<style lang="less">

</style>