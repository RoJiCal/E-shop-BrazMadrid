import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.js";

//1.Context erstellen

const InitialContext = createContext();

//2. ParentContext Komponent erstellen
export function ParentContext({ children }) {
  const navigate = useNavigate();

  //Variablen
  const [menu, setMenu] = useState(true);
  const show1 = menu ? "carts show" : "carts";
  const show2 = menu ? "cart show" : "cart";

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([...data.items]);

  //Speichern in LocalStore

  // useEffect(()=>{
  //     const dataCart = JSON.parse(localStorage.getItem("dataCart"))

  //     if(dataCart){
  //         setCart(dataCart)
  //     }
  // }, [])

  // useEffect(()=>{
  //     localStorage.setItem("dataCart", JSON.stringify(cart))
  // }, [cart])

  //Fuctionen

  //Schließen
  const toggleClose = () => {
    setMenu(false);
    navigate("/products");
  };
  //Öffnen
  const toggleOpen = () => {
    setMenu(true);
  };

  // Neue ID generieren.            
  //=>Hier
  // Helpers
  const generateId = () => {
    return "id" + new Date().getTime();
  };
  //Artikel mit ID in den Cart legen.
  const addCart = (id) => {
    // console.log("add card called", id);

    const data = products.find((product) => {
      return product.id === id;
    });

    // data.cartEntryId = generateId();
    const newCartState = [...cart, { ...data, cartEntryId: generateId(), selectedSize: 'S' }];
    
    setCart(newCartState);
  };

  // Löschen den Artikel aus dem Cart mit der neuen ID, die wir in (generateId) erstellt haben =>
  const removeItemCart = (entryId) => {
    const updatedCart = cart.filter((entry) => {
      return entry.cartEntryId !== entryId;
    });

    setCart(updatedCart);
  };

  

  //Values in Object
  let value = {
    data,
    menu,
    setMenu,
    show1,
    show2,
    toggleClose,
    toggleOpen,
    cart,
    setCart,
    addCart,
    products,
    setProducts,
    removeItemCart,
  };
  //Koponents

  return (
    <InitialContext.Provider value={value}>{children}</InitialContext.Provider>
  );
}

//3.Store Inizialisieren
const Store = () => useContext(InitialContext);
export default Store;
