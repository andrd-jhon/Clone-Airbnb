import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior"


export default function Home() {
  return (
    <>
      <BarraSuperior/>
      <BarraPesquisa/>
      <hr className="mt-5"/>
      <div className="border-green-600 border-2">main</div>
      <div className="border-purple-600 border-2">footer</div>
    </>
  );
}
