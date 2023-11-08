import ButtonAddItem from "../../ui/ButtonAddItem";

function CartItem({ item }: { item: any }) {
  console.log(item);

  return (
    <div className="grid items-center gap-6 border-b-2 p-3 md:grid-cols-[1fr_auto]">
      <div className="flex items-center justify-between">
        <p className="text-center">
          {item.quantity}× {item.name}
        </p>
        <p>₽{item.unitPrice}</p>
      </div>
      <div className="text-right">
        <ButtonAddItem item={item} />
      </div>
    </div>
  );
}

export default CartItem;
