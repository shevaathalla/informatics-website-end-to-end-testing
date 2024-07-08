describe("Search Text", () => {
  beforeEach(() => {
    cy.visit("https://elearning.uin-malang.ac.id/");
  });

  it("Search Text", () => {
    cy.scrollTo("bottom");

    cy.contains("Panduan").should("be.visible").trigger("mouseover");
  });
});
