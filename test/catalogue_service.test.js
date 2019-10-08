const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {



  describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });

    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });

    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });
  });

  ///////

  describe("catalogueService.countBooksByKeyword", () => {
    test("returns true when a book is found by keyword", () => {
      expect(catalogueService.countBooksByKeyword("Great Expectations")).toBe(true);
    });

    test("returns false when a book cannot be found by keyword", () => ) {
      expect(catalogueService.countBooksByKeyword("Gone With The Wind")).toBe(false);
    };

    test("returns true when a partial match is found", () => {
      expect(catalogueService.countBooksByKeyword("Expectations")).toBe(true);
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("it returns an array of Charles Dickens books", () => {
      const actual = catalogueService.getBooksByAuthor("Charles Dickens");
      const expected = ["A Tale of Two Cities", "Oliver Twist", "Great Expectations"];
      expect(actual).toEqual(expected)
    });
  });



});
