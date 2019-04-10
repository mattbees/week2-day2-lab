class PaintCan {

  constructor(volume = 5) {
    this._volume = volume;
  };

  get volume() {
    return this._volume;
  };

  set volume(num) {
    if (num <= 5) {
      this._volume = num;
    };
  };

  runOut() {
    this._volume = 0;
  };

};

module.exports = PaintCan;
