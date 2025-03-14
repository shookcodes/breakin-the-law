// @@@SNIPSTART typescript-hello-client
import { Client, Connection } from "@temporalio/client";
import { nanoid } from "nanoid";
import { TASK_QUEUE_NAME } from "./shared";

// import your workflow
import { buildGame } from "./workflows";

async function run() {
	// Connect to the default Server location
	const connection = await Connection.connect({
		address: "146.190.51.244:7233"
	});
	// In production, pass options to configure TLS and other settings:
	// {
	//   address: 'foo.bar.tmprl.cloud',
	//   tls: {}
	// }
	console.log("HERE CLI");

	const client = new Client({
		connection
		// namespace: 'foo.bar', // connects to 'default' namespace if not specified
	});

	const handle = await client.workflow.start(buildGame, {
		taskQueue: TASK_QUEUE_NAME,
		// type inference works! args: [name: string]
		// args: ['Temporal'],
		// in practice, use a meaningful business ID, like customerId or transactionId
		workflowId: "workflow-" + nanoid()
	});
	console.log(`Started workflow ${handle.workflowId}`);

	// optional: wait for client result
	console.log(await handle.result());
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
// @@@SNIPEND

export default run;
