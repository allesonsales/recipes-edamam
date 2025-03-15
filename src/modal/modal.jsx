import { useContext, useState } from "react"
import { providerContext } from "../provider"
import './style.css'

const Modal = () => {
    const { recipes, open, setOpen, currentRecipe } = useContext(providerContext)
    

    if (!open) return null
    
    return(
        <div className="backgroundModal" onClick={() => setOpen(false)}>
            {currentRecipe && (
                <div className="modalContent">
                    <div className="image" style={{ backgroundImage: `url(${currentRecipe.image})`}}>
                    </div>
                    <div className="descriptionModal">
                        <h2>{currentRecipe.label}</h2>
                        <ul>
                            {currentRecipe.ingredientLines.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                        <span>{currentRecipe.totalTime} Minutes</span>
                    </div>
                    <div className="close" onClick={() => setOpen(false)}>
                    <i class="fa-solid fa-circle-xmark"></i>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal