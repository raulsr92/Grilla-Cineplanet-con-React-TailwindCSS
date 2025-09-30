
import pelicula1 from "../assets/img-cards/movie1.jpg"
import pelicula2 from "../assets/img-cards/movie2.jpg"
import pelicula3 from "../assets/img-cards/movie3.jpg"
import pelicula4 from "../assets/img-cards/movie4.jpg"
import pelicula5 from "../assets/img-cards/movie5.jpg"
import pelicula6 from "../assets/img-cards/movie6.jpg"
import pelicula7 from "../assets/img-cards/movie7.jpg"
import pelicula8 from "../assets/img-cards/movie8.jpg"

function HomeCinemark() {
    return(
        <>
            <main className="bg-[#12100d] w-full flex justify-center" >
                <section className="w-[75%] flex flex-col gap-y-6 py-8">
                    <h1 className="text-white uppercase font-bold text-[30px]">Películas en Cartelera</h1>

                    <article className=" grid grid-cols-4 text-black gap-[20px] ">
                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula1} alt="pelicula1-portada" className="w-full object-cover "/>
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-center gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">Descalzos</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula2} alt="pelicula2-portada" className="w-full object-cover" />
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">Hamilton</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula3} alt="pelicula3-portada" className="w-full object-cover" />
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">My Storylof</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula4} alt="pelicula4-portada" className="w-full object-cover"/>
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">Los extraños cap. 2</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula5} alt="pelicula5-portada" className="w-full object-cover" />
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">La casa de muñecas de Gabby</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>                            
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula6} alt="pelicula6-portada" className="w-full object-cover" />
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">Ne Zha 2</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>                          
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula7} alt="pelicula7-portada" className="w-full object-cover"/>
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">Una batalla tras otra</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>                          
                        </div>

                        <div className="bg-[#23211e] rounded-[15px] overflow-hidden shadow-md shadow-red-300">
                            <img src={pelicula8} alt="pelicula8-portada" className="w-full object-cover"/>
                            <div className="flex flex-col gap-y-[15px] py-[16px] px-[12px] text-white">
                                <div className="flex justify-between items-start gap-x-[4px]">
                                    <h3 className="uppercase font-extrabold text-[16px] h-[48px]">Together: juntos hasta la muerte</h3>
                                    <div className="bg-blue-600 py-[4px] px-[3px] rounded-[8px] flex justify-center items-center">
                                        <p className="text-[11px] font-bold">+14</p>
                                    </div>
                                </div>
                                <p>2D</p>
                                <a className="w-full bg-white hover:bg-gray-300 hover:text-blue-900 text-gray-700 rounded-[5px] py-[5px] pl-[8px]" href="">Estreno</a>
                            </div>                         
                        </div>
                    </article>
                </section>
            </main>


        </>
    )
    
}

export default HomeCinemark