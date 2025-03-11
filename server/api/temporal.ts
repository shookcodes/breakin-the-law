import * as client from "../src/client";

export default defineEventHandler(async (): Promise<any> => {
	// return await worker.run();
	console.log("CLI", client);
	return client;
});
