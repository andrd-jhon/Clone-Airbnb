import Logo from "@/components/Logo/Logo"
import Link from "next/link"

const BarraSuperior = () => {
    return (
        <div className="py-6 container mx-auto flex justify-between items-center">
          <Logo/>
          <div className="flex gap-6">
            <Link href={'/'} className="font-semibold">Acomodações</Link>
            <Link href={'/'} className="opacity-55">Experiências</Link>
          </div>
          <button className="rounded-md border-2 border-gray-300 px-2 py-0.5">Entrar</button>
        </div>
    )
}

export default BarraSuperior