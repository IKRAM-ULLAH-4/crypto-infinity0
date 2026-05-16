import { createContext, useContext, useEffect, useState } from "react"


const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{

    const [bg , setbg ] = useState(()=>
    {
        const savedTheme = localStorage.getItem("Theme");

        return savedTheme === 'dark';
    });
    
    useEffect(()=>
    {
        if(bg)
            localStorage.setItem('Theme' , 'dark') 
        else 
            localStorage.setItem('Theme' , 'light')

    } , [bg]);

    return <>
    <ThemeContext.Provider value={{bg , setbg}}>

        {children}
    </ThemeContext.Provider>
    </>
}
export const useTheme = () => useContext(ThemeContext);   