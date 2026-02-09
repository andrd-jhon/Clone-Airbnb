interface PageProps{
    id: string
}

export default async function Home(param: Promise<PageProps>) {
    console.log("teste")
    console.log(param)
  return (
    <div>
        Página de detalhes
    </div>
  );
}