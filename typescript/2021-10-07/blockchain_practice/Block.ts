interface Block {
	index: number;
	timestamp: number;
	data: string;
	nonce: number;
	hash: string;
	previousBlockHash: string;
}