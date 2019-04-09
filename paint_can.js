class PaintCan {

  constructor(volume = 5) {
    this._volume = volume;
  };

  get volume() {
    return this._volume;
  };

  runOut() {
    this._volume = 0;
  };

};

module.exports = PaintCan;
