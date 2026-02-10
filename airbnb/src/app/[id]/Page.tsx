interface PageProps{
    id: string
}

export default async function Page({params} : {params: Promise<PageProps>}) {
  console.log(params)
  return (
    <div>
        Página de detalhes
    </div>
  );
}