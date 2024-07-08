describe("Open Page", () => {
  beforeEach(() => {
    cy.visit("https://kemahasiswaan.uin-malang.ac.id/");
  });

  it("Open Page", () => {
    cy.url().should("include", "kemahasiswaan.uin-malang.ac.id");
  });
});
