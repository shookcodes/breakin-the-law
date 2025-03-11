import * as worker from "~/src/worker";

export default defineEventHandler(async (): Promise<any> => {
	return await worker.run();
});
