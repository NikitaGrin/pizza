import ButtonAddItem from "../../ui/ButtonAddItem";

function CartItem({ item }: { item: any }) {
  console.log(item);

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-6 border-b-2 p-3">
      <div className="flex justify-between">
        <p>
          {item.quantity}× {item.name}
        </p>
        <p>₽{item.unitPrice}</p>
      </div>
      <ButtonAddItem item={item} />
    </div>
  );
}

export default CartItem;
