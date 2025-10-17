import { IconSearch } from "@tabler/icons-react"

const BarraPesquisa = () => {
    return (
        <div className="border-1 border-gray-200 flex items-center rounded-full px-3 py-2 w-full max-w-2xl mx-auto shadow-lg shadow-gray-200 overflow-clip">
            <input type="text" placeholder="Digite sua pesquisa" className="w-full focus:outline-none px-3"/>
            <button className="bg-red-600 rounded-full p-2">
                <IconSearch aria-label="Pesquisa" size={32} color="white"></IconSearch>
            </button>
        </div>
    )
}

export default BarraPesquisa