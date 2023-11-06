import Button from "../../ui/Button";

function MenuItem({ item }) {
  console.log(item);
  return (
    <div
      className={`relative rounded-xl bg-white shadow-lg ${
        item.soldOut ? "grayscale" : ""
      }`}
    >
      <div className="relative">
        <span className="absolute right-3 top-3 rounded-lg bg-yellow-50 px-3 py-1 text-yellow-700">
          ${item.unitPrice}
        </span>
        <img
          className="w-full rounded-t-xl"
          src={item.imageUrl}
          alt={item.name}
        />
      </div>
      <div className=" px-3 pb-16 pt-3">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="capitalize">{item.ingredients.join(", ")}</p>

        {!item.soldOut && (
          <div className="absolute bottom-2 right-2">
            <Button type="small">Add to cart</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
