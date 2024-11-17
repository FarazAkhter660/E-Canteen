import React from "react";

const Menu = ({ menu, onAddToCart }) => {
  return (
    <div>
      <h1>Menu</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {menu.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              maxWidth: "200px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3>{item.name}</h3>
            <button
              onClick={() => onAddToCart(item)}
              style={{
                marginTop: "8px",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
