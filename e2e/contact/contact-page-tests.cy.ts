import ContactPageActions from "../../pages/actions/contact-page.actions";
import { contact } from "./contact-page-data";

const contactPage = new ContactPageActions();

describe("Contact Page Tests", () => {
  beforeEach(() => {
    cy.log(`Navigate to Contact Page from Home Page before each test`);
    cy.visit("/");
    contactPage.navigateToContactPage();
  });

  it("1.Should check mandatory fields should display validation errors", () => {
    contactPage.clickSubmit();
    contactPage.verifyMandatoryFieldsValidationErrors();
  });

  it("2.Should check contact details should be successfully submitted and validation errors cleared", () => {
    contactPage.verifySuccessfulSubmission(contact, 1);
  });

  it("3.Should check contact details should be successfully submitted five times", () => {
    contactPage.verifySuccessfulSubmission(contact, 5);
  });
});
