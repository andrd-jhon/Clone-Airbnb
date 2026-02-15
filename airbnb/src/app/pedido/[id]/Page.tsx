import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Rodape from "@/widgets/Rodape";

interface PageProps {
  id: string;
}

export default async function Home({ params }: { params: Promise<PageProps> }) {
  const dados = await params;

  return (
    <div>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <main className="container mx-auto">CONTEUDO AQUI!</main>

      <footer className="bg-gray-200">
        <Rodape />
      </footer>
    </div>
  );
}
