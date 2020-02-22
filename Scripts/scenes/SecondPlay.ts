/**
 * Author: Hang Li
 * Student Number: 300993981
 * Creation Date: Feb 22, 2020
 * Game App Description: The Dice Roller - Midterm
 * Revision History: available in GitHub
 */
module scenes {
  export class SecondPlay extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _background: objects.Button;
    private _diceOne: objects.Button;
    private _diceTwo: objects.Button;
    private _diceThree: objects.Button;
    private _diceFour: objects.Button;
    private _diceOneLabel: objects.Label;
    private _diceTwoLabel: objects.Label;
    private _diceThreeLabel: objects.Label;
    private _diceFourLabel: objects.Label;
    private _titleLabel: objects.Label;
    private _resultLabel: objects.Label;
    private _rollButton: objects.Button;
    private _backButton: objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS
    /**
     * role method which generates the rolling result of 4 dices
     * assigns the correct image to corresponding location
     * updates the labels with rolling result.
     */

    private _roll() {
      let outcome = [0, 0, 0, 0];
      for (let dice = 0; dice < 4; dice++) {
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
          140,
          150,
          true
        );
        this._diceOne.CustomizeSize(100, 100);
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
          260,
          150,
          true
        );
        this._diceTwo.CustomizeSize(100, 100);
        this.addChild(this._diceTwo);
        this._diceTwoLabel.setText(resultTwo + "");
      }

      // get the rolling result of dice three
      // reset the images on board
      // update the label
      let resultThree = outcome[2];
      if (resultThree <= 6 && resultThree >= 1) {
        this.removeChild(this._diceThree);
        this._diceThree = new objects.Button(
          config.Game.ASSETS.getResult("diceResult" + resultThree),
          380,
          150,
          true
        );
        this._diceThree.CustomizeSize(100, 100);
        this.addChild(this._diceThree);
        this._diceThreeLabel.setText(resultThree + "");
      }

      // get the rolling result of dice four
      // reset the images on board
      // update the label
      let resultFour = outcome[3];
      if (resultFour <= 6 && resultFour >= 1) {
        this.removeChild(this._diceFour);
        this._diceFour = new objects.Button(
          config.Game.ASSETS.getResult("diceResult" + resultThree),
          500,
          150,
          true
        );
        this._diceFour.CustomizeSize(100, 100);
        this.addChild(this._diceFour);
        this._diceFourLabel.setText(resultFour + "");
      }

      // update the result label
      // find the minimum, and add all together then mines the minimum
      let min = outcome[0];
      for (let index = 1; index < 4; index++) {
        if (outcome[index] < min) {
          min = outcome[index];
        }
      }
      let result = resultOne + resultTwo + resultThree + resultFour - min;
      this._resultLabel.setText("Result " + result);
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
        140,
        150,
        true
      );
      this._diceOne.CustomizeSize(100, 100);
      this._diceTwo = new objects.Button(
        config.Game.ASSETS.getResult("blankDice"),
        260,
        150,
        true
      );
      this._diceTwo.CustomizeSize(100, 100);
      this._diceThree = new objects.Button(
        config.Game.ASSETS.getResult("blankDice"),
        380,
        150,
        true
      );
      this._diceThree.CustomizeSize(100, 100);
      this._diceFour = new objects.Button(
        config.Game.ASSETS.getResult("blankDice"),
        500,
        150,
        true
      );
      this._diceFour.CustomizeSize(100, 100);
      this._diceOneLabel = new objects.Label(
        "  ",
        "28px",
        "Consolas",
        "black",
        140,
        230,
        true
      );
      this._diceTwoLabel = new objects.Label(
        " ",
        "28px",
        "Consolas",
        "black",
        260,
        230,
        true
      );
      this._diceThreeLabel = new objects.Label(
        " ",
        "28px",
        "Consolas",
        "black",
        380,
        230,
        true
      );
      this._diceFourLabel = new objects.Label(
        " ",
        "28px",
        "Consolas",
        "black",
        500,
        230,
        true
      );
      this._titleLabel = new objects.Label(
        "Roll 4D6",
        "34px",
        "Consolas",
        "black",
        300,
        50,
        true
      );
      this._resultLabel = new objects.Label(
        " ",
        "30px",
        "Consolas",
        "black",
        300,
        280,
        true
      );
      this._rollButton = new objects.Button(
        config.Game.ASSETS.getResult("rollButton"),
        230,
        400,
        true
      );
      this._backButton = new objects.Button(
        config.Game.ASSETS.getResult("backButton"),
        420,
        400,
        true
      );
      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._background);
      this.addChild(this._titleLabel);
      this.addChild(this._diceOne);
      this.addChild(this._diceTwo);
      this.addChild(this._diceThree);
      this.addChild(this._diceFour);
      this.addChild(this._diceOneLabel);
      this.addChild(this._diceTwoLabel);
      this.addChild(this._diceThreeLabel);
      this.addChild(this._diceFourLabel);
      this.addChild(this._resultLabel);
      this.addChild(this._rollButton);
      this.addChild(this._backButton);

      this._rollButton.HoverOn();
      this._rollButton.addEventListener("click", () => {
        this._roll();
      });

      this._backButton.HoverOn();
      this._backButton.addEventListener("click", () => {
        config.Game.SCENE = scenes.State.PLAY;
      });
    }
  }
}
