import pow from "./lesson11.js";


describe("number", () => {
    it("correctly calculates for degree 0", () => {
        const x = pow(2, 0);
        expect(x).toEqual(1);
    });

    it("correctly calculates for a negative degree", () => {
        expect(pow(2, -2)).toBeCloseTo(0.25);
        expect(pow(2, -3)).toBeCloseTo(0.125)
    })

    it("correctly calculates for a negative base", () => {
        expect(pow(-2, 2)).toEqual(4);
        expect(pow(-2, 3)).toEqual(-8)
    });


    it("non-integer degree should throw an error", () => {
        expect(() => pow(2, 0.5)).toThrow();

        expect(() => pow(3, 1.5)).toThrow();
    });

    it("an invalid number should cause an error", () => {
        expect(() => pow("invalid", 2)).toThrow();
    });


})