// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  // TODO: implement
  return { ...item, price };
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
    // TODO: implement
    return [...cart, item];
  };


module.exports = { setPrice, addToCart };
