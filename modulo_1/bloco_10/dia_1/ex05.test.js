const { obj1, obj2, obj3 } = require('./ex05');

test("comparing objects", () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
});
