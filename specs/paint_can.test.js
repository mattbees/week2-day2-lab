const paintCan = require('../paint_can');

describe('paint can', () => {

  let can;
  // create vars

  beforeEach( () => {
    can.volume = 5; // Delete this
    // instantiate variable
  });

  test('can should have a number of litres of paint', () => {
    expect(can.volume).toBe(5);
  });

  test('can should be able to check if it is empty', () => {
    expect(can.volume()).toBe(5);  // getter
  });

  test('can should be able to empty itself', () => {
    can.runOut();
    expect(can.volume).toBe(0);
  })



});
