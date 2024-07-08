import { locator } from "../locator/locator";

describe("Search Bar", () => {
  beforeEach(() => {
    cy.visit("https://informatika.uin-malang.ac.id/");
  });

  it("Search Bar", () => {
    cy.get(locator.inputSearch).type("Skripsi");
    cy.get(locator.btnSearch).click();
    cy.get(locator.headerContainer).contains("Skripsi").should("be.visible");
  });
});
