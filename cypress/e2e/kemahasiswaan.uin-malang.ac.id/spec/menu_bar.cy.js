import { locator } from "../locator/locator";

describe("Menu Bar", () => {
  beforeEach(() => {
    cy.visit("https://kemahasiswaan.uin-malang.ac.id/");
  });

  it("Click Pedoman", () => {
    cy.get(locator.btnPedoman).click();
    cy.url().should("include", "pedoman");
  });

  it("Click Layanan", () => {
    cy.get(locator.btnLayanan).click();
    cy.url().should("include", "layanan");
  });

  it("Click Beasiswa", () => {
    cy.get(locator.btnBeasiswa).click();
    cy.url().should("include", "data-beasiswa");
  });

  it("Click Prestasi", () => {
    cy.get(locator.btnPrestasi).click();
    cy.url().should("include", "data-prestasi");
  });
});
