const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 8 + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

console.log(getDefaultCart())