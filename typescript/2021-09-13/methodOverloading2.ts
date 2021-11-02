interface Product {
	id: number;
	desc: string;
}

class ProductService2 {
	// 메소드 오버로딩
	getProducts(desc: string): Product[];
	getProducts(id: number): Product;

	getProducts(product: number | string): Product[] | Product {
		let result: Product[] | Product;

		if (typeof product === 'number') {
			console.log(`Getting the product info for id ${product}`);
			result = { id: product, desc: 'great product' };
		} else if (typeof product === 'string') {
			console.log(`Getting product with description ${product}`);
			result = [
				{ id: 123, desc: 'blue jeans' },
				{ id: 789, desc: 'blue jeans' }
			];
		} else {
			result = {
				id: -1,
				desc: 'Error: getProduscts() accept only number or string as orgs'
			};
		}

		return result;
	}
}
const prodService2 = new ProductService2();
console.log(prodService2.getProducts(123));
console.log(prodService2.getProducts('blue jeans'));
// 유니온 연산자를 사용하여 함수를 선언해도 사용하는데는 문제가 없는데 왜 메소드 오버로딩을 사용해야하는가
// - 메소드 오버로딩이 있는 경우 string 파라미터인 경우 Product[]을 반환하고 nubmer인 경우 Product를 반환한다는 것을 알 수 있지만
//   유니온 연산자를 사용하여 getProducts(product: number | string): Product[] | Product라고만 선언되어 있는 경우
//   어떤 파리미터를 input했을 때 어떤 output이 나오는지 정확하게 알 수가 없다.