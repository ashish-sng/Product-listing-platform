const { createContext, useState } = require("react");

const ProductContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

const Provider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  const valueToShare = {
    loggedIn,
    setLoggedIn,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
};

export { Provider };

export default ProductContext;
