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

export const decreaseCartQty = (cartItem,removeItem) =>{
  const existingItem = cartItem.find(item => item.id == removeItem.id)

  if(existingItem.quantity == 1){
    return cartItem.filter(item => item.id != removeItem.id)
  }else{
    return cartItem.map(item=>item.id == removeItem.id ? {...item,quantity:item.quantity - 1} : item)
  }
}