/**
 * Author: Hang Li
 * Student Number: 300993981
 * Creation Date: Feb 22, 2020
 * Game App Description: The Dice Roller - Midterm
 * Revision History: available in GitHub
 */
module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _background: objects.Button;
    private _diceOne: objects.Button;
    private _diceTwo: objects.Button;
    private _diceOneLabel: objects.Label;
    private _diceTwoLabel: objects.Label;
    private _rollButton: objects.Button;
    private _nextButton: objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS
    /**
     * role method which generates the rolling result of 2 dices
     * assigns the correct image to corresponding location
     * updates the label with rolling result.
     */

    private _roll() {
      let outcome = [0, 0];
      for (let dice = 0; dice < 2; dice++) {
        outcome[dice] = Math.floor(util.Mathf.RandomRange(1, 6));
      }

      // get the rolling result of dice one
      // reset the images on board
      // update the label
      let resultOne = outcome[0];
      if (resultOne <= 6 && resultOne >= 1) {
        this.removeChild(this._diceOne);
        this._diceOne = new objects.Button(
          config.Game.ASSETS.getResult("diceResult" + resultOne),
          200,
          150,
          true
        );
        this.addChild(this._diceOne);
        this._diceOneLabel.setText(resultOne + "");
      }

      // get the rolling result of dice two
      // reset the images on board
      // update the label
      let resultTwo = outcome[1];
      if (resultTwo <= 6 && resultTwo >= 1) {
        this.removeChild(this._diceTwo);
        this._diceTwo = new objects.Button(
          config.Game.ASSETS.getResult("diceResult" + resultTwo),
          450,
          150,
          true
        );
        this.addChild(this._diceTwo);
        this._diceTwoLabel.setText(resultTwo + "");
      }
    }

    // PUBLIC METHODS

    //initialize and instatiate
    public Start(): void {
      this._background = new objects.Button(
        config.Game.ASSETS.getResult("diceBackground"),
        0,
        0,
        false
      );
      this._diceOne = new objects.Button(
        config.Game.ASSETS.getResult("blankDice"),
        200,
        150,
        true
      );
      this._diceTwo = new objects.Button(
        config.Game.ASSETS.getResult("blankDice"),
        450,
        150,
        true
      );
      this._diceOneLabel = new objects.Label(
        " ",
        "28px",
        "Consolas",
        "black",
        200,
        280,
        true
      );
      this._diceTwoLabel = new objects.Label(
        " ",
        "28px",
        "Consolas",
        "black",
        450,
        280,
        true
      );
      this._rollButton = new objects.Button(
        config.Game.ASSETS.getResult("rollButton"),
        230,
        400,
        true
      );
      this._nextButton = new objects.Button(
        config.Game.ASSETS.getResult("nextButton"),
        420,
        400,
        true
      );

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._background);
      this.addChild(this._diceOne);
      this.addChild(this._diceTwo);
      this.addChild(this._diceOneLabel);
      this.addChild(this._diceTwoLabel);
      this.addChild(this._rollButton);
      this.addChild(this._nextButton);

      this._rollButton.HoverOn();
      this._rollButton.addEventListener("click", () => {
        this._roll();
      });

      this._nextButton.HoverOn();
      this._nextButton.addEventListener("click", () => {
        config.Game.SCENE = scenes.State.SECONDPLAY;
      });
    }
  }
}
