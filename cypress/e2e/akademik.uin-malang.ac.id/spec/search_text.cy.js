import { locator } from "../locator/locator";

describe("Search Text", () => {
  beforeEach(() => {
    cy.visit("https://akademik.uin-malang.ac.id/");
  });

  it("Search Text", () => {
    cy.scrollTo("bottom");

    cy.contains("Cuti").should("be.visible").trigger("mouseover");
  });
});
