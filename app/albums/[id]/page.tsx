//export const dynamic = "force-dynamic";
//export const runtime = "nodejs";
import prisma from "@/lib/prisma";
//import { getPrisma } from "@/lib/prisma";
import TracksList from "./TracksList"

export default async function AlbumPage({ params }: { params: { id: string } }) {
    //const prisma= await getPrisma();
    const { id } = await params;
    const album = await prisma.album.findUnique({
        where: { id: Number(id) },
    });

    if (!album) return <div>Album introuvable</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold">{album.title}</h1>
            <p className="text-gray-500">{album.artist}</p>
            <TracksList albumId={album.id} />
        </div>
    );
}

// SSR => on transmet les données récupérées par Prisma en utilisant un composant enfant (TrackList), et en mettant l'id de l'Album dans les props.
// L'enfant peut alors faire un fetch sur l'API en utilisant l'albumId => useEffect => useState => affichage dynamique de la liste des tracks
