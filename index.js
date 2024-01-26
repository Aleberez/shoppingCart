// @ts-check

import half from './src/half.js';

export default half;

const shoppingCart = {
  items: [],
  total: 0,

  addItem(name, price, quantity) {
    const item = { name, price, quantity };
    this.items.push(item);
    this.total += price * quantity;
  },

  removeItem(name) {
    this.items = this.items.filter((item) => {
      if (item.name === name) {
        this.total -= item.price * item.quantity;
        return false;
      }
      return true;
    });
  },

  updateQuantity(name, quantity) {
    this.items = this.items.map((item) => {
      if (item.name === name) {
        this.total -= item.price * item.quantity;
        item.quantity = quantity;
        this.total += item.price * item.quantity;
      }
      return item;
    });
  },

  calculateTotal() {
    return this.total;
  },

  clearCart() {
    this.items = [];
    this.total = 0;
  },
};

console.log(shoppingCart);

shoppingCart.addItem('cucumber', 10, 10);
console.log(shoppingCart);
shoppingCart.removeItem('cucumber');
console.log(shoppingCart);
shoppingCart.addItem('cucumber', 10, 10);
shoppingCart.updateQuantity('cucumber', 20);
console.log(shoppingCart);
console.log(shoppingCart.calculateTotal());
shoppingCart.clearCart();
console.log(shoppingCart);
