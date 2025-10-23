import Acomodacao from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>
      <hr className="my-3" />

      <main className="container mx-auto">
        <NavegacaoAbasHorizontal/>
        <Acomodacao/>
      </main>
      <footer className="container mx-auto">footer</footer>
    </>
  );
}
