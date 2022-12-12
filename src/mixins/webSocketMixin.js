import $ from "jquery";



export const webSocketMixin = {
    data: function () {
        return {
            webSocket: Object,
            data: {},
            status: 0, //status kann auch gelöscht und mit data.status aufgerufen werden. (Das wären offline daten.
            gameMessage: " ",
            atLeast2Players: " ",
            players: " ",
            currentplayer: " ",
            diceRolled: " ",
            gamewinner: " ",
            turn_id: 0,
            player_count: 0,
            reset: 0,
            secretId: " ",
            playerNum: -1,
            isOnline: false,
        }
    },
    methods: {
        connectWebSocket() {
            this.webSocket = new WebSocket("ws://localhost:9000/websocket")

            this.webSocket.onopen = () => {
                this.webSocket.send("Trying to connect to Server");
            }

            this.webSocket.onclose = () => {
                this.processCommand("reset", " ")
                this.isOnline = false;
            };

            this.webSocket.onerror = () => {
                this.isOnline = false;
            };

            this.webSocket.onmessage = (event) => {
                this.isOnline = true;
                if (typeof event.data === "string") {
                    this.data = JSON.parse(event.data)

                    if (this.data.reset === 1) {
                        this.playerNum = -1
                        this.$swal({
                            icon: "warning",
                            text: "Game has been reset! (Player left or game master chose to)",
                            title: "Error!",
                            showCloseButton: "Nice",
                        })
                    }
                    if (this.data.secretId.length > 1) {
                        this.secretId = this.data.secretId
                    }
                    this.status = this.data.gameStatusID
                    this.gameMessage =  this.data.string.gameMessage
                    this.atLeast2Players = this.data.string.atLeast2Players
                    this.players = this.data.string.players
                    this.currentplayer = this.data.string.currentplayer
                    this.diceRolled = this.data.string.diceRolled
                    this.gamewinner = this.data.string.gamewinner
                    this.turn_id = this.data.turn_id
                    this.player_count = this.data.player_count
                    this.reset = this.data.reset
                    this.checkWin()
                    this.updateGameBoard()
                }
            };
        },
        processCmdWS(cmd, data) {
            this.webSocket.send(cmd + "|" + data + "|" + this.secretId)
        },
        processCommand(cmd, returnData) {
            this.post("POST", "/command", {"cmd": cmd, "data": returnData, "secretId": this.secretId.toString()}, cmd).then(() => {
            })
        },
        checkWin() {
            if (this.status === this.stat_gamewinner) {
                $('#backgroundAudio').get(0).pause();
                let audio = $('#winAudio').get(0);
                audio.loop = true;
                audio.play();
                this.$swal({
                    icon: "info",
                    text: "Congratulations " + this.gamewinner + "!\nPress OK to start a new game.",
                    title: "We have winner!",
                    showCloseButton: "Nice",
                })
                    .then(() => {
                        audio.pause()
                        $('#backgroundAudio').get(0).play()
                        this.processCmdWS("reset", " ")
                    });
            }
        },
        updateGameBoard() {
            for (let i = 0; i < (18 * 19); ++i) {
                let row = this.data.rows[i].row
                let col = this.data.rows[i].col
                let fieldID = "field\\{" + row + "\\}_\\{" + col + "\\}" // \\ für escape von jquery
                let cellString = this.data.rows[i].cell

                if (cellString === "InvalidCell") {
                    $('#' + fieldID).attr("src", "./images/game/invalid.png");
                } else if (cellString === "BlockedCell") {
                    $('#' + fieldID).attr("src", "./images/game/blocked.png");
                } else if (cellString === "FreeCell") {
                    $('#' + fieldID).attr("src", "./images/game/free.png");
                } else if (cellString === "SecureCell") {
                    $('#' + fieldID).attr("src", "./images/game/free.png");
                } else if (cellString === "GoalCell") {
                    $('#' + fieldID).attr("src", "./images/game/goal.png");
                } else if (cellString === "Start1Cell") {
                    $('#' + fieldID).attr("src", "./images/game/start1.png");
                } else if (cellString === "Start2Cell") {
                    $('#' + fieldID).attr("src", "./images/game/start2.png");
                } else if (cellString === "Start3Cell") {
                    $('#' + fieldID).attr("src", "./images/game/start3.png");
                } else if (cellString === "Start4Cell") {
                    $('#' + fieldID).attr("src", "./images/game/start4.png");
                } else if (cellString === "PlayerCell11") {
                    $('#' + fieldID).attr("src", "./images/game/player11.png");
                } else if (cellString === "PlayerCell12") {
                    $('#' + fieldID).attr("src", "./images/game/player12.png");
                } else if (cellString === "PlayerCell13") {
                    $('#' + fieldID).attr("src", "./images/game/player13.png");
                } else if (cellString === "PlayerCell14") {
                    $('#' + fieldID).attr("src", "./images/game/player14.png");
                } else if (cellString === "PlayerCell15") {
                    $('#' + fieldID).attr("src", "./images/game/player15.png");
                } else if (cellString === "PlayerCell21") {
                    $('#' + fieldID).attr("src", "./images/game/player21.png");
                } else if (cellString === "PlayerCell22") {
                    $('#' + fieldID).attr("src", "./images/game/player22.png");
                } else if (cellString === "PlayerCell23") {
                    $('#' + fieldID).attr("src", "./images/game/player23.png");
                } else if (cellString === "PlayerCell24") {
                    $('#' + fieldID).attr("src", "./images/game/player24.png");
                } else if (cellString === "PlayerCell25") {
                    $('#' + fieldID).attr("src", "./images/game/player25.png");
                } else if (cellString === "PlayerCell31") {
                    $('#' + fieldID).attr("src", "./images/game/player31.png");
                } else if (cellString === "PlayerCell32") {
                    $('#' + fieldID).attr("src", "./images/game/player32.png");
                } else if (cellString === "PlayerCell33") {
                    $('#' + fieldID).attr("src", "./images/game/player33.png");
                } else if (cellString === "PlayerCell34") {
                    $('#' + fieldID).attr("src", "./images/game/player34.png");
                } else if (cellString === "PlayerCell35") {
                    $('#' + fieldID).attr("src", "./images/game/player35.png");
                } else if (cellString === "PlayerCell41") {
                    $('#' + fieldID).attr("src", "./images/game/player41.png");
                } else if (cellString === "PlayerCell42") {
                    $('#' + fieldID).attr("src", "./images/game/player42.png");
                } else if (cellString === "PlayerCell43") {
                    $('#' + fieldID).attr("src", "./images/game/player43.png");
                } else if (cellString === "PlayerCell44") {
                    $('#' + fieldID).attr("src", "./images/game/player44.png");
                } else if (cellString === "PlayerCell45") {
                    $('#' + fieldID).attr("src", "./images/game/player45.png");
                }
            }
        },
    }
}