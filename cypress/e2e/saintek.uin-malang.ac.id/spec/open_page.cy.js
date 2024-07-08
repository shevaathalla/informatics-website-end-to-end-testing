describe("Open Page", () => {
  beforeEach(() => {
    cy.visit("https://saintek.uin-malang.ac.id/");
  });

  it("Open Page", () => {
    cy.url().should("include", "saintek.uin-malang.ac.id");
  });
});
