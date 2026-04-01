class ContactPageSelectors {
  getForename() {
    return cy.get('[id="forename"]');
  }
  getSurname() {
    return cy.get('[id="surname"]');
  }
  getEmail() {
    return cy.get('[id="email"]');
  }
  getTelephone() {
    return cy.get('[id="telephone"]');
  }
  getMessage() {
    return cy.get('[id="message"]');
  }
  getSubmitButton() {
    return cy.get(".btn-contact.btn.btn-primary");
  }
  getForenameError() {
    return cy.get('[id="forename-err"]');
  }
  getEmailError() {
    return cy.get('[id="email-err"]');
  }
  getMessageError() {
    return cy.get('[id="message-err"]');
  }
  getMessageSuccess() {
    return cy.get("div.alert.alert-success");
  }
  getBackButton() {
    return cy.contains("a.btn", "Back");
  }
  getAlertHeader() {
    return cy.get('[id="header-message"]');
  }
}

export default ContactPageSelectors;
