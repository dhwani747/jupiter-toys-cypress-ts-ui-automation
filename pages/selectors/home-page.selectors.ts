class HomePageSelectors {

  getHomeLink() {
     return cy.get('[id="nav-home"]');
}
   getShopLink() {
     return cy.get('[id="nav-shop"]');
}
 
  getContactLink() {
     return cy.get('[id="nav-contact"]');
}

  getStartShoppingButton() {
    return cy.get('.btn-success');
}
  }
    export default HomePageSelectors;