interface BotaoIconeProps{
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoIcone = (props: BotaoIconeProps) => {
    return(
        <button className="rounded-xl border-2 border-gray-200 flex items-center
        px-4 py-2 hover:border-gray-400 cursor-pointer gap-1">
            <span>{props.icone}</span>
            <span>{props.children}</span>
        </button>
    )
}

export default BotaoIcone