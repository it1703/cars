class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){
    datebasse.ref("/").update({
      gamestate:state
    });
   
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");

    car1 =createSprite(width / 2 - 50, heigth - 100);
    car1.addImage("car1",car1_img);
    car1.scale  = 0.07;

    car2 =createSprite(width / 2 +  100, heigth - 100);
    car2.addImage("car2",car2_img);
    car2.scale  = 0.07;
    cars = [car1, car2];
  }


  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if(allPlayers !== undefined){
      image(track,0,-heigth *5, width ,heigth*6);

      drawSprite();
    }
  }
}
