class Node {
  constructor(value, prev, next) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

export default class InputList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.equal = false;
  }

  _reset = function () {
    this.head = null;
    this.tail = null;
  };

  _isNumber = function (value = null) {
    return value !== null && !isNaN(value);
  };

  _addNewNode = function (value) {
    var newNode = new Node(value, this.tail, null);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  };

  _prepareScreenValue = function (node) {
    if (node.next) return `${node.value + this._prepareScreenValue(node.next)}`;
    else return `${node.value}`;
  };

  getScreenValue = function () {
    if (!this.head) return "";
    else return this._prepareScreenValue(this.head);
  };

  save = function (value) {
    if (!this.head) {
      // Positive & Negative digits allowed at head.
      if (this._isNumber(value) || value === "-") {
        this.equal = false;
        this._addNewNode(value);
      }
    } else {
      // Cancel the output
      if (value === "C") {
        this._reset();
        return;
      }
      // No leading zero
      if (this.head.value === "0" && this._isNumber(value)) {
        this._reset();
        this._addNewNode(value);
        return;
      }

      if (this._isNumber(this.tail.value)) {
        // If last value is zero and this is number.
        if (
          this.tail.value === "0" &&
          !this._isNumber(this.tail.prev.value) &&
          this._isNumber(value)
        ) {
          this.tail.value = value;
          return;
        }
        if (value === "=") {
          const screenOutput = this.getScreenValue(this.head);
          const output = eval(screenOutput);
          this._reset();
          if (output !== -Infinity && output !== Infinity) {
            this._addNewNode(output);
          }
          this.equal = true;
          return;
        }
        if (this.equal && this._isNumber(value)) {
          this._reset();
          this.equal = false;
          this._addNewNode(value);
        } else {
          this.equal = false;
          this._addNewNode(value);
        }
      } else {
        if (this._isNumber(value)) {
          this._addNewNode(value);
        } else {
          if (value === "=") return;
          if (this.tail.value === "+" || this.tail.value === "-") {
            if (this.tail.prev === null) return;
            if (this._isNumber(this.tail.prev.value)) this.tail.value = value;
            return;
          }
          if (this.tail.value === "*" || this.tail.value === "/") {
            if (this.tail.prev === null) return;
            if (value === "-") this._addNewNode(value);
            else this.tail.value = value;
          }
        }
      }
    }
  };
}
