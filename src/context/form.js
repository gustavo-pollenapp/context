import React from 'react'

export const HoverContext = React.createContext()

export const HoverContextProvider = ({ children }) => {
    const [id, setId] = React.useState(null)
    const value = { id, setId }
    return (
        <HoverContext.Provider value={value}>{children}</HoverContext.Provider>
    )
}
