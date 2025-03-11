import { proxyActivities } from "@temporalio/workflow";
// Only import the activity types
import type * as activities from "./activities";

const { buildGameObject } = proxyActivities<typeof activities>({
	startToCloseTimeout: "1 minute"
});

/** A workflow that simply calls an activity */
export async function buildGame(): Promise<Object> {
	return await buildGameObject();
}

// // Add Workflow Definitions here.
// export async function YOUR_WORKFLOW(name: string): Promise<string> {
//     // Your workflow code here
//     return `Hello, ${name}!`;
//   }
