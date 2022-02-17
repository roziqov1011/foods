import { createContext, useState } from "react";
const Context = createContext();
function Provider ({children}) {
    const [orderFoods, setOrderFoods] = useState([]);
    return(
        <>
            <Context.Provider value={{orderFoods, setOrderFoods}}>{children}</Context.Provider>
        </>
    )
}
export {
    Provider,
    Context
} ;