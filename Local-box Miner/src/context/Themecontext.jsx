import { createContext, useState } from "react";

export const ThemeContext=createContext()

export  function ThemecontextProvider({
    children
}){

   const[theme,settheme]=useState("light")
   function Themechange(){
    settheme(theme==="light"?"dark":"light")
   }


    return(
        <ThemeContext.Provider value={{theme,Themechange}} >
            {children}
        </ThemeContext.Provider>
    )
}