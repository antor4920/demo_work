import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: "$999",
    description: "Latest Apple smartphone.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "$899",
    description: "Flagship Samsung phone.",
  },
  {
    id: 3,
    name: "MacBook Air",
    price: "$1199",
    description: "Lightweight Apple laptop.",
  },
  {
    id: 4,
    name: "Sony Headphones",
    price: "$199",
    description: "Noise-canceling headphones.",
  },
];

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const search = (e) => {
    let valuess = e.target.value;
    setQuery(valuess);

    if (valuess) {
      const results = products.filter((item) =>
        item.name.toLowerCase().includes(valuess.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSelect = (product) => {
    setQuery("");
    setSelectedProduct(product);
    setFilteredProducts([]);
  };

  console.log(filteredProducts);

  return (
    <div>
      <input
        type="text"
        placeholder="search people by name...."
        value={query}
        onChange={search}
      />
      {filteredProducts.length > 0 && (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index} onClick={() => handleSelect(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}

      {selectedProduct && (
        <div>
          <h1>{selectedProduct.name}</h1>
          <p>{selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
