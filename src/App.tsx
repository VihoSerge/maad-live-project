import { useEffect, useState } from "react";
import NewProductEntry from "./compoenents/new-proudct-entry";

const TIME = 1000;
const PRODUCTS_PER_TIME = 1;

const defaultData = [
  {
    id: 1,
    products: 0,
  },
  {
    id: 2,
    products: 0,
  },
  {
    id: 3,
    products: 0,
  },
  {
    id: 4,
    products: 0,
  },
  {
    id: 5,
    products: 0,
  },
];

const findCheckoutWithLessProducts = (checkout: any[]) => {
  let index = 0;

  for (let i = 1; i < checkout.length; i++) {
    if (checkout[index].products > checkout[i].products) {
      index = i;
    }
  }

  return index;
};

function App() {
  const [checkout, setCheckout] = useState(defaultData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("time");
      setCheckout((prev) =>
        prev.map((item) => ({
          ...item,
          ...(item.products > 0
            ? { products: item.products - PRODUCTS_PER_TIME }
            : {}),
        }))
      );
    }, TIME);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleNew = (count: number) => {
    const emptyCheckoutIndex = findCheckoutWithLessProducts(checkout);

    const prevData = [...checkout];
    prevData[emptyCheckoutIndex].products += count;

    setCheckout(prevData);
  };

  return (
    <div className="p-10 space-y-10">
      <NewProductEntry onNew={handleNew} />

      {/* caisse */}

      <div className="space-y-5">
        {checkout.map((item) => (
          <div className="p-5 bg-gray-100 rounded-sm shadow-md">
            <div className="font-bold">Caisse : {item?.id}</div>
            <div>Produits restant : {item.products}</div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default App;
