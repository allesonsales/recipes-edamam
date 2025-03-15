import { useState, useEffect, useContext, createContext } from "react"
export const providerContext = createContext()

const Provider = ({children}) => {
    const [recipes, setRecipes] = useState(null)
    const [open, setOpen] = useState(false);
    const [currentRecipe, setCurrentRecipe] = useState(null)

    const handleOpenModal = (recipe) => {
        setCurrentRecipe(recipe)
        setOpen(true)
    }

    const blockScroll = () => {
        if(open) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }

    useEffect(() => {
        blockScroll()
    },[open])

    return (
        <providerContext.Provider value = {{ recipes, setRecipes, open, setOpen, setCurrentRecipe, currentRecipe, handleOpenModal }}>
            {children}
        </providerContext.Provider>
    )
}



export default Provider
