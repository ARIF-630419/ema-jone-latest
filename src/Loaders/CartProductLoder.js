import { getShoppingCart } from "../utilities/fakedb";

const CartProductLoader = async () => {
  const CardedProduct = await fetch("products.json");
  const products = await CardedProduct.json();

  const storedCard = getShoppingCart();
  const savedCard = [];
  for (const id in storedCard) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCard[id];
      addedProduct.quantity = quantity;
      savedCard.push(addedProduct);
    }
  }
  return savedCard;
};
export default CartProductLoader;
