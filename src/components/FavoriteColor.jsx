
import { useState } from "react"

function FavoriteColor() {

    const [color, setColor] = useState("azúl")

    return(
        <>


            <h1>Mi color favorito es: {color} </h1>

            {/*Actualizamos el valor del botón*/}

            <button
                type="button"
                onClick={()=>{

                    if(color==="azúl"){
                        setColor("red")
                    }else{
                        setColor("azúl")
                    }
                    
                }}>

                Cambiar color
            </button>
        
        </>
    )
    
}

export default FavoriteColor