<template>
  <Navigation selected="about"></Navigation>
  <br>
  <div class="container">
    <div class="readme-section">
      <h4 id="htwg-constance-ain-6-web-applications">HTWG Constance - AIN 6 - Web Applications</h4>
      <h4 id="scala-project-play-server-malefiz-gameboard">Scala Project Play Server - Malefiz Game</h4>
      <h5 id="gameboard-project-for-the-lecture-wa">Game Project For The Lecture WA</h5>
      <p><img class="img-fluid rounded"
              src="https://user-images.githubusercontent.com/81407658/114448533-f96ce480-9bd3-11eb-93a7-74dc0941f6c1.jpg"
              alt="gamepicture"></p>
      <h4 id="gameboard-rules">Game Rules</h4>
      <p>Malefiz is a board gameboard for 2 to 4 players. Each player has 5 figures to play with. Every figure starts in
        their base, at the bottom of the board. The beginning player rolls the dice. The thrown number has to be pulled
        completly. While walking with the figure, change of direction is not allowed. If a player lands on an enemys
        figure, the enemy has to put his figure back to his base. Figures are allowed to jump over other figures, but
        not over barricades. If a player lands on the barricade (with the exact number), he has to set the barricade
        anywhere on the gameboard board, all black fields are allowed, except the lowest row.</p>
      <h5 id="goal-of-the-gameboard">Goal Of The Game</h5>
      <p>The player reaching the top of the gameboard first (with the exact number rolled with the dice) with one figure
        wins the gameboard.</p>
      <h4 id="how-this-gameboard-works">How This Game Works</h4>
      <details>
        <summary>Open The Game And Add Players (2-4)!</summary>
        <p>
          <img src="https://media.giphy.com/media/KmHC7K3nc9odODI7b0/giphy.gif" alt>
        </p>
      </details>
      <details>
        <summary>Start The Game!</summary>
        <p>
          <img src="https://media.giphy.com/media/F46Pb3YBG130zKn3dj/giphy.gif" alt>
        </p>
      </details>
      <details>
        <summary>Roll The Dice!</summary>
        <p>
          <img src="https://media.giphy.com/media/0v5SGvqnmAoQUe5NqG/giphy.gif" alt>
        </p>
      </details>
      <details>
        <summary>Choose The Gamefigure!</summary>
        <p>
          <img src="https://media.giphy.com/media/jfQvxoAVKkUMKREL1j/giphy.gif" alt>
        </p>
      </details>
      <details>
        <summary>Move The Gamefigure!</summary>
        <p>
          <img src="https://media.giphy.com/media/qQnZz74IFNAYqFzAkJ/giphy.gif" alt>
        </p>
      </details>
      <details>
        <summary>Kick A Gamefigure!</summary>
        <p>
          <img src="https://media.giphy.com/media/QlGzFkpEK1fVqC1NOo/giphy.gif" alt>
        </p>
      </details>
      <details>
        <summary>Move A Blockade!</summary>
        <p>
          <img src="https://media.giphy.com/media/i7HLTDgBWVDfqBTT8k/giphy.gif" alt>
        </p>
      </details>

      <h5 id="informations">Informations</h5>
      <blockquote>
        <p>When the player does a faulty move, the gamefigure gets reset to the starting point of its move (ex. walk
          into a barrier with one or more moves left). This is done with our Undo-Manager.</p>
        <p>If a player can&#39;t do a regular move, the player can press the &#39;skip&#39; button to skip his move.</p>
      </blockquote>
      <h5 id="extra-features">Extra Features</h5>
      <details>
        <summary>Skip A Move!</summary>
        <p>
          <img src="https://media.giphy.com/media/tZ8ydBQD5o76EbmosY/giphy.gif" alt>
        </p>
        The player is allowed to skip his current move. It will be the next players turn.
        <p>
          TUI Command -&gt; &#39;skip&#39;
        </p>
      </details>
      <details>
        <summary>Save The Game Progress!</summary>
        <p>
          <img src="https://media.giphy.com/media/pgCaejbdDMn6PmDER2/giphy.gif" alt>
        </p>
        The player is allowed to save the gameboard, when he finished his current move and before the next player throws
        the dice.
        <p>
          TUI Command -&gt; &#39;save&#39;
        </p>
      </details>
      <details>
        <summary>Load The Game Progress!</summary>
        <p>
          <img src="https://media.giphy.com/media/c5Df8CZsTUB4ToWnBu/giphy.gif" alt>
        </p>
        The player is allowed to load the savegame, before the gameboard starts. You need to add enough players before
        loading!
        <p>
          TUI Command -&gt; &#39;load&#39;
        </p>
      </details>
      <details>
        <summary>Undo The Last Move!</summary>
        <p>
          <img src="https://media.giphy.com/media/sxnVgmTyBsZ0PzvkiC/giphy.gif" alt>
        </p>
        The player is allowed to undo his last movement! (And also for information: The whole move gets undo&#39;d if
        the player moves into a not allowed direction)
        <p>
          TUI Command -&gt; &#39;undo&#39;
        </p>
      </details>
      <details>
        <summary>Redo The Last Move!</summary>
        <p>
          <img src="https://media.giphy.com/media/sFvqvJ8FJONqNOMgeV/giphy.gif" alt>
        </p>
        The player is allowed to load the savegame, before the gameboard starts. You need to add enough players before
        loading!
        <p>
          TUI Command -&gt; &#39;redo&#39;
        </p>
      </details>
      <details>
        <summary>Reset The Game!</summary>
        <p>
          <img src="https://media.giphy.com/media/7GUrWb1vFC4ztyK0t8/giphy.gif" alt>
        </p>
        The player is allowed to reset the gameboard at any given time via GUI! This resets the whole gameboard and
        deletes all players.
        <p>
        </p>
      </details>

      <h5 id="tui-commands-information">TUI Commands Information</h5>
      <blockquote>
        <p>After the player has rolled the dice, a number from 1 to 5 has to be entered, to choose the gamefigure.</p>
      </blockquote>
      <h4 id="procedure-of-making-this-gameboard">Procedure Of Making This Game</h4>
      <h4 id="used-design-patterns">Used Design Patterns</h4>
      <ul>
        <li>Builder-Pattern <em><a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/model/playerComponent/PlayerBuilder.scala">
          PlayerBuilder</a></em></li>
        <li>State-Pattern <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/aview/TUIState.scala"><em>
          TUI State</em></a> <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/controller/controllerComponent/PlayerState.scala"><em>
          Player State</em></a></li>
        <li>Try-Monade <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/model/gameboardComponent/gameboardBaseImpl/Gameboard.scala#L132"><em>
          replaceCell()</em></a></li>
        <li>Option-Monade <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/model/gameboardComponent/gameboardBaseImpl/Dice.scala"><em>
          Dice</em></a></li>
        <li>Strategy-Pattern <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/util/BlockStrategy.scala"><em>
          Block-Strategy</em></a></li>
        <li>Reactor-Events <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/controller/controllerComponent/ControllerInterface.scala#L129"><em>
          Event/Listener/Reactor</em></a></li>
        <li>Command-Pattern <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/util/Command.scala"><em>
          Command</em></a></li>
        <li>Undo-Manager <a
            href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/util/UndoManager.scala"><em>
          UndoManager</em></a></li>
      </ul>
      <h4 id="presentation-link">Presentation Link</h4>
      <p><a href="https://docs.google.com/">Google Presentation</a></p>
      <p><em>Project Malefiz written by <a href="https://github.com/sehirsig/">
        sehirsig</a> &amp; <a href="https://github.com/jojoGraff/">jojoGraff</a></em></p>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "About-View",
  components: {Navigation, Footer}
}
</script>

<style lang="less">
.readme-section {
  text-align: center;
}

#header_text {
  text-align: center;
}

p {
  font-size: 15px;
  alignment: center;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

details {
  font-size: 20px;
}

</style>