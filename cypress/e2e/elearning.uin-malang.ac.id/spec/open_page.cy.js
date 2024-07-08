describe("Open Page", () => {
  beforeEach(() => {
    cy.visit("https://elearning.uin-malang.ac.id/");
  });

  it("Open Page", () => {
    cy.url().should("include", "elearning.uin-malang.ac.id");
  });
});
