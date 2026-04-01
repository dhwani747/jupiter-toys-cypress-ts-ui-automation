import { Product } from "../../data/models/product";
import CartPageSelectors from "../../pages/selectors/cart-page.selectors";
import ShopPageSelectors from "../selectors/shop-page.selectors";

const cartPageSelectors = new CartPageSelectors();
const shopPageSelectors = new ShopPageSelectors();

class ShopPageActions {
  addToCart(product: Product) {
    for (let i = 0; i < product.quantity; i++) {
      shopPageSelectors.getBuyButton(product).should("be.visible").click();
    }
  }

  addItemsToCart(products: Product[]) {
    let totalItems = 0;
    products.forEach((product) => {
      this.addToCart(product);
      totalItems += product.quantity;
    });

    cartPageSelectors.getCartLink().should("contain", totalItems); // verify cart count after adding all items
  }
}
export default ShopPageActions;
