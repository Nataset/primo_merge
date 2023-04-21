import merge from "./merge";

describe("merge", () => {
    it("merge two number arrays", () => {
        const result = merge([0, 2, 4], [1, 3, 5]);
        expect(result).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it("merge two empty arrays", () => {
        const result = merge([], []);
        expect(result).toEqual([]);
    });

    it("merge empty array with number array", () => {
        const result = merge([], [1, 2, 3]);
        expect(result).toEqual([1, 2, 3]);
    });

    it("merge number array with empty array", () => {
        const result = merge([1, 2, 3], []);
        expect(result).toEqual([1, 2, 3]);
    });

    it("merge two number array with overlapping element", () => {
        const result = merge([1, 2, 3], [1, 2, 3]);
        expect(result).toEqual([1, 1, 2, 2, 3, 3]);
    });

    it("merge two unequal length number array", () => {
        const result = merge([1, 3, 5, 6], [1, 3, 4, 7, 7, 7]);
        expect(result).toEqual([1, 1, 3, 3, 4, 5, 6, 7, 7, 7]);
    });
});
