let produceDrivingRange = function(range) {
  return function(a, b) {
    let distance;
    let point1 = parseInt(a.substring(0, a.length - 2));
    let point2 = parseInt(b.substring(0, b.length - 2))

    if (point1 > point2) {
      distance = point1 - point2
    } else {
      distance = point2 - point1;
    }

    if (distance > range) {
      return (distance - range) + ' blocks out of range';
    } else {
      return 'within range by ' + (range - distance);
    }
  }
}

let produceTipCalculator = function(percent) {
  return function(tip) {
    return tip * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
