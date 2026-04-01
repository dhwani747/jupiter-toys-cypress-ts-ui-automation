import ShopPageActions from "../../pages/actions/shop-page.actions";
import { products } from "./shop-cart-page-data";
import CartPageActions from "../../pages/actions/cart-page.actions";
import HomePageActions from "../../pages/actions/home-page.actions";

const shopPage = new ShopPageActions();
const cartPage = new CartPageActions();
const homePage = new HomePageActions();

before(() => {
  cy.visit("/");
  homePage.clickShopLink();
});

describe("Shop and Cart Page Tests", () => {
  it("should add items to the cart and check item details - quantity, price, subtotal and total", () => {
    shopPage.addItemsToCart(products);
    cartPage.verifyCartItemCount(products);
    cartPage.navigateToCart();
    cartPage.verifyCart(products);
  });
});
