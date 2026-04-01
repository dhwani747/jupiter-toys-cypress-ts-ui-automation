import { Contact } from "../../data/models/contact";
import ContactPageSelectors from "../selectors/contact-page.selectors";
import HomePageActions from "./home-page.actions";

const contactPageSelectors = new ContactPageSelectors();
const homePageActions = new HomePageActions();

class ContactPageActions {
  navigateToContactPage() {
    cy.log(`Navigate to Contact Page From the Home Page`);
    homePageActions.clickContactLink();
  }

  clickSubmit() {
    contactPageSelectors.getSubmitButton().click({ force: true });
  }

  verifyMandatoryFieldsValidationErrors() {
    cy.log(`Verify validation errors for all mandatory fields`);
    contactPageSelectors.getForenameError().should("be.visible");
    contactPageSelectors.getEmailError().should("be.visible");
    contactPageSelectors.getMessageError().should("be.visible");
  }

  verifySuccessfulSubmission(contact: Contact, numberOfTimes: number) {
    for (let i = 1; i <= numberOfTimes; i++) {
      cy.log(
        `Populate mandatory fields with valid data and submit the form - Iteration ${i}`,
      );
      this.populateAllMandatoryFields(contact);
      this.verifyValidationErrorsCleared();
      this.clickSubmit();
      cy.wait(7000);
      this.verifySuccessMessageDisplayed();
      cy.log(`Go back button for the next iteration`);
      contactPageSelectors.getBackButton().click({ force: true });
    }
  }

  populateAllMandatoryFields(contact: Contact) {
    contactPageSelectors.getForename().type(contact.forename, { force: true });
    contactPageSelectors.getSurname().type(contact.surname, { force: true });
    contactPageSelectors.getEmail().type(contact.email, { force: true });
    contactPageSelectors
      .getTelephone()
      .type(contact.telephone, { force: true });
    contactPageSelectors.getMessage().type(contact.message, { force: true });
  }

  verifyValidationErrorsCleared() {
    contactPageSelectors.getForenameError().should("not.exist");
    contactPageSelectors.getEmailError().should("not.exist");
    contactPageSelectors.getMessageError().should("not.exist");
    cy.log(`Check if there is no error summary/banner`);
    contactPageSelectors
      .getAlertHeader()
      .contains("We welcome your feedback - tell it how it is");
  }

  verifySuccessMessageDisplayed() {
    contactPageSelectors.getMessageSuccess().should("be.visible");
  }
}
export default ContactPageActions;
