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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this._background = new objects.Button(config.Game.ASSETS.getResult("diceBackground"), 0, 0, false);
            _this._diceOne = new objects.Button(config.Game.ASSETS.getResult("blankDice"), 200, 150, true);
            _this._diceTwo = new objects.Button(config.Game.ASSETS.getResult("blankDice"), 450, 150, true);
            _this._diceOneLabel = new objects.Label(" ", "28px", "Consolas", "black", 200, 280, true);
            _this._diceTwoLabel = new objects.Label(" ", "28px", "Consolas", "black", 450, 280, true);
            _this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 300, 400, true);
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        /**
         * role method which generates the rolling result of 2 dices
         * assigns the correct image to corresponding location
         * updates the label with rolling result.
         */
        Play.prototype._roll = function () {
            var outcome = [0, 0];
            for (var dice = 0; dice < 2; dice++) {
                outcome[dice] = Math.floor(util.Mathf.RandomRange(1, 6));
            }
            // get the rolling result of dice one
            // reset the images on board
            // update the label
            var resultOne = outcome[0];
            if (resultOne <= 6 && resultOne >= 1) {
                this.removeChild(this._diceOne);
                this._diceOne = new objects.Button(config.Game.ASSETS.getResult("diceResult" + resultOne), 200, 150, true);
                this.addChild(this._diceOne);
                this._diceOneLabel.setText(resultOne + "");
            }
            // get the rolling result of dice two
            // reset the images on board
            // update the label
            var resultTwo = outcome[1];
            if (resultTwo <= 6 && resultTwo >= 1) {
                this.removeChild(this._diceTwo);
                this._diceTwo = new objects.Button(config.Game.ASSETS.getResult("diceResult" + resultTwo), 450, 150, true);
                this.addChild(this._diceTwo);
                this._diceTwoLabel.setText(resultTwo + "");
            }
        };
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.addChild(this._background);
            this.addChild(this._diceOne);
            this.addChild(this._diceTwo);
            this.addChild(this._diceOneLabel);
            this.addChild(this._diceTwoLabel);
            this.addChild(this._rollButton);
            this.Main();
        };
        Play.prototype.Update = function () { };
        Play.prototype.Main = function () {
            var _this = this;
            this._rollButton.HoverOn();
            this._rollButton.addEventListener("click", function () {
                _this._roll();
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map