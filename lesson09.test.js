import removeElement from "./lesson09.js";

describe("array", () => {
    it("element is removed from the array", () => {
        const array = [2, 45, 8, 'hello', 78, 14];

        removeElement(array, 'hello');

        expect(array).not.toContain('hello');
    })

    it("deleting a non-existent element", () => {
        const array = [2, 45, 8, 'hello', 78, 14];

        const newArray = [...array];

        removeElement(array, "notExisting");

        expect(array).toEqual(newArray)
    })

    it('should remove all occurrences of a repeating element from an array', () => {
        
        const array = [2, 45, 8, 'hello', 78, 'hello', 14];
    
        removeElement(array, 'hello');

        expect(array).not.toContain('hello');
      });
})