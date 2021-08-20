const totalPrice = (favorites) => {
  let total = 0;
  for (let i = 0; i < favorites.length; i++) {
    const currentValue = favorites[i].count;
    const price = favorites[i].price;
    const result = currentValue * price;
    total += result;
  }
  return total;
};

export default totalPrice;
