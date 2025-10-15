import BarraSuperior from "@/widgets/BarraSuperior"


export default function Home() {
  return (
    <>
      <BarraSuperior/>
      <hr />
      <div className="border-green-600 border-2">main</div>
      <div className="border-purple-600 border-2">footer</div>
    </>
  );
}
