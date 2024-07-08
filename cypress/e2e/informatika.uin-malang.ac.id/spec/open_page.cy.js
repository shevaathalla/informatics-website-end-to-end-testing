describe("Open Page", () => {
  beforeEach(() => {
    cy.visit("https://informatika.uin-malang.ac.id/");
  });

  it("Open Page", () => {
    cy.url().should("include", "informatika.uin-malang.ac.id");
  });
});
