const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('decorator', () => {

  let decorator;
  let can;
  let room;

  beforeEach( () => {
    decorator = new Decorator(/*args*/);
    can = new PaintCan();
    room = new Room(20);
  });

  test('decorator should start with no stock', () => {
    expect(decorator.stock.length).toBe(0);
  });

  test('decorator should be able to add a can to stock', () => {
    decorator.addCan(can);
    expect(decorator.stock.length).toBe(1);
  });

  test('decorator should be able to calculate litres in stock', () => {
    decorator.addCan(can);
    decorator.addCan(can);
    decorator.addCan(can);
    expect(decorator.calcStock()).toBe(15);
  });

  test('decorator should be able to calculate whether he has enough paint to paint the room', () => {
    decorator.addCan(can);
    decorator.addCan(can);
    expect(decorator.checkPaint(room)).toBe(false);
  });

  test('decorator should be able to paint room', () => {
    decorator.paintRoom(room);
    expect(room.painted).toBe(true);
  });

});
