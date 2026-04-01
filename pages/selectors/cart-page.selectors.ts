class CartPageSelectors {
  getCartLink() {
    return cy.get("#nav-cart");
  }

  getCartRows() {
    return cy.get("tr.cart-item");
  }

  getCartItemByName(name: string) {
    return cy.contains("tr.cart-item", name);
  }

  getTotalPrice() {
    return cy.get("strong.total");
  }

  getCartItemByIndex(index: number) {
    return cy.get("td").eq(index);
  }

  getCartQuantityInput() {
    return cy.get('input[name="quantity"]');
  }
}
export default CartPageSelectors;
