/**
 * Author: Hang Li
 * Student Number: 300993981
 * Creation Date: Feb 22, 2020
 * Game App Description: The Dice Roller - Midterm
 * Revision History: available in GitHub
 */
module scenes {
  export class Start extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _background: objects.Button;
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start(): void {
      //instantiate a new Text object
      this._welcomeLabel = new objects.Label(
        "  COMP397 - Midterm Test \n\n     Author: Hang Li \n\nStudent Number: 300993981",
        "40px",
        "Consolas",
        "#000000",
        320,
        180,
        true
      );
      // buttons
      this._background = new objects.Button(
        config.Game.ASSETS.getResult("diceBackground"),
        0,
        0,
        false
      );
      this._startButton = new objects.Button(
        config.Game.ASSETS.getResult("startButton"),
        320,
        430,
        true
      );

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._background);
      this.addChild(this._welcomeLabel);
      this.addChild(this._startButton);

      this._startButton.HoverOn();
      this._startButton.on("click", () => {
        config.Game.SCENE = scenes.State.PLAY;
      });
    }
  }
}
