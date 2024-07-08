import { locator } from "../locator/locator";

describe("Search Bar", () => {
  beforeEach(() => {
    cy.visit("https://saintek.uin-malang.ac.id/");
  });

  it("Search Bar", () => {
    cy.get(locator.inputSearch).type("Perijinan");
    cy.get(locator.btnSearch).click();
    cy.get(locator.contentContainer).contains("Perijinan").should("be.visible");
  });
});
