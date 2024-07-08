describe("Search Text", () => {
  beforeEach(() => {
    cy.visit("https://informatika.uin-malang.ac.id/");
  });

  it("Search Text", () => {
    cy.scrollTo("bottom");

    cy.contains("Skripsi").should("be.visible").trigger("mouseover");
  });
});
