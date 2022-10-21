export const addToCart = (event) => {
  event.preventDefault();
  console.log(event.data);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = _.find(cart, { product: event.data.id });
  if (item) {
    item.quantily += 1;
  } else {
    cart.push({
      product: event.data.id,
      quantily: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
