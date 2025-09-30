
import pelicula1 from "../assets/img/conjuro4.png"
import pelicula2 from "../assets/img/deamon.jpg"
import pelicula3 from "../assets/img/extranos.jpg"
import pelicula4 from "../assets/img/gaby.jpg"
import pelicula5 from "../assets/img/hamilton.jpg"

function LayoutCine() {

    return(
        <>
            <section className="w-full bg-gray-200 flex flex-col items-center py-14 gap-y-6 ">
                <h2>Películas</h2>

                <article className="flex w-[58%] h-[600px] flex-wrap">

                    <div className="bg-amber-300  h-full basis-[44%] mr-[1%]">
                        <img src={pelicula1} alt=""  className="h-full w-full object-cover"/>
                    </div>

                    <div className="flex flex-col basis-[19%] mr-[1%] h-full gap-y-2 ">
                        <div className="bg-blue-400 basis-[100%] h-1/2">
                            <img src={pelicula2} alt="" className="h-full w-full object-cover" />
                        </div>

                        <div className="bg-cyan-400 basis-[100%] h-1/2">
                            <img src={pelicula5} alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="flex basis-[35%] flex-wrap h-full gap-y-2 overflow-hidden">

                        <div className="bg-green-300 basis-[100%] h-[69%]">
                            <img src={pelicula4} alt="" className="h-full w-full object-cover"/>
                        </div>

                        <div className="bg-indigo-400 basis-[48%] mr-[2%] h-[30%] " > 
                            <img src={pelicula3} alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="bg-red-600 basis-[50%] h-[30%] flex items-center justify-center text-white text-2xl" >
                                <p className="text-center font-bold">Ver más películas</p>
                        </div>
                    </div>
                    
                </article>
            </section>

        </>
    )
    
}

export default LayoutCine