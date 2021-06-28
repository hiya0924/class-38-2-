class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
update(){
var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
    
}
// player1 = new Player()
// player1.update()
//Player().getPlayerInfo()
static getPlayerInfo(){
  var playerRefInfo = database.ref('players');
  playerRefInfo.on("value",(data)=>{
    allPlayers = data.val();
  })
}

}