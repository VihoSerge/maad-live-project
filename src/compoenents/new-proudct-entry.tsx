import React, { useState } from "react";

interface NewProductEntryProps {
  onNew: (productCount: number) => void;
}

function NewProductEntry({ onNew }: NewProductEntryProps) {
  const [productCount, setProductCount] = useState(0);

  const handleNew = () => {
    onNew(productCount);
    setProductCount(0);
  };

  const handleInputChange = (e: any) => {
    setProductCount(Number(e.target.value));
  };

  return (
    <div>
      <div>Ajouter un nouveau client</div>
      <div>
        <input
          type="number"
          min={0}
          placeholder="Nombre de produits"
          onChange={handleInputChange}
          value={productCount}
        />
        <button onClick={handleNew}>Ajouter</button>
      </div>
    </div>
  );
}

export default NewProductEntry;
