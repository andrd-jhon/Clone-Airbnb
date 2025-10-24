import { IconHeartFilled, IconStarFilled } from "../../assets/icones"

interface AcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHospedes: boolean
}

const Acomodacao = ({
    children,
    local,
    anfitriao,
    data,
    preco,
    avaliacao,
    prefeirodHospedes
}: AcomodacaoProps) => {
    return (
        <figure className="relative">
            <div className=" p-2 absolute w-full flex flex-row justify-between items-center">
                <span className="bg-white rounded-full px-4 py-1 border-1 font-semibold">Preferido dos hóspedes</span>
                <IconHeartFilled 
                aria-label="Favoritos" 
                size={30}
                className="stroke-white opacity-80"></IconHeartFilled>
            </div>
            {children}
            <figcaption className="pt-2">
                <div className="flex flex-row justify-between py-2">
                    <span className="font-semibold">{local}</span>
                    <div className="flex flex-row gap-2">
                        <IconStarFilled 
                            aria-label="Avaliações" 
                            size={20}
                            className="stroke-white opacity-80"></IconStarFilled>
                        <span className="font">{avaliacao}</span>
                    </div>
                </div>
                <div>
                    Anfitriã(o): {anfitriao}
                </div>
                <div>
                    {data}
                </div>
                <div
                className="font-semibold">
                    R$ {preco}
                </div>
            </figcaption>
        </figure>
    )
}

export default Acomodacao