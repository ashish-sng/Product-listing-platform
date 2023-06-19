const { createContext, useState } = require("react");

const ProductContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  products: [],
  setProducts: () => {},
  signupPopup: false,
  setSignupPopup: () => {},
  popup: false,
  setPopup: () => {},
});

const Provider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signupPopup, setSignupPopup] = useState(loggedIn);
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState(false);

  const valueToShare = {
    loggedIn,
    setLoggedIn,
    products,
    setProducts,
    signupPopup,
    setSignupPopup,
    popup,
    setPopup,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
};

export { Provider };

export default ProductContext;
