describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      fixture: "mockTricks",
    });
  });

  it("will load the page correct", () => {
    cy.visit("/");

    cy.get("form").should("have.length", 1);

    cy.get(".tricks-container").should("have.length", 1);
    cy.get(".tricks-container").get(".trick").should("have.length", 3);

    cy.get(".trick").first().contains("Regular Sword");
    cy.get(".trick").first().contains("Obstacle: Gravity");
    cy.get(".trick").first().contains("Link to Tutorial:");
    cy.get(".trick a").first().contains("www.youtube.com");

    cy.get(".trick").last().contains("Regular Mace");
    cy.get(".trick").last().contains("Obstacle: Power");
    cy.get(".trick").last().contains("Link to Tutorial:");
    cy.get(".trick a").last().contains("www.instagram.com");
  });

  it("will allow you to input a trick", () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/tricks", {
      body: {
        stance: "Regular",
        name: "Death",
        obstacle: "Stairs",
        tutorial: "www.foo.com",
        id: 3,
      },
    });

    cy.visit("/");

    cy.get(".trick").should("have.length", 3);
    // input in data
    cy.get("form > .trick-stance-input").select("Regular");
    cy.get("form > .trick-name-input").type("Death");
    cy.get("form > .trick-obstacle-input").select("Stairs");
    cy.get("form > .trick-tutorial-input").type("www.foo.com");
    // check form is controlled
    cy.get("form > .trick-stance-input").should("have.value", "Regular");
    cy.get("form > .trick-name-input").should("have.value", "Death");
    cy.get("form > .trick-obstacle-input").should("have.value", "Stairs");
    cy.get("form > .trick-tutorial-input").should("have.value", "www.foo.com");

    cy.get("form > button").click();
    // check that data is updated after click
    cy.get(".trick").should("have.length", 4);
    cy.get(".trick").last().contains("Regular Death");
    cy.get(".trick").last().contains("Obstacle: Stairs");
    cy.get(".trick").last().contains("Link to Tutorial");
    cy.get(".trick a").last().contains("www.foo.com");
    // check that form is reset
    cy.get("form > .trick-stance-input").should("have.value", null);
    cy.get("form > .trick-name-input").should("have.value", "");
    cy.get("form > .trick-obstacle-input").should("have.value", null);
    cy.get("form > .trick-tutorial-input").should("have.value", "");
  });

  it("will not allow post if you to have missing data", () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/tricks", {
      body: {
        stance: "Regular",
        name: "Death",
        obstacle: "Stairs",
        tutorial: "www.foo.com",
        id: 3,
      },
    });

    cy.visit("/");

    cy.get(".trick").should("have.length", 3);
    // input in data
    cy.get("form > .trick-stance-input").select("Regular");
    cy.get("form > button").click();
    cy.get(".trick").should("have.length", 3);
    cy.get(".trick").last().contains("Regular Mace");
    cy.get("form > .trick-name-input").type("Death");
    cy.get("form > button").click();
    cy.get(".trick").should("have.length", 3);
    cy.get(".trick").last().contains("Regular Mace");
    cy.get("form > .trick-obstacle-input").select("Stairs");
    cy.get("form > button").click();
    cy.get(".trick").should("have.length", 3);
    cy.get(".trick").last().contains("Regular Mace");
    cy.get("form > .trick-tutorial-input").type("www.foo.com");
    cy.get("form > button").click();
    cy.get(".trick").should("have.length", 4);
    cy.get(".trick").last().contains("Regular Death");

    // check that form is reset
    cy.get("form > .trick-stance-input").should("have.value", null);
    cy.get("form > .trick-name-input").should("have.value", "");
    cy.get("form > .trick-obstacle-input").should("have.value", null);
    cy.get("form > .trick-tutorial-input").should("have.value", "");
  });
});
