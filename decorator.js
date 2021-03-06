// needs stock array which starts empty
// addCan method which adds a can to stock array (can as arg)
// calcStock() totals volume of cans in stock array
// checkPaint(room) compares stock volume to room area, returns true/false
// paintRoom(room) method calls room.bePainted()

class Decorator {
  constructor() {
    this.stock = [];
  };

  addCan(can) {
    this.stock.push(can);
  };

  calcStock() {
    let total = 0;
    for (let can of this.stock) {
      total += can.volume;
    };
    return total;
  };

  checkPaint(room) {
    if (room.area > (this.calcStock())) {
      return false;
    } else {
      return true;
    };
  };

  paintRoom(room) {
    room.bePainted();
  };

  decreaseStock(room) {
    let area = room.area;
    for (let i=this.stock.length-1; i>=0; i--) {
      if (area >= this.stock[i].volume) {
        area = area - this.stock[i].volume;
        this.stock[i].volume = 0; // setter method
      } else if (this.stock[i].volume > area) {
        this.stock[i].volume = this.stock[i].volume-area; // setter method
        area = 0;
      };
    };
  };

  removeEmpty() {
    let filteredCans = [];
    for (let can of this.stock) {
      if (can.volume !== 0) {
        filteredCans.push(can);
      };
    };
    this.stock = filteredCans;
  };

};

module.exports = Decorator;
