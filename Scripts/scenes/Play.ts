module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _diceOne: objects.Button;
    private _diceTwo: objects.Button;
    private _diceOneLabel: objects.Label;
    private _diceTwoLabel: objects.Label;
    private _rollButton: objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();
      this._diceOne = new objects.Button(
        config.Game.ASSETS.getResult("blankDice")
      );
      this._diceTwo = new objects.Button(
        config.Game.ASSETS.getResult("blankDice")
      );
      this._diceOneLabel = new objects.Label(" ");
      this._diceTwoLabel = new objects.Label(" ");
      this._rollButton = new objects.Button(
        config.Game.ASSETS.getResult("rollButton")
      );
      this.Start();
    }

    // PRIVATE METHODS

    // PUBLIC METHODS

    //initialize and instatiate
    public Start(): void {
      this.addChild(this._diceOne);
      this.addChild(this._diceTwo);
      this.addChild(this._diceOneLabel);
      this.addChild(this._diceTwoLabel);

      this.Main();
    }

    public Update(): void {}

    public Main(): void {}
  }
}
