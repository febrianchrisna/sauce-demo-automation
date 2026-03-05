// Visit Page Using Cy.visit()
describe("1. Visit page", () => {
  it("Should visit the login page (homepage)", () => {
    cy.visit("https://saucedemo.com/");
    cy.url().should("include", "saucedemo.com");
  });

  it("Should visit the inventory page (after login)", () => {
    cy.visit("https://saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.location("pathname").should("eq", "/inventory.html");
  });

  it("Should visit the cart page (after login()", () => {
    cy.visit("https://saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".shopping_cart_link").click();
    cy.url().should("eq", "https://www.saucedemo.com/cart.html");
  });
});

describe("2. cy.get - Mengambil Element", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("get element by id -> #user-name", () => {
    cy.get("#user-name").type("standard_user");
  });

  it("get element by class -> .login_container", () => {
    cy.get(".login_container").should("be.visible");
  });

  it("get element by tag -> input", () => {
    cy.get("input").should("exist");
  });

  it('get element by attribute -> input[type="password"]', () => {
    cy.get('input[type="password"]').should("exist");
  });

  it("get element by combined selector -> input#user-name", () => {
    cy.get("input#user-name").should("exist");
  });

  it("get element by text -> cy.contains()", () => {
    cy.contains("Swag Labs").should("be.visible");
  });
});

describe("3. Type Text - Mengetik di input field", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should type username into username field", () => {
    cy.get("#user-name")
      .type("standard_user")
      .should("have.value", "standard_user");
  });

  it("should type password into password field", () => {
    cy.get("#password")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
  });

  it("should clear field and retype username", () => {
    cy.get("#user-name")
      .type("wrong_user")
      .clear()
      .type("standard_user")
      .should("have.value", "standard_user");
  });
});

