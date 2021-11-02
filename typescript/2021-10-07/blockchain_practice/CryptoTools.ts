import * as crypto from 'crypto-js';
let nonce = 0;

async function generateHash(input: string): Promise<string> {
	const hashBuffer = await crypto.SHA256(input);
	const hashHex = crypto.enc.Hex.stringify(hashBuffer);
	return hashHex;
}

async function calculateHashWithNonce(nonce: number): Promise<string> {
	const data = 'Hello World' + nonce;
	return generateHash(data);
}

async function mine(difficulty: number): Promise<void> {
	let hash: string;
	let str = '0'.repeat(difficulty);
	do {
		hash = await calculateHashWithNonce(++nonce);
	} while(hash.startsWith(str) === false);
	console.log(`Hash: ${hash}, nonce: ${nonce}`);
}

mine(4);