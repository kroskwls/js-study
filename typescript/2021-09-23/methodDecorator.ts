function logTrade(target, key, descriptor) {
	const originalCode = descriptor.value;
	descriptor.value = function () {
		console.log(`Invoked ${key} providing:`, arguments);
		return originalCode.apply(this, arguments);
	};
	return descriptor;
}

class Trade {
	@logTrade
	placeOrder(stockName: string, quantity: number, operation: string, tradedID: number) {
	}
}

const trade = new Trade();
trade.placeOrder('IBM', 100, 'Buy', 123);