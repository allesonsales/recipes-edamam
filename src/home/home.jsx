
import { useContext } from "react"
import { providerContext } from "../provider"
import './style.css'

const Home = () => {
    const { recipes, setOpen, setCurrentRecipe, handleOpenModal } = useContext(providerContext)

   
    return (
        <>
        <div className="containerRecipe">
            {recipes ? (recipes.map(({recipe}, index) => (
                <div className="recipe" key={index} onClick={() => {handleOpenModal(recipe);}}>
                    <div className="background" style={{backgroundImage: `url(${recipe.image})`}}></div>
                    <div className="description">
                        <h3>{recipe.label}</h3>
                    </div>
                        <div className="time">
                            <i class="fa-regular fa-clock"></i>
                            <small>{recipe.totalTime} minutes</small>
                        </div>
                </div>
            ))
            ) : (
                <h2>carregando...</h2>
            )}
        </div>
        </>
    )
}

export default Home