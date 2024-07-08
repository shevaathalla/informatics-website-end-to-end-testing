import { locator } from "../locator/locator";

describe("Menu Bar Functionality", () => {
  beforeEach(() => {
    cy.visit("https://akademik.uin-malang.ac.id/");
  });
  it("Click Beranda", () => {
    cy.get(locator.btnBeranda).click();
    cy.wait(1000);
    cy.contains("Bagian Administrasi Akademik").should("be.visible");
  });

  it("Click Layanan", () => {
    cy.get(locator.btnLayanan).click();
    cy.wait(1000);
    cy.contains("Layanan").should("be.visible");
  });

  it("Click Struktur", () => {
    cy.get(locator.btnStruktur).click();
    cy.wait(1000);
    cy.contains("Struktur").should("be.visible");
  });

  it("Click Kegiatan", () => {
    cy.get(locator.btnKegiatan).click();
    cy.wait(1000);
    cy.contains("Kegiatan").should("be.visible");
  });

  it("Click Dokumen", () => {
    cy.get(locator.btnDokumen).click();
    cy.wait(1000);
    cy.contains("Dokumen").should("be.visible");
  });

  it("Click Laman", () => {
    cy.get(locator.btnLaman).click();
    cy.wait(1000);
    cy.contains("Laman").should("be.visible");
  });

  it("Click Personalia", () => {
    cy.get(locator.btnPersonalia).click();
    cy.wait(1000);
    cy.contains("Personalia").should("be.visible");
  });

  it("Click Alur", () => {
    cy.get(locator.btnAlur).click();
    cy.wait(1000);
    cy.contains("Alur").should("be.visible");
  });

  it("Click Galeri", () => {
    cy.get(locator.btnGaleri).click();
    cy.wait(1000);
    cy.contains("Galeri").should("be.visible");
  });

  it("Click Kepuasan", () => {
    cy.get(locator.btnKepuasan).click();
    cy.wait(1000);
    cy.contains("Kepuasan").should("be.visible");
  });
});
