const rectangle = require("../js/rectangle");

test('should properly calculate perimeter', () => {
    const calculatePerimeter = rectangle.getRectanglePerimeter(5, 7)
    expect(calculatePerimeter).toBe(24)
});

test('should properly calculate rectangle', () => {
    const calculateRectangle = rectangle.getRectangleArea(5, 7)
    expect(calculateRectangle).toBe(35)
});

test('should properly info', () => {
    const info = rectangle.getRectangleInfo(5, 7)
    expect(info).toBe(console.log(`The perimeter of a rectangle is 24 and the area is 35`))
});