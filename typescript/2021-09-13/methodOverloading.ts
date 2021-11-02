//	// 중복 함수 구현 오류 발생
// class ProductService {
// 	getProducts() {
// 		console.log(`Getting all products`);
// 	}
// 	getProducts(id: number) {
// 		console.log(`Getting ther product info for ${id}`);
// 	}
// }
// const prodService = new ProductService();
// prodService.getProducts(123);
// prodService.getProducts();

class ProductService {
	// 허용 가능한 메소드를 선언(메소드 오버로딩)
	getProducts();
	getProducts(id: number);

	getProducts(id?: number) {
		if (typeof id === 'number') {
			console.log(`Getting the product info for ${id}`);
		} else {
			console.log(`Getting all products`);
		}
	}
}
const prodService = new ProductService();
prodService.getProducts(123);
prodService.getProducts();