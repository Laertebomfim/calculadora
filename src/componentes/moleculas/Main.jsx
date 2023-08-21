import NumarosMain from "../atomo/NumarosMain";

export default function Main (){

    return (
        <section>
            <div className="h-16 bg-cinza4 rounded-lg text-4xl font-bold text-branco p-4 text-right my-8">
                15
            </div>
            <article className="bg-cinza3 p-3 rounded-lg">
                <div className="grid grid-cols-4  gap-2 text-2xl font-medium auto-rows-[55px] ">
                    <NumarosMain Numero="7"/>   
                    <NumarosMain Numero="8"/>
                    <NumarosMain Numero="9"/>
                    <div className="flex justify-center items-center bg-cinza1 rounded-lg text-branco uppercase text-xl">del</div>
                    <NumarosMain Numero="4"/>
                    <NumarosMain Numero="5"/>
                    <NumarosMain Numero="6"/>
                    <div className="flex justify-center items-center bg-branco rounded-lg">+</div>
                    <NumarosMain Numero="1"/>
                    <NumarosMain Numero="2"/>
                    <NumarosMain Numero="3"/>
                    <div className="flex justify-center items-center bg-branco rounded-lg">-</div>
                    <div className="flex justify-center items-center bg-branco rounded-lg">.</div>
                    <NumarosMain Numero="0"/>
                    <div className="flex justify-center items-center bg-branco rounded-lg">/</div>
                    <div className="flex justify-center items-center bg-branco rounded-lg">x</div>
                    <div className="flex justify-center items-center bg-cinza1 rounded-lg text-branco col-span-2 uppercase text-xl">reset</div>
                    <div className="flex justify-center items-center bg-red1 rounded-lg text-branco col-start-3 col-span-2">=</div>
                </div>
            </article>
        </section>
    )
}