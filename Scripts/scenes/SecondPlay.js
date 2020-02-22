"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Author: Hang Li
 * Student Number: 300993981
 * Creation Date: Feb 22, 2020
 * Game App Description: The Dice Roller - Midterm
 * Revision History: available in GitHub
 */
var scenes;
(function (scenes) {
    var SecondPlay = /** @class */ (function (_super) {
        __extends(SecondPlay, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function SecondPlay() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        /**
         * role method which generates the rolling result of 4 dices
         * assigns the correct image to corresponding location
         * updates the labels with rolling result.
         */
        SecondPlay.prototype._roll = function () {
            var outcome = [0, 0, 0, 0];
            for (var dice = 0; dice < 4; dice++) {
                outcome[dice] = Math.floor(util.Mathf.RandomRange(1, 6));
            }
            // get the rolling result of dice one
            // reset the images on board
            // update the label
            var resultOne = outcome[0];
            if (resultOne <= 6 && resultOne >= 1) {
                this.removeChild(this._diceOne);
                this._diceOne = new objects.Button(config.Game.ASSETS.getResult("diceResult" + resultOne), 140, 150, true);
                this._diceOne.CustomizeSize(100, 100);
                this.addChild(this._diceOne);
                this._diceOneLabel.setText(resultOne + "");
            }
            // get the rolling result of dice two
            // reset the images on board
            // update the label
            var resultTwo = outcome[1];
            if (resultTwo <= 6 && resultTwo >= 1) {
                this.removeChild(this._diceTwo);
                this._diceTwo = new objects.Button(config.Game.ASSETS.getResult("diceResult" + resultTwo), 260, 150, true);
                this._diceTwo.CustomizeSize(100, 100);
                this.addChild(this._diceTwo);
                this._diceTwoLabel.setText(resultTwo + "");
            }
            // get the rolling result of dice three
            // reset the images on board
            // update the label
            var resultThree = outcome[2];
            if (resultThree <= 6 && resultThree >= 1) {
                this.removeChild(this._diceThree);
                this._diceThree = new objects.Button(config.Game.ASSETS.getResult("diceResult" + resultThree), 380, 150, true);
                this._diceThree.CustomizeSize(100, 100);
                this.addChild(this._diceThree);
                this._diceThreeLabel.setText(resultThree + "");
            }
            // get the rolling result of dice four
            // reset the images on board
            // update the label
            var resultFour = outcome[3];
            if (resultFour <= 6 && resultFour >= 1) {
                this.removeChild(this._diceFour);
                this._diceFour = new objects.Button(config.Game.ASSETS.getResult("diceResult" + resultThree), 500, 150, true);
                this._diceFour.CustomizeSize(100, 100);
                this.addChild(this._diceFour);
                this._diceFourLabel.setText(resultFour + "");
            }
            // update the result label
            // find the minimum, and add all together then mines the minimum
            var min = outcome[0];
            for (var index = 1; index < 4; index++) {
                if (outcome[index] < min) {
                    min = outcome[index];
                }
            }
            var result = resultOne + resultTwo + resultThree + resultFour - min;
            this._resultLabel.setText("Result " + result);
        };
        // PUBLIC METHODS
        //initialize and instatiate
        SecondPlay.prototype.Start = function () {
            this._background = new objects.Button(config.Game.ASSETS.getResult("diceBackground"), 0, 0, false);
            this._diceOne = new objects.Button(config.Game.ASSETS.getResult("blankDice"), 140, 150, true);
            this._diceOne.CustomizeSize(100, 100);
            this._diceTwo = new objects.Button(config.Game.ASSETS.getResult("blankDice"), 260, 150, true);
            this._diceTwo.CustomizeSize(100, 100);
            this._diceThree = new objects.Button(config.Game.ASSETS.getResult("blankDice"), 380, 150, true);
            this._diceThree.CustomizeSize(100, 100);
            this._diceFour = new objects.Button(config.Game.ASSETS.getResult("blankDice"), 500, 150, true);
            this._diceFour.CustomizeSize(100, 100);
            this._diceOneLabel = new objects.Label("  ", "28px", "Consolas", "black", 140, 230, true);
            this._diceTwoLabel = new objects.Label(" ", "28px", "Consolas", "black", 260, 230, true);
            this._diceThreeLabel = new objects.Label(" ", "28px", "Consolas", "black", 380, 230, true);
            this._diceFourLabel = new objects.Label(" ", "28px", "Consolas", "black", 500, 230, true);
            this._titleLabel = new objects.Label("Roll 4D6", "34px", "Consolas", "black", 300, 50, true);
            this._resultLabel = new objects.Label(" ", "30px", "Consolas", "black", 300, 280, true);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 230, 400, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 420, 400, true);
            this.Main();
        };
        SecondPlay.prototype.Update = function () { };
        SecondPlay.prototype.Main = function () {
            var _this = this;
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
            this._rollButton.addEventListener("click", function () {
                _this._roll();
            });
            this._backButton.HoverOn();
            this._backButton.addEventListener("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return SecondPlay;
    }(objects.Scene));
    scenes.SecondPlay = SecondPlay;
})(scenes || (scenes = {}));
//# sourceMappingURL=SecondPlay.js.map