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

// .volume property (number = 5)

// .volume getter

// runOut() function to empty can

module.exports = PaintCan;
