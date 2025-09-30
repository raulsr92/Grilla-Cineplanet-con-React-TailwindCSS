

function HomeCinemark() {
    return(
        <>
            <main className="bg-black w-full flex justify-center" >
                <section className="w-[75%] flex flex-col gap-y-6 py-8">
                    <h1 className="text-white uppercase font-bold text-[30px]">Películas en Cartelera</h1>

                    <article className=" grid grid-cols-4 text-black">
                        <div className="bg-amber-100 ">
                            Card1
                        </div>

                        <div className="bg-amber-100">
                            Card2
                        </div>

                        <div className="bg-amber-100">
                            Card3
                        </div>

                        <div className="bg-amber-100">
                            Card4
                        </div>

                        <div className="bg-amber-100">
                            Card5
                        </div>

                        <div className="bg-amber-100">
                            Card6
                        </div>

                        <div className="bg-amber-100">
                            Card7
                        </div>

                        <div className="bg-amber-100">
                            Card8
                        </div>
                    </article>
                </section>
            </main>


        </>
    )
    
}

export default HomeCinemark