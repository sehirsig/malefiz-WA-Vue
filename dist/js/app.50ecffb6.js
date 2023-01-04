(function(){"use strict";var e={6526:function(e,t,a){var s=a(5102),r=a(9269);function o(e,t,a,s,o,i){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var i={name:"App",components:{}},n=a(7617);const l=(0,n.Z)(i,[["render",o]]);var c=l,m=a(2201);const d={class:"q-pa-md row justify-center"};function u(e,t,a,s,o,i){const n=(0,r.up)("Navigation"),l=(0,r.up)("welcome-chat");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n,{selected:"home"}),(0,r._)("div",d,[(0,r.Wm)(l)])],64)}const p={class:"navbar navbar-dark navbar-expand-lg bg-dark fixed-top"},g={class:"container-fluid"},h=(0,r._)("a",{class:"navbar-brand",id:"navBrand"},"Malefiz",-1),y=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse justify-content-center",id:"navbarNavAltMarkup"},b={class:"navbar-nav"},w={key:0,class:"nav-link active hoverable text-center","aria-current":"page"},v={key:1,class:"nav-link hoverable text-center"},k={key:0,class:"nav-link active hoverable text-center","aria-current":"page"},_={key:1,class:"nav-link hoverable text-center"},x={key:0,class:"nav-link active hoverable text-center","aria-current":"page"},C={key:1,class:"nav-link hoverable text-center"},P={type:"button",class:"btn btn-dark hoverable","data-bs-toggle":"modal","data-bs-target":"#infoModal"};function z(e,t,a,s,o,i){const n=(0,r.up)("router-link"),l=(0,r.up)("q-icon"),c=(0,r.up)("game-instruction");return(0,r.wg)(),(0,r.iD)("nav",p,[(0,r._)("div",g,[h,y,(0,r._)("div",f,[(0,r._)("div",b,[(0,r.Wm)(n,{style:{"text-decoration":"none",color:"#c7c7c7"},to:{name:"Home"}},{default:(0,r.w5)((()=>["home"===a.selected?((0,r.wg)(),(0,r.iD)("a",w,"Home")):((0,r.wg)(),(0,r.iD)("a",v,"Home"))])),_:1}),(0,r.Wm)(n,{style:{"text-decoration":"none",color:"#c7c7c7"},to:{name:"About"}},{default:(0,r.w5)((()=>["about"===a.selected?((0,r.wg)(),(0,r.iD)("a",k,"About")):((0,r.wg)(),(0,r.iD)("a",_,"About"))])),_:1}),(0,r.Wm)(n,{style:{"text-decoration":"none",color:"#c7c7c7"},to:{name:"Malefiz"}},{default:(0,r.w5)((()=>["malefiz"===a.selected?((0,r.wg)(),(0,r.iD)("a",x,"Malefiz")):((0,r.wg)(),(0,r.iD)("a",C,"Malefiz"))])),_:1}),(0,r._)("button",P,[(0,r.Wm)(l,{name:"info"}),(0,r.Uk)(" Game Instructions ")]),(0,r.Wm)(c)])])])])}const D={class:"modal fade fixed-top",id:"infoModal",tabindex:"-1",role:"dialog","aria-labelledby":"infoModalLabel","aria-hidden":"true","data-backdrop":"false"},S=(0,r._)("div",{class:"modal-dialog modal-dialog-centered",role:"document"},[(0,r._)("div",{class:"modal-content"},[(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"infoModalLabel"},"Game Instructions")]),(0,r._)("div",{class:"modal-body"},[(0,r._)("h3",null,"Game Rules"),(0,r._)("em",null,"Malefiz is a board game for 2 to 4 players. Each player has 5 figures to play with. Every figure starts in their base, at the bottom of the board. The beginning player rolls the dice. The thrown number has to be pulled completly. While walking with the figure, change of direction is not allowed. If a player lands on an enemys figure, the enemy has to put his figure back to his base. Figures are allowed to jump over other figures, but not over barricades. If a player lands on the barricade (with the exact number), the barricade gets set anywhere on the game board, all black fields are allowed, except the lowest row. "),(0,r._)("h4",null,"Goal Of The Game"),(0,r._)("em",null,"The player reaching the top of the gameboard first (with the exact number rolled with the dice) with one figure wins the game. ")]),(0,r._)("div",{class:"modal-footer"},[(0,r._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")])])],-1),W=[S];function M(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("div",D,W)}var T={name:"GameInstruction"};const j=(0,n.Z)(T,[["render",M]]);var G=j,N={name:"Navigation-Bar",components:{GameInstruction:G},data(){return{homeLink:"/",aboutLink:"/about",malefizLink:"/malefiz"}},props:["selected"]},q=a(6357),I=a(1410),A=a.n(I);const B=(0,n.Z)(N,[["render",z]]);var O=B;A()(N,"components",{QIcon:q.Z});const F=e=>((0,r.dD)("data-v-26ae09e7"),e=e(),(0,r.Cn)(),e),Z={style:{width:"100%","max-width":"900px","font-size":"15pt"}},U=F((()=>(0,r._)("div",null," Hey there! Do you fancy a round of Malefiz? ",-1))),E=F((()=>(0,r._)("div",null," Absolutely! But I'm not sure how this works... ",-1))),H=F((()=>(0,r._)("div",null," No Problem! ",-1))),L=F((()=>(0,r._)("div",null," Take a look at the game instructions which can be found on the menu bar to make yourself familiar with Malefiz ",-1))),R=F((()=>(0,r._)("div",null," Select the about tab to learn more about our project and how it is implemented ",-1))),Y=F((()=>(0,r._)("div",null," When you're feeling ready, select the Malefiz tab to start playing ",-1))),K=F((()=>(0,r._)("div",null," Got it! Let's go!!! ",-1)));function Q(e,t,a,s,o,i){const n=(0,r.up)("q-chat-message"),l=(0,r.up)("q-spinner-dots");return(0,r.wg)(),(0,r.iD)("div",Z,[(0,r.Wm)(n,{name:"Sebi",stamp:"7 minutes ago",sent:"","text-color":"white","bg-color":"primary"},{default:(0,r.w5)((()=>[U])),_:1}),(0,r.Wm)(n,{name:"Jojo",align:"left","bg-color":"amber"},{default:(0,r.w5)((()=>[E])),_:1}),(0,r.Wm)(n,{name:"Sebi",sent:"","text-color":"white","bg-color":"primary"},{default:(0,r.w5)((()=>[H,L,R,Y])),_:1}),(0,r.Wm)(n,{name:"Jojo",align:"left","bg-color":"amber"},{default:(0,r.w5)((()=>[K,(0,r.Wm)(l,{size:"2rem"})])),_:1})])}var V={name:"welcome-chat"},J=a(5720),$=a(5068);const X=(0,n.Z)(V,[["render",Q],["__scopeId","data-v-26ae09e7"]]);var ee=X;A()(V,"components",{QChatMessage:J.Z,QSpinnerDots:$.Z});var te={name:"Home-View",components:{Navigation:O,WelcomeChat:ee}};const ae=(0,n.Z)(te,[["render",u]]);var se=ae;const re=(0,r.uE)('<div class="container"><div class="readme-section"><h4 id="htwg-constance-ain-6-web-applications">HTWG Constance - AIN 6 - Web Applications</h4><h4 id="scala-project-play-server-malefiz-gameboard">Scala Project Play Server - Malefiz Game</h4><h5 id="gameboard-project-for-the-lecture-wa">Game Project For The Lecture WA</h5><p><img class="img-fluid rounded" src="https://user-images.githubusercontent.com/81407658/114448533-f96ce480-9bd3-11eb-93a7-74dc0941f6c1.jpg" alt="gamepicture"></p><h4 id="gameboard-rules">Game Rules</h4><p>Malefiz is a board gameboard for 2 to 4 players. Each player has 5 figures to play with. Every figure starts in their base, at the bottom of the board. The beginning player rolls the dice. The thrown number has to be pulled completly. While walking with the figure, change of direction is not allowed. If a player lands on an enemys figure, the enemy has to put his figure back to his base. Figures are allowed to jump over other figures, but not over barricades. If a player lands on the barricade (with the exact number), he has to set the barricade anywhere on the gameboard board, all black fields are allowed, except the lowest row.</p><h5 id="goal-of-the-gameboard">Goal Of The Game</h5><p>The player reaching the top of the gameboard first (with the exact number rolled with the dice) with one figure wins the gameboard.</p><h4 id="how-this-gameboard-works">How This Game Works</h4><details><summary>Open The Game And Add Players (2-4)!</summary><p><img src="https://media.giphy.com/media/KmHC7K3nc9odODI7b0/giphy.gif" alt></p></details><details><summary>Start The Game!</summary><p><img src="https://media.giphy.com/media/F46Pb3YBG130zKn3dj/giphy.gif" alt></p></details><details><summary>Roll The Dice!</summary><p><img src="https://media.giphy.com/media/0v5SGvqnmAoQUe5NqG/giphy.gif" alt></p></details><details><summary>Choose The Gamefigure!</summary><p><img src="https://media.giphy.com/media/jfQvxoAVKkUMKREL1j/giphy.gif" alt></p></details><details><summary>Move The Gamefigure!</summary><p><img src="https://media.giphy.com/media/qQnZz74IFNAYqFzAkJ/giphy.gif" alt></p></details><details><summary>Kick A Gamefigure!</summary><p><img src="https://media.giphy.com/media/QlGzFkpEK1fVqC1NOo/giphy.gif" alt></p></details><details><summary>Move A Blockade!</summary><p><img src="https://media.giphy.com/media/i7HLTDgBWVDfqBTT8k/giphy.gif" alt></p></details><h5 id="informations">Informations</h5><blockquote><p>When the player does a faulty move, the gamefigure gets reset to the starting point of its move (ex. walk into a barrier with one or more moves left). This is done with our Undo-Manager.</p><p>If a player can&#39;t do a regular move, the player can press the &#39;skip&#39; button to skip his move.</p></blockquote><h5 id="extra-features">Extra Features</h5><details><summary>Skip A Move!</summary><p><img src="https://media.giphy.com/media/tZ8ydBQD5o76EbmosY/giphy.gif" alt></p> The player is allowed to skip his current move. It will be the next players turn. <p> TUI Command -&gt; &#39;skip&#39; </p></details><details><summary>Save The Game Progress!</summary><p><img src="https://media.giphy.com/media/pgCaejbdDMn6PmDER2/giphy.gif" alt></p> The player is allowed to save the gameboard, when he finished his current move and before the next player throws the dice. <p> TUI Command -&gt; &#39;save&#39; </p></details><details><summary>Load The Game Progress!</summary><p><img src="https://media.giphy.com/media/c5Df8CZsTUB4ToWnBu/giphy.gif" alt></p> The player is allowed to load the savegame, before the gameboard starts. You need to add enough players before loading! <p> TUI Command -&gt; &#39;load&#39; </p></details><details><summary>Undo The Last Move!</summary><p><img src="https://media.giphy.com/media/sxnVgmTyBsZ0PzvkiC/giphy.gif" alt></p> The player is allowed to undo his last movement! (And also for information: The whole move gets undo&#39;d if the player moves into a not allowed direction) <p> TUI Command -&gt; &#39;undo&#39; </p></details><details><summary>Redo The Last Move!</summary><p><img src="https://media.giphy.com/media/sFvqvJ8FJONqNOMgeV/giphy.gif" alt></p> The player is allowed to load the savegame, before the gameboard starts. You need to add enough players before loading! <p> TUI Command -&gt; &#39;redo&#39; </p></details><details><summary>Reset The Game!</summary><p><img src="https://media.giphy.com/media/7GUrWb1vFC4ztyK0t8/giphy.gif" alt></p> The player is allowed to reset the gameboard at any given time via GUI! This resets the whole gameboard and deletes all players. <p></p></details><h5 id="tui-commands-information">TUI Commands Information</h5><blockquote><p>After the player has rolled the dice, a number from 1 to 5 has to be entered, to choose the gamefigure.</p></blockquote><h4 id="procedure-of-making-this-gameboard">Procedure Of Making This Game</h4><h4 id="used-design-patterns">Used Design Patterns</h4><ul><li>Builder-Pattern <em><a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/model/playerComponent/PlayerBuilder.scala"> PlayerBuilder</a></em></li><li>State-Pattern <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/aview/TUIState.scala"><em> TUI State</em></a> <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/controller/controllerComponent/PlayerState.scala"><em> Player State</em></a></li><li>Try-Monade <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/model/gameboardComponent/gameboardBaseImpl/Gameboard.scala#L132"><em> replaceCell()</em></a></li><li>Option-Monade <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/model/gameboardComponent/gameboardBaseImpl/Dice.scala"><em> Dice</em></a></li><li>Strategy-Pattern <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/util/BlockStrategy.scala"><em> Block-Strategy</em></a></li><li>Reactor-Events <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/controller/controllerComponent/ControllerInterface.scala#L129"><em> Event/Listener/Reactor</em></a></li><li>Command-Pattern <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/util/Command.scala"><em> Command</em></a></li><li>Undo-Manager <a href="https://github.com/franzgajewski/malefiz/blob/master/src/main/scala/de/htwg/se/malefiz/util/UndoManager.scala"><em> UndoManager</em></a></li></ul><h4 id="presentation-link">Presentation Link</h4><p><a href="https://docs.google.com/">Google Presentation</a></p><p><em>Project Malefiz written by <a href="https://github.com/sehirsig/"> sehirsig</a> &amp; <a href="https://github.com/jojoGraff/">jojoGraff</a></em></p></div></div>',1);function oe(e,t,a,s,o,i){const n=(0,r.up)("Navigation"),l=(0,r.up)("Header"),c=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n,{selected:"about"}),(0,r.Wm)(l),re,(0,r.Wm)(c)],64)}const ie={class:"text-center text-lg-start bg-light text-muted"},ne=(0,r.uE)('<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"><div class="me-5 d-none d-lg-block"><span>Our social media:</span></div><div><a href="https://github.com/sehirsig/malefiz-WA-PlayServer" class="me-4 text-reset"><i class="bi-github"></i></a><a href="" class="me-4 text-reset"><i class="bi-twitter"></i></a><a href="" class="me-4 text-reset"><i class="bi-google"></i></a><a href="" class="me-4 text-reset"><i class="bi-instagram"></i></a><a href="" class="me-4 text-reset"><i class="bi-linkedin"></i></a><a href="" class="me-4 text-reset"><i class="bi-facebook"></i></a></div></section><div class="text-center p-4" style="background-color:rgba(0, 0, 0, 0.05);"><a> © 2022 Copyright: @@sehirsig &amp; @@jojoGraff on GitHub</a></div>',2),le=[ne];function ce(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("footer",ie,le)}var me={name:"Footer-Bar"};const de=(0,n.Z)(me,[["render",ce]]);var ue=de;const pe={class:"text-center",id:"header_text"};function ge(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("div",pe,"Malefiz")}var he={name:"Header-Bar"};const ye=(0,n.Z)(he,[["render",ge]]);var fe=ye,be={name:"About-View",components:{Navigation:O,Header:fe,Footer:ue}};const we=(0,n.Z)(be,[["render",oe]]);var ve=we;const ke={key:0},_e={class:"grid"},xe={key:1,class:"container"},Ce={class:"q-pa-md"},Pe={class:"text-purple q-gutter-md",style:{"font-size":"2em"}},ze=(0,r._)("p",null,"No connection to the server",-1);function De(e,t,a,s,o,i){const n=(0,r.up)("Navigation"),l=(0,r.up)("InfoPanel"),c=(0,r.up)("Gameboard"),m=(0,r.up)("q-icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n,{selected:"malefiz"}),o.backendOnline?((0,r.wg)(),(0,r.iD)("div",ke,[(0,r._)("div",_e,[(0,r.Wm)(l),(0,r.Wm)(c)])])):((0,r.wg)(),(0,r.iD)("div",xe,[(0,r._)("div",Ce,[(0,r._)("div",Pe,[(0,r.Wm)(m,{name:"warning"})])]),ze]))],64)}var Se=a(3201);const We={class:"container m-1",id:"information-panel"},Me={key:0,class:"text-center info-text"},Te={key:1,class:"text-center info-text"},je={key:2,class:"text-center info-text"},Ge=(0,r._)("svg",{class:"spinner",viewBox:"0 0 50 50"},[(0,r._)("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"})],-1),Ne={key:3,class:"text-center info-text"},qe={key:4,class:"text-center info-text"},Ie={key:5,class:"text-center info-text"},Ae={key:6,class:"text-center info-text"},Be={key:7,class:"text-center info-text"},Oe={key:8,class:"text-center info-text"},Fe={key:9,class:"text-center info-text"},Ze=(0,r._)("svg",{class:"spinner",viewBox:"0 0 50 50"},[(0,r._)("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"})],-1),Ue={key:10,class:"text-center info-text"},Ee={key:11,class:"text-center info-text"},He={key:12,class:"text-center info-text"},Le={key:13,class:"text-center text-light info-text"},Re={class:"container m-1",id:"input-panel-group"},Ye={class:"row justify-content-center"},Ke={key:0,class:"row m-1"},Qe={key:1},Ve={key:0,class:"row m-1"},Je={key:1,class:"row m-1"},$e={class:"col btn-group justify-content-center",role:"group","aria-label":"First group"},Xe={key:2,class:"row m-1"},et={class:"col"},tt={key:3,class:"row m-1"},at={class:"col btn-group justify-content-center",role:"group","aria-label":"First group"},st={key:4,class:"row m-1"},rt={class:"col"},ot={key:2,class:"row m-1"},it={class:"col text-center"},nt={key:3,class:"text-center text-light"},lt=(0,r._)("svg",{class:"spinner",viewBox:"0 0 50 50"},[(0,r._)("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"})],-1),ct=[lt],mt={key:4,class:"text-center text-light"},dt=(0,r._)("audio",{loop:"",id:"winAudio",type:"audio/mpeg",src:"../audio/win.mp3"},null,-1),ut=(0,r._)("audio",{autoplay:"true",loop:"",id:"backgroundAudio",type:"audio/mpeg",src:"../audio/backgroundaudio.mp3",preload:"auto"},null,-1);function pt(e,t,a,s,o,i){const n=(0,r.up)("reset-button"),l=(0,r.up)("start-button"),c=(0,r.up)("roll-dice-button"),m=(0,r.up)("select-fig-button"),d=(0,r.up)("fig-move-button"),u=(0,r.up)("skip-button"),p=(0,r.up)("add-player-form");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",We,[e.playerNum>0?((0,r.wg)(),(0,r.iD)("p",Me," You are Player "+(0,Se.zw)(e.playerNum),1)):(0,r.kq)("",!0),e.status===e.stat_ready1&&1===e.playerNum?((0,r.wg)(),(0,r.iD)("p",Te,(0,Se.zw)(e.gameMessage),1)):(0,r.kq)("",!0),e.status===e.stat_ready1&&1!==e.playerNum?((0,r.wg)(),(0,r.iD)("p",je,[(0,r.Uk)(" Wait for Player 1 to start "),Ge])):(0,r.kq)("",!0),e.status===e.stat_ready2&&1===e.playerNum?((0,r.wg)(),(0,r.iD)("p",Ne,(0,Se.zw)(e.gameMessage),1)):(0,r.kq)("",!0),e.status===e.stat_ready2&&1===e.playerNum?((0,r.wg)(),(0,r.iD)("p",qe,(0,Se.zw)(e.players),1)):(0,r.kq)("",!0),e.status===e.stat_ready2&&1!==e.playerNum?((0,r.wg)(),(0,r.iD)("p",Ie," Wait for Player 1 to start ")):(0,r.kq)("",!0),e.status===e.stat_playing&&e.playerNum===e.turn_id?((0,r.wg)(),(0,r.iD)("p",Ae,(0,Se.zw)(e.currentplayer),1)):(0,r.kq)("",!0),e.status!==e.stat_choosefig&&e.status!==e.stat_moving||e.playerNum!==e.turn_id?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",Be,(0,Se.zw)(e.currentplayer),1)),e.status!==e.stat_choosefig&&e.status!==e.stat_moving||e.playerNum!==e.turn_id?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",Oe,(0,Se.zw)(e.diceRolled),1)),0<e.turn_id&&e.playerNum!==e.turn_id&&(e.status===e.stat_playing||e.status===e.stat_choosefig||e.status===e.stat_moving)&&0<e.playerNum?((0,r.wg)(),(0,r.iD)("p",Fe,[(0,r.Uk)(" Wait for Player "+(0,Se.zw)(e.turn_id)+" to end his turn ",1),Ze])):(0,r.kq)("",!0),(e.status===e.stat_welcome||e.status===e.stat_ready1||e.status===e.stat_idle)&&e.player_count<2?((0,r.wg)(),(0,r.iD)("p",Ue,(0,Se.zw)(e.atLeast2Players),1)):(0,r.kq)("",!0),e.status===e.stat_welcome||e.status===e.stat_ready1||e.status===e.stat_idle?((0,r.wg)(),(0,r.iD)("p",Ee,(0,Se.zw)(e.players),1)):(0,r.kq)("",!0),e.status===e.stat_gamewinner?((0,r.wg)(),(0,r.iD)("p",He," We have a winner ! Congratulations "+(0,Se.zw)(e.gamewinner)+" ! ",1)):(0,r.kq)("",!0),-1===e.playerNum&&e.status!==e.stat_welcome&&e.status!==e.stat_ready1&&e.status!==e.stat_ready2&&e.status!==e.stat_idle?((0,r.wg)(),(0,r.iD)("p",Le," Wait for this game to end. ")):(0,r.kq)("",!0)]),(0,r._)("div",Re,[(0,r._)("div",Ye,[(0,r.Wm)(n,{method:i.resetGame},null,8,["method"]),e.status!==e.stat_ready1&&e.status!==e.stat_ready2||1!==e.playerNum?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",Ke,[(0,r.Wm)(l,{method:i.startGame},null,8,["method"])])),e.playerNum===e.turn_id?((0,r.wg)(),(0,r.iD)("div",Qe,[e.status===e.stat_playing?((0,r.wg)(),(0,r.iD)("div",Ve,[(0,r.Wm)(c,{method:i.rollDice},null,8,["method"])])):(0,r.kq)("",!0),e.status===e.stat_choosefig?((0,r.wg)(),(0,r.iD)("div",Je,[(0,r._)("div",$e,[(0,r.Wm)(m,{method:i.selectFig,num:1},null,8,["method"]),(0,r.Wm)(m,{method:i.selectFig,num:2},null,8,["method"]),(0,r.Wm)(m,{method:i.selectFig,num:3},null,8,["method"]),(0,r.Wm)(m,{method:i.selectFig,num:4},null,8,["method"]),(0,r.Wm)(m,{method:i.selectFig,num:5},null,8,["method"])])])):(0,r.kq)("",!0),e.status===e.stat_moving?((0,r.wg)(),(0,r.iD)("div",Xe,[(0,r._)("div",et,[(0,r.Wm)(d,{method:i.figMove,direction:"w",symbol:"▲"},null,8,["method"])])])):(0,r.kq)("",!0),e.status===e.stat_moving?((0,r.wg)(),(0,r.iD)("div",tt,[(0,r._)("div",at,[(0,r.Wm)(d,{method:i.figMove,direction:"a",symbol:"◄"},null,8,["method"]),(0,r.Wm)(d,{method:i.figMove,direction:"s",symbol:"▼"},null,8,["method"]),(0,r.Wm)(d,{method:i.figMove,direction:"d",symbol:"►"},null,8,["method"])])])):(0,r.kq)("",!0),e.status===e.stat_moving?((0,r.wg)(),(0,r.iD)("div",st,[(0,r._)("div",rt,[(0,r.Wm)(u,{method:i.skipMove},null,8,["method"])])])):(0,r.kq)("",!0)])):(0,r.kq)("",!0),-1===e.playerNum&&e.player_count<4&&(e.status===e.stat_welcome||e.status===e.stat_ready1||e.status===e.stat_idle)?((0,r.wg)(),(0,r.iD)("div",ot,[(0,r._)("div",it,[(0,r.Wm)(p,{method:i.addPlayer},null,8,["method"])])])):(0,r.kq)("",!0),-1===e.playerNum&&e.status!==e.stat_welcome&&e.status!==e.stat_ready1&&e.status!==e.stat_ready2&&e.status!==e.stat_idle?((0,r.wg)(),(0,r.iD)("p",nt,ct)):(0,r.kq)("",!0),e.playerNum>0&&e.playerNum!==e.turn_id?((0,r.wg)(),(0,r.iD)("p",mt," Wait for your turn. ")):(0,r.kq)("",!0)])]),dt,ut],64)}var gt=a(1234),ht=a.n(gt);const yt={data:function(){return{webSocket:Object,data:{},status:0,gameMessage:" ",atLeast2Players:" ",players:" ",currentplayer:" ",diceRolled:" ",gamewinner:" ",turn_id:0,player_count:0,reset:0,secretId:" ",playerNum:-1,isOnline:!1}},methods:{connectWebSocket(){this.webSocket=new WebSocket("wss://malefiz-wa-playserver.herokuapp.com/websocket"),this.webSocket.onopen=()=>{this.webSocket.send("Trying to connect to Server")},this.webSocket.onclose=()=>{this.processCommand("reset"," "),this.isOnline=this.webSocket.readyState===WebSocket.OPEN},this.webSocket.onerror=()=>{this.processCommand("reset"," "),this.isOnline=this.webSocket.readyState===WebSocket.OPEN},this.webSocket.onmessage=e=>{this.isOnline=this.webSocket.readyState===WebSocket.OPEN,"string"===typeof e.data&&(this.data=JSON.parse(e.data),1===this.data.reset&&(this.playerNum=-1,this.$swal({icon:"warning",text:"Game has been reset! (Player left or game master chose to)",title:"Error!",showCloseButton:"Nice"})),this.data.secretId.length>1&&(this.secretId=this.data.secretId),this.status=this.data.gameStatusID,this.gameMessage=this.data.string.gameMessage,this.atLeast2Players=this.data.string.atLeast2Players,this.players=this.data.string.players,this.currentplayer=this.data.string.currentplayer,this.diceRolled=this.data.string.diceRolled,this.gamewinner=this.data.string.gamewinner,this.turn_id=this.data.turn_id,this.player_count=this.data.player_count,this.reset=this.data.reset,this.checkWin(),this.updateGameBoard())}},processCmdWS(e,t){this.webSocket.send(e+"|"+t+"|"+this.secretId)},processCommand(e,t){this.postAjax("POST","https://malefiz-wa-playserver.herokuapp.com/command",{cmd:e,data:t,secretId:this.secretId.toString()},e).then((()=>{}))},postAjax(e,t,a){return ht().ajax({method:e,url:t,data:JSON.stringify(a),dataType:"json",contentType:"application/json",success:function(e){this.data=e},error:function(e){console.log("Error"),console.error(e)}})},checkWin(){if(this.status===this.stat_gamewinner){ht()("#backgroundAudio").get(0).pause();let e=ht()("#winAudio").get(0);e.loop=!0,e.play(),this.$swal({icon:"info",text:"Congratulations "+this.gamewinner+"!\nPress OK to start a new game.",title:"We have winner!",showCloseButton:"Nice"}).then((()=>{e.pause(),ht()("#backgroundAudio").get(0).play(),this.processCmdWS("reset"," ")}))}},updateGameBoard(){for(let e=0;e<342;++e){let t=this.data.rows[e].row,a=this.data.rows[e].col,s="field\\{"+t+"\\}_\\{"+a+"\\}",r=this.data.rows[e].cell;"InvalidCell"===r?ht()("#"+s).attr("src","./images/game/invalid.png"):"BlockedCell"===r?ht()("#"+s).attr("src","./images/game/blocked.png"):"FreeCell"===r||"SecureCell"===r?ht()("#"+s).attr("src","./images/game/free.png"):"GoalCell"===r?ht()("#"+s).attr("src","./images/game/goal.png"):"Start1Cell"===r?ht()("#"+s).attr("src","./images/game/start1.png"):"Start2Cell"===r?ht()("#"+s).attr("src","./images/game/start2.png"):"Start3Cell"===r?ht()("#"+s).attr("src","./images/game/start3.png"):"Start4Cell"===r?ht()("#"+s).attr("src","./images/game/start4.png"):"PlayerCell11"===r?ht()("#"+s).attr("src","./images/game/player11.png"):"PlayerCell12"===r?ht()("#"+s).attr("src","./images/game/player12.png"):"PlayerCell13"===r?ht()("#"+s).attr("src","./images/game/player13.png"):"PlayerCell14"===r?ht()("#"+s).attr("src","./images/game/player14.png"):"PlayerCell15"===r?ht()("#"+s).attr("src","./images/game/player15.png"):"PlayerCell21"===r?ht()("#"+s).attr("src","./images/game/player21.png"):"PlayerCell22"===r?ht()("#"+s).attr("src","./images/game/player22.png"):"PlayerCell23"===r?ht()("#"+s).attr("src","./images/game/player23.png"):"PlayerCell24"===r?ht()("#"+s).attr("src","./images/game/player24.png"):"PlayerCell25"===r?ht()("#"+s).attr("src","./images/game/player25.png"):"PlayerCell31"===r?ht()("#"+s).attr("src","./images/game/player31.png"):"PlayerCell32"===r?ht()("#"+s).attr("src","./images/game/player32.png"):"PlayerCell33"===r?ht()("#"+s).attr("src","./images/game/player33.png"):"PlayerCell34"===r?ht()("#"+s).attr("src","./images/game/player34.png"):"PlayerCell35"===r?ht()("#"+s).attr("src","./images/game/player35.png"):"PlayerCell41"===r?ht()("#"+s).attr("src","./images/game/player41.png"):"PlayerCell42"===r?ht()("#"+s).attr("src","./images/game/player42.png"):"PlayerCell43"===r?ht()("#"+s).attr("src","./images/game/player43.png"):"PlayerCell44"===r?ht()("#"+s).attr("src","./images/game/player44.png"):"PlayerCell45"===r&&ht()("#"+s).attr("src","./images/game/player45.png")}}}},ft={class:"col text-center"};function bt(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("div",ft,[(0,r._)("button",{type:"button",class:"btn btn-warning btn-block input-warning-button",onClick:t[0]||(t[0]=e=>i.parentMethod())}," Start Game")])}var wt={props:{method:{type:Function}},methods:{parentMethod(){this.method()}}};const vt=(0,n.Z)(wt,[["render",bt]]);var kt=vt;const _t={class:"row justify-content-center"},xt={class:"row m-1"},Ct={class:"col text-center"};function Pt(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("div",_t,[(0,r._)("div",xt,[(0,r._)("div",Ct,[(0,r._)("button",{type:"button",class:"btn btn-danger input-critical-button",onClick:t[0]||(t[0]=e=>i.parentMethod())}," Reset Game ↺ ")])])])}var zt={props:{method:{type:Function}},methods:{parentMethod(){this.method()}}};const Dt=(0,n.Z)(zt,[["render",Pt]]);var St=Dt;const Wt={class:"col"};function Mt(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("div",Wt,[(0,r._)("button",{type:"button",onClick:t[0]||(t[0]=e=>i.parentMethod()),class:"btn btn-success btn-block input-normal-button"}," Roll Dice ")])}var Tt={props:{method:{type:Function}},methods:{parentMethod(){this.method()}}};const jt=(0,n.Z)(Tt,[["render",Mt]]);var Gt=jt;function Nt(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("button",{type:"button",class:"btn btn-success input-normal-button",onClick:t[0]||(t[0]=e=>i.parentMethod())},(0,Se.zw)(a.num),1)}var qt={props:{method:{type:Function},num:{type:Number}},methods:{parentMethod(){this.method(this.num)}}};const It=(0,n.Z)(qt,[["render",Nt]]);var At=It;function Bt(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("button",{type:"button",class:"btn btn-success input-normal-button",onClick:t[0]||(t[0]=e=>i.parentMethod())},(0,Se.zw)(a.symbol),1)}var Ot={props:{method:{type:Function},direction:{type:String},symbol:{type:String}},methods:{parentMethod(){this.method(this.direction)}}};const Ft=(0,n.Z)(Ot,[["render",Bt]]);var Zt=Ft;function Ut(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("button",{type:"button",class:"btn btn-warning input-warning-button",onClick:t[0]||(t[0]=e=>i.parentMethod())}," Skip ")}var Et={props:{method:{type:Function}},methods:{parentMethod(){this.method()}}};const Ht=(0,n.Z)(Et,[["render",Ut]]);var Lt=Ht;const Rt=(0,r._)("input",{type:"text",class:"form-control text-center input-normal-button",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",id:"name"},null,-1);function Yt(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[Rt,(0,r._)("button",{type:"button",class:"btn btn-success input-normal-button",onClick:t[0]||(t[0]=e=>i.parentMethod())}," Join Game ")],64)}var Kt={props:{method:{type:Function}},methods:{parentMethod(){this.method()}}};const Qt=(0,n.Z)(Kt,[["render",Yt]]);var Vt=Qt,Jt={name:"InfoPanel",components:{AddPlayerForm:Vt,SkipButton:Lt,FigMoveButton:Zt,SelectFigButton:At,RollDiceButton:Gt,ResetButton:St,StartButton:kt},mixins:[yt],methods:{rollDice(){this.processCmdWS("rollDice"," ")},selectFig(e){this.processCmdWS("selectFig",e)},figMove(e){this.processCmdWS("figMove",e)},skipMove(){this.processCmdWS("skip"," ")},addPlayer(){const e=ht()("#name").get(0).value;""===e?this.$swal({icon:"warning",text:"Blank name is not allowed!",title:"Error!",showCloseButton:"Nice"}):(this.playerNum=this.player_count+1,this.processCmdWS("addPlayer",e))},startDiceAudio(){let e=ht()("#diceAudio").get(0);e.loop=!0,e.play()},startGame(){this.processCmdWS("start"," ")},resetGame(){this.$swal({buttons:!0,dangerMode:!0,icon:"warning",text:"Do you really want to reset the game?",title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Reset"}).then((e=>{e.isConfirmed&&this.processCmdWS("reset"," ")}))}},created(){this.connectWebSocket()}};const $t=(0,n.Z)(Jt,[["render",pt]]);var Xt=$t;const ea={class:"container p-0 m-1",id:"gamepanel"},ta=["id"];function aa(e,t,a,s,o,i){return(0,r.wg)(),(0,r.iD)("div",ea,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(18,((e,t)=>(0,r._)("div",{key:t,class:"row justify-content-center"},[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(19,((e,a)=>(0,r._)("div",{key:a,class:"col p-0 m-0 game-field-col"},[(0,r._)("img",{class:"game-field",id:"field{"+t+"}_{"+a+"}"},null,8,ta)]))),64))]))),64))])}var sa={name:"Gameboard-Game"};const ra=(0,n.Z)(sa,[["render",aa]]);var oa=ra,ia={name:"Malefiz-Game",components:{Navigation:O,Gameboard:oa,InfoPanel:Xt},data(){return{backendOnline:!1}},mounted(){ht().ajax({url:"https://malefiz-wa-playserver.herokuapp.com/status"}).done((()=>{this.backendOnline=!0}))}};const na=(0,n.Z)(ia,[["render",De]]);var la=na;A()(ia,"components",{QIcon:q.Z});const ca=[{path:"/",name:"Home",component:se},{path:"/about",name:"About",component:ve},{path:"/malefiz",name:"Malefiz",component:la}],ma=(0,m.p7)({history:(0,m.PO)("/malefiz-WA-Vue/"),routes:ca});var da=ma,ua=a(7729),pa=a.n(ua),ga=(a(800),a(8286)),ha={config:{},plugins:{}},ya=a(5563);(0,ya.z)("/malefiz-WA-Vue/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const fa=(0,s.ri)(c);fa.config.globalProperties.stat_welcome=0,fa.config.globalProperties.stat_loaded=1,fa.config.globalProperties.stat_saved=2,fa.config.globalProperties.stat_gamewinner=3,fa.config.globalProperties.stat_choosefig=4,fa.config.globalProperties.stat_idle=5,fa.config.globalProperties.stat_ready1=6,fa.config.globalProperties.stat_ready2=7,fa.config.globalProperties.stat_playing=13,fa.config.globalProperties.stat_moving=14,fa.config.globalProperties.stat_entername=15,fa.use(ga.Z,ha),fa.use(pa()),fa.use(da),fa.mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,o){if(!s){var i=1/0;for(m=0;m<e.length;m++){s=e[m][0],r=e[m][1],o=e[m][2];for(var n=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(n=!1,o<i&&(i=o));if(n){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[s,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var m=l(a)}for(t&&t(s);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(m)},s=self["webpackChunkmalefiz"]=self["webpackChunkmalefiz"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6526)}));s=a.O(s)})();
//# sourceMappingURL=app.50ecffb6.js.map