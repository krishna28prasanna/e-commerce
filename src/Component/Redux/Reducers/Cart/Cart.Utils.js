export const handleCartQty = (cartItem, addItem) => {
  const existing = cartItem.find((item) => item.id == addItem.id);
  if (existing) {
    return cartItem.map((item) =>
      item.id == addItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItem, { ...addItem, quantity: 1 }];
};

export const removeCartItem = (cartItem, removeItem) => {
  return cartItem.filter((item) => item.id != removeItem);
};
