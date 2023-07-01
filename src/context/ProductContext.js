const { createContext, useState } = require("react");

const ProductContext = createContext();

const Provider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signupPopup, setSignupPopup] = useState(true);
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState(false);
  const [selected, setSelected] = useState("likes");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [editPopup, setEditPopup] = useState(false);
  const [editId, setEditId] = useState("");

  const valueToShare = {
    loggedIn,
    setLoggedIn,
    products,
    setProducts,
    signupPopup,
    setSignupPopup,
    popup,
    setPopup,
    selected,
    setSelected,
    category,
    setCategory,
    selectedCategory,
    setSelectedCategory,
    editPopup,
    setEditPopup,
    editId,
    setEditId,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
};

export { Provider };

export default ProductContext;
