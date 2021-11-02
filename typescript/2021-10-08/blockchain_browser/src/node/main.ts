import { Blockchain } from '../lib/bc_transactions';

(async function main(): Promise<void> {
	console.log('Initilizing the blockchain, create the genesis block...');

	const bc = new Blockchain();
	await bc.createGenesisBlock();

	bc.createTransaction({ sender: 'John', recipient: 'Kate', amout: 50 });
	bc.createTransaction({ sender: 'Kate', recipient: 'Mike', amout: 10 });

	await bc.minePendingTransactions();

	bc.createTransaction({ sender: 'Alex', recipient: 'Rosa', amout: 15 });
	bc.createTransaction({ sender: 'Gina', recipient: 'Rick', amout: 60 });

	await bc.minePendingTransactions();

	console.log(JSON.stringify(bc, null, 2));
})();