type Product3 = {
	id: number;
	description: string;
}

interface IProductService {
	getProducts(): Product3[];
	getProductById(id: number): Product3;
}

class ProductService3 implements IProductService {
	getProducts(): Product3[] {
		// get data
		return [];
	}

	getProductById(id: number): Product3 {
		// get data
		return { id: 0, description: '' };
	}
}

class MockProductService implements IProductService {
	getProducts(): Product3[] {
		return [
			{ id: 123, description: 'Good product' },
			{ id: 456, description: 'Good product' }
		];
	}

	getProductById(id: number): Product3 {
		return { id: 123, description: 'Good product' };
	}
}

// factory function
function getProductService(isProduction: boolean): IProductService {
	if (isProduction) {
		return new ProductService3();
	} else {
		return new MockProductService();
	}
}

let productService: IProductService;

const isProd = false;
productService = getProductService(isProd);

const products = productService.getProducts();
console.log(products);