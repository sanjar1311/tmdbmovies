import {useState, createContext} from 'react'

const Context = createContext()

function ContextProvider({children}) {

  const [theme, setTheme] = useState('dark')

  return(
    <Context.Provider value={{theme, setTheme, }}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}