const { locator } = require("../locator/locator");

describe("Menu Bar", () => {
  beforeEach(() => {
    cy.visit("https://saintek.uin-malang.ac.id/");
  });

  it("Click Fakultas", () => {
    cy.get(locator.btnFakultas).should("be.visible");
    cy.reload();
  });

  it("Click Akademik", () => {
    cy.get(locator.btnAkademik).should("be.visible");
    cy.reload();
  });

  it("Click Kemahasiswaan", () => {
    cy.get(locator.btnKemahasiswaan).should("be.visible");
    cy.reload();
  });

  it("Click Dokumen", () => {
    cy.get(locator.btnDokumen).should("be.visible");
    cy.reload();
  });

  it("Click Kerjasama", () => {
    cy.get(locator.btnKerjasama).should("be.visible");
    cy.reload();
  });

  it("Click Unit Pelaksana", () => {
    cy.get(locator.btnUnitPelaksana).should("be.visible");
    cy.reload();
  });

  it("Click Pmp", () => {
    cy.get(locator.btnPmp).should("be.visible");
    cy.reload();
  });

  it("Click Layanan", () => {
    cy.get(locator.btnLayanan).should("be.visible");
    cy.reload();
  });
});
