const Room = require('../room');

describe('room', () => {

  let room;

  beforeEach( () => {
    room = new Room(15);
  });

  test('room should have an area', () => {
    expect(room.area).toBe(15);
  });

  test('room should start not painted', () => {
    expect(room.painted).toBe(false);
  });

  test('room should be able to be painted', () => {
    room.bePainted();
    expect(room.painted).toBe(true);
  });

});
