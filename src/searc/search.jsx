import { useState, useEffect, useContext, createContext } from "react"
import { providerContext } from "../provider"
import './style.css'

const Search = () => {
    const {recipes, setRecipes} = useContext(providerContext)
    const [recipe, setRecipe] = useState("")
    const [submited, setSubmited] = useState(false)

    const handleRecipe = (event) => {
        setRecipe(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmited(true)
    }

    useEffect(() => {
        const APP_ID = 'f2b46080';
        const APP_KEY = '61ec159b89dbbd92c5bc6d11c62c50e8';
            fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data.hits)
                setSubmited(false)
            })
            .catch(error => console.error(error))
        }, [submited])

    return (
        <div className="searchContainer">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleRecipe} placeholder="Pesquise aqui sua receita..."/>
                <button type="submit" ><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default Search