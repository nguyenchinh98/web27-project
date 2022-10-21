export const addToCart = (event) => {
  event.preventDefault();
  console.log(event.data);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = _.find(cart, { product: event.data.id });
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      product: event.data.id,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Thêm thành công sản phẩm vào giỏ hàng");
};
