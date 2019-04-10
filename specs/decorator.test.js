const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('decorator', () => {

  let decorator;
  let can1;
  let can2;
  let can3;
  let can4;
  let can5;
  let cans = [];
  let room;

  beforeEach( () => {
    decorator = new Decorator();
    can1 = new PaintCan();
    can2 = new PaintCan();
    can3 = new PaintCan();
    can4 = new PaintCan();
    can5 = new PaintCan();
    cans = [can1, can2, can3, can4, can5];
    room = new Room(22);
  });

  test('decorator should start with no stock', () => {
    expect(decorator.stock.length).toBe(0);
  });

  test('decorator should be able to add a can to stock', () => {
    decorator.addCan(can1);
    expect(decorator.stock.length).toBe(1);
  });

  test('decorator should be able to calculate litres in stock', () => {
    decorator.addCan(can1);
    decorator.addCan(can1);
    decorator.addCan(can1);
    expect(decorator.calcStock()).toBe(15);
  });

  test('decorator should be able to calculate whether he has enough paint to paint the room', () => {
    decorator.addCan(can1);
    decorator.addCan(can1);
    expect(decorator.checkPaint(room)).toBe(false);
  });

  test('decorator should be able to paint room', () => {
    decorator.paintRoom(room);
    expect(room.painted).toBe(true);
  });

// Extensions:
  test('decorator should be able to decrease stock as room is painted', () => {
    for (let can of cans) {
      decorator.addCan(can);
    };
    decorator.decreaseStock(room);
    expect(decorator.calcStock()).toBe(3);
  });

  test('decorator should be able to remove empty paint cans from stock', () => {
    for (let can of cans) {
      decorator.addCan(can);
    };
    decorator.decreaseStock(room);
    decorator.removeEmpty();
    expect(decorator.stock.length).toBe(1);
  });

});
