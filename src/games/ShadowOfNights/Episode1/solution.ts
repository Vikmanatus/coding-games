/**
 * Type used to describe coodinates
 */
type Coordinates = {
  xPosition: number;
  yPosition: number;
};

/**
 * Union type describing allowed values for directions given by CodinGame inputs
 */
type Direction = "U" | "UR" | "R" | "DR" | "D" | "DL" | "L" | "UL";

const GAME_LOOP = true;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs: string[] = readline().split(" ");

/**
 * Constant representing the width of the building
 */
const buildingWidth: number = parseInt(inputs[0]);

/**
 * Constant representing the height of the building
 */
const buildingHeight: number = parseInt(inputs[1]); // height of the building.

/**
 * Constant reprensenting the maximum number of turns remaining to find the bomb
 */
const MAX_NUMBER_OF_TURNS: number = parseInt(readline()); // maximum number of turns before game over.

var inputs: string[] = readline().split(" ");

/**
 * Initial position of Batman for X axis
 */
const xPosition: number = parseInt(inputs[0]);

/**
 * Initial position  of Batman for Y axis
 */
const yPosition: number = parseInt(inputs[1]);

console.error("xPosition", xPosition);
console.error("yPosition", yPosition);

console.error("MAX_NUMBER_OF_TURNS", MAX_NUMBER_OF_TURNS);

console.error("buildingWidth", buildingWidth);
console.error("buildingHeight", buildingHeight);

/**
 * Variable used to store batman last X position
 */
let batmanXPosition = xPosition;

/**
 * Variable used to store Batman last Y poistion
 */
let batmanYPosition = yPosition;

const widthMultiplier = 0;

/**
 * Array who store checked positions with their directions
 */
const checkedPositions: number[] = [];

const heightMultiplier = Math.ceil(buildingHeight / MAX_NUMBER_OF_TURNS);

console.error("heightMultiplier: ", heightMultiplier);
console.error("TEST POSOTION: ", batmanYPosition * heightMultiplier);

/**
 * Function used to parse the given direction into coordinates containing the next position for Batman to jump
 * @param playerXPosition - Current X position
 * @param playerYPosition - Current Y position
 * @param direction - The given direction to go
 * @returns A direction indicating the next coordinates to go
 */
const parseDirection = (
  playerXPosition: number,
  playerYPosition: number,
  direction: Direction,
): Coordinates => {
  switch (direction) {
    case "U":
      return {
        xPosition: playerXPosition,
        yPosition: playerYPosition - heightMultiplier,
      };
    case "UR":
      return {
        xPosition: playerXPosition + heightMultiplier,
        yPosition: playerYPosition - heightMultiplier,
      };
    case "R":
      return {
        xPosition: playerXPosition + heightMultiplier,
        yPosition: playerYPosition,
      };
    case "DR":
      return {
        xPosition: playerXPosition + heightMultiplier,
        yPosition: playerYPosition + heightMultiplier,
      };
    case "D":
      return {
        xPosition: playerXPosition,
        yPosition: playerYPosition + heightMultiplier,
      };
    case "DL":
      return {
        xPosition: playerXPosition - heightMultiplier,
        yPosition: playerYPosition + heightMultiplier,
      };
    case "L":
      return {
        xPosition: playerXPosition - heightMultiplier,
        yPosition: playerYPosition,
      };
    case "UL":
      return {
        xPosition: playerXPosition - heightMultiplier,
        yPosition: playerYPosition - heightMultiplier,
      };
  }
};

/**
 * Game loop
 */
while (GAME_LOOP) {
  /**
   * Direction of the bombs (U, UR, R, DR, D, DL, L or UL)
   */
  const bombDir = readline() as Direction;

  console.error(bombDir);
  console.error(xPosition);
  console.error(yPosition);

  const nextWindowLocation = parseDirection(
    batmanXPosition,
    batmanYPosition,
    bombDir,
  );

  /**
   * Updating Batman's position
   */
  batmanXPosition = nextWindowLocation.xPosition;
  batmanYPosition = nextWindowLocation.yPosition;

  console.error(nextWindowLocation);

  /**
   * Response for the puzzle
   * Indicates Batman's next location
   */
  console.log(
    `${nextWindowLocation.xPosition} ${nextWindowLocation.yPosition}`,
  );
}
