import { Product } from "../../data/models/product";

class ShopPageSelectors {
  getBuyButton(product: Product) {
    return this.getProductContainer(product).contains(
      "a.btn.btn-success",
      "Buy",
    );
  }

  getProductContainer(product: Product) {
    return cy.get(`#product-${product.productIndex}`);
  }

  getProductByIndex(index: number) {
    return cy.get(`#product-${index}`);
  }
}
export default ShopPageSelectors;
