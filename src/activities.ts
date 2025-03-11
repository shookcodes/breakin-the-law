import type { Game } from "./shared";
// Add Activity Definitions here.
// export async function YOUR_ACTIVITY(name: string): Promise<string> {
//     return `Hello, ${name}!`;
//   }

// export async function greet(name: string): Promise<string> {
//     return `Hello, ${name}!`;
//   }

  export async function buildGameObject(): Promise<Game> {
    
    const numbers: number[] = [];
    for (let i = 0; i < 13; i++) {
        numbers.push(Math.floor(Math.random() * 10)); // Generates a random integer between 0 and 9
    }
    const gameNumber =  parseInt(numbers.join(''));
    
    const Game: Game = {
        gameID: gameNumber,
        player1: '',
        player2: '',
        player1Steal: [0],
        player2Steal: [0],
        player1Guess: [0],
        player2Guess: [0],
        
      };
    
    return Game;
  }