describe("Search results", () => {
  beforeEach(() => {
    // real tests would use mocked data for this endpoint
    cy.visit(
      "http://localhost:3000/results?bookingType=holiday&location=orlando&gateway=LHR&departureDate=01-06-2024&duration=7&partyCompositions=a2",
    );
  });

  it("should render results", () => {
    expect(cy.get('[data-testid="holiday-card"]')).to.exist;
  });

  describe("filters", () => {
    it("should render filters", () => {
      cy.get('[data-testid="filter-fieldset"]').should("have.length", 3);
      expect(cy.get('[data-testid="filter"]')).to.exist;
    });

    // test to check changing flight, date details

    // test to check when viewing details, it takes to correct hotel

    // test to check hotel image carousel is working

    it("should filter when a filter is selected", () => {
      const firstFilter = cy.get('[data-testid="filter"]').first().find(
        "input",
      );

      firstFilter.check();

      firstFilter.should("be.checked");

      cy.get('[data-testid="filtered-count"]').should(
        "not.equal",
        81,
      );
    });
  });
});
