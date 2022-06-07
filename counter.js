const counter = {
  value: 0, // значение счетчика


  increment: function () {
    return this.value++
  },

  incrementBy: function (amount) {
    return (this.value += amount)
  },

  decrement: function () {
    return  this.value--
  },

  reset: function () {
    this.value = 0;
  },

  print: function () {
    console.log(`Значение счетчика: ${this.value}`);
  }
}

counter.print(); // 0

counter.increment();
counter.increment();

counter.print(); // 2

counter.decrement();

counter.print(); // 1

counter.incrementBy(5);

counter.print(); // 6

counter.reset();

counter.print(); // 0
