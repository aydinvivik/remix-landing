import React, { useReducer } from "react";

const actions = {
  SET_THEME_COLOR: 'SET_THEME_COLOR'
}

export const defaultContext = {
  themeColor: 'theme.colors.violet[0]',
  loading: false
}

const AppContext = React.createContext(defaultContext)
export default AppContext;

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload,
      }
    default:
      break
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}