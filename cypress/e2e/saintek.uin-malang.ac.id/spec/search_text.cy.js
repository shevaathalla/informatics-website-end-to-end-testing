describe("Search Text", () => {
  beforeEach(() => {
    cy.visit("https://saintek.uin-malang.ac.id/");
  });

  it("Search Text", () => {
    cy.scrollTo("bottom");

    cy.contains("Perijinan").should("be.visible").trigger("mouseover");
  });
});
