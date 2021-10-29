import * as fs_bad from "fs-extra";
// @ts-ignore
const fs = fs_bad.default;



type FSPromise = {
	promise: Promise<any>,
	resolve: Function,
	reject: Function
};

type FSTask = {
	promise: FSPromise,
	operation: string,
	path: string,
	protectFile: boolean,
	data?: any[]
};



function createFSPromise(): FSPromise {
	let resolve, reject;

	const promise = new Promise((pResolve, pReject) => {
		resolve = pResolve;
		reject = pReject;
	});

	return {
		promise,
		// @ts-ignore -- yes, it's fine
		resolve,
		// @ts-ignore
		reject
	}
}



export default class FSManager {
	private static queue: FSTask[] = [];
	private static operating: boolean = false;

	private static protectedFiles: string[] = [];
	private static haltedQueue: FSTask[] = []; // holds tasks that are waiting to write to a protected file

	// if the read is intended to have a write follow up, protect the file until write is called with id
	static async read(what: string, writeIntent: boolean): Promise<void> {
		// const promise = new Promise((res, rej) => {});
		// const intent = (writeIntent !== "0") ? parseInt(writeIntent) : 0;

		// const args: FSManagerObject = [promise, "read", what];
		// if(intent) args.push(intent); // this is complete ass but ok

		// this.queue.push(args);


		// if(this.queue.length === 1 && !this.operating) {
		// 	this.process();
		// }

		// return this.queue[this.queue.length - 1][0];

		const promise = createFSPromise();

		this.queue.push(<FSTask>{
			promise,
			operation: "read",
			path: what,
			protectFile: writeIntent
		});

		if(this.queue.length === 1 && !this.operating) {
			this.process();
		}

		return this.queue[this.queue.length - 1].promise.promise;
	}

	private static async process(): Promise<void> {
		// this.operating = true;

		// const object = this.queue.shift();

		// const [promise, operation, ...data] = object!;

		// if(!fs[operation]) {
		// 	Promise.reject();
		// 	return;
		// }
	}
}

/*
fsmanager.push(read call)
.then(data)

const data = await fsmanager.read(file) ?

await fsmanager.write(data);


does this work?

(file)
const n = await fsmanager.promise(data);

(promise)
queue.push(data);

(queue resolver)
data.resolve();

(file)
// continues


*/
