import HomePageSelectors from "../selectors/home-page.selectors";

const homePageSelectors = new HomePageSelectors();

class HomePageActions {
  clickHomeLink() {
    homePageSelectors.getHomeLink().click();
  }

  clickShopLink() {
    homePageSelectors.getShopLink().click();
  }

  clickContactLink() {
    homePageSelectors.getContactLink().click();
  }

  clickStartShoppingButton() {
    homePageSelectors.getStartShoppingButton().click();
  }
}
export default HomePageActions;
