export const TASK_QUEUE_NAME = 'your-task-queue-name';

export interface Game{
    gameID: Number;
    player1: String;
    player2: String;
    player1Steal: [Number];
    player2Steal: [Number];
    player1Guess: [Number];
    player2Guess: [Number];
}