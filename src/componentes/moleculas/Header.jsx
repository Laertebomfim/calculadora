import HeaderBotao from "../atomo/HeaderBotao";
export default function Header() {
    const objetoNumero =  [
        {id:1},
        {id:2},
        {id:3},
    ]
    return (
      <section className="flex justify-between">
        <article className="flex items-center">
          <p className="text-3xl text-branco font-bold">calc</p>
        </article>
        <article className="flex w-1/2 max-w-[200px] justify-between">
            <div className="flex items-end">
                <p className="text-branco text-xl">theme</p>
            </div>
          <div className="grid grid-cols-3 w-1/2">

            {objetoNumero.map((e)=>(
                <div key={e.id} className="text-center text-branco" >{e.id}</div>
            ))}

            <div className=" h-7 col-span-3 bg-cinza3 rounded-full px-2  flex justify-between">
              <HeaderBotao />
            </div>
          </div>
        </article>
      </section>
    );
  }