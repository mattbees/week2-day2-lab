class Room {
  constructor(area, painted = false) {
    this._area = area;
    this._painted = painted;
  };

  get area() {
    return this._area;
  };

  get painted() {
    return this._painted;
  };

  bePainted() {
    this._painted = true;
  };

};

module.exports = Room;
