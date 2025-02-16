import React, { useState } from "react";

import { data } from "../Data/Data";

const ProductSearch = () => {
  const [searchInput, setsearchInput] = useState("");
  const [findProduct, setfindProduct] = useState([]);
  const [selecItem, setSelectItem] = useState();

  const handleSearch = (event) => {
    let searchItem = event.target.value;
    setsearchInput(searchItem);

    if (searchItem) {
      let result = data.filter((product) =>
        product.country.toLowerCase().includes(searchItem.toLowerCase())
      );
      setfindProduct(result);
    } else {
      setfindProduct([]);
    }
  };

  const showItem = (item) => {
    setSelectItem(item);
    setfindProduct([]);
    setsearchInput("");
  };

  return (
    <div>
      <div className="Search_box">
        <input
          className="Search_inputfield"
          type="text"
          placeholder="Find people by search here..."
          value={searchInput}
          onChange={handleSearch}
        />
      </div>

      {findProduct.length > 0 && (
        <div className="Search_list_box">
          {findProduct.map((item) => (
            <li
              className="Search_list"
              key={item.id}
              onClick={() => showItem(item)}
            >
              {item.country}
            </li>
          ))}
        </div>
      )}

      {selecItem && (
        <div className="details_box">
          <h3>{selecItem.country}</h3>
          <p>{selecItem.details}</p>

          {/* <img
            className="mage_div"
            src={selecItem.image}
            alt={selecItem.image}
          /> */}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
