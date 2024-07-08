import { locator } from "../locator/locator";

describe("Open Page", () => {
  beforeEach(() => {
    cy.visit("https://akademik.uin-malang.ac.id/");
  });

  it("Open Page", () => {
    cy.url().should("include", "akademik.uin-malang.ac.id");
  });
});
