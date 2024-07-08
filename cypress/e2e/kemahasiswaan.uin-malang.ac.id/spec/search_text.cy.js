describe("Search Text", () => {
  beforeEach(() => {
    cy.visit("https://kemahasiswaan.uin-malang.ac.id/");
  });

  it("Search Text", () => {
    cy.scrollTo("bottom");

    cy.contains("Beasiswa").should("be.visible").trigger("mouseover");
  });
});
