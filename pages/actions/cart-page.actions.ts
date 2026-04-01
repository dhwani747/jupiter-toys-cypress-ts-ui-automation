import { Product } from "../../data/models/product";
import CartPageSelectors from "../selectors/cart-page.selectors";

const cartPageSelectors = new CartPageSelectors();

const parsePrice = (text: string): number =>
  parseFloat(text.replace("$", "").trim());

class CartPageActions {
  navigateToCart() {
    cartPageSelectors.getCartLink().should("be.visible").click();
  }

  verifyCartItemCount(products: Product[]): void {
    let totalItems = 0;

    products.forEach((product) => {
      totalItems += product.quantity;
    });

    cartPageSelectors.getCartLink().should("contain", totalItems);
  }

  verifyCartItem(product: Product) {
    let subtotal = 0;

    return cartPageSelectors
      .getCartItemByName(product.productName)
      .should("be.visible")
      .within(() => {
        cartPageSelectors
          .getCartItemByIndex(0) //product name at index 0
          .invoke("text")
          .then((text: string) => {
            expect(text).to.contain(product.productName);
          });

        cartPageSelectors
          .getCartItemByIndex(1) //unit price at index 1
          .invoke("text")
          .then((priceText: string) => {
            const unitPrice = parsePrice(priceText);

            expect(unitPrice).to.eq(product.unitPrice);

            cartPageSelectors
              .getCartQuantityInput() // quantity at index 2
              .invoke("val")
              .then((val) => {
                const quantity = Number(val);
                expect(quantity).to.eq(product.quantity);

                cartPageSelectors
                  .getCartItemByIndex(3) // subtotal at index 3
                  .invoke("text")
                  .then((subtotalText: string) => {
                    subtotal = parsePrice(subtotalText);

                    expect(subtotal).to.eq(unitPrice * quantity);
                  });
              });
          });
      })
      .then(() => subtotal);
  }

  verifyCart(products: Product[]): void {
    cy.log("Verify cart items and total price");
    let total = 0;

    cy.wrap(products)
      .each((product: Product) => {
        return this.verifyCartItem(product).then((subtotal: number) => {
          total += subtotal;
        });
      })
      .then(() => {
        this.verifyTotal(total);
      });
  }

  verifyTotal(expectedTotal: number): void {
    cartPageSelectors
      .getTotalPrice()
      .invoke("text")
      .then((text: string) => {
        const displayedTotal = parseFloat(text.replace("Total:", "").trim());

        expect(displayedTotal).to.eq(expectedTotal);
      });
  }
}

export default CartPageActions;
