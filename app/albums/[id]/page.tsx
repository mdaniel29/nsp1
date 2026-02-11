import prisma from "@/lib/prisma";
import TracksList from "./TracksList"


export default async function AlbumPage({ params }: { params: { id: string } }) {
    //const prisma= await getPrisma();



    const { id } = await params ?? 1;
    let album = { id: id, title: "titre_defaut", artiste: "artist_default", cover: "cover_default" }   
    let safeAlbum = { ...album, id: Number(id) }; // conversion Bigint => int
    
    // cas environnement de développement
    if (process.env.NODE_ENV === 'development' && !process.env.CI) {
        album = { id: '1', title: "titre1", artiste: "artist1", cover: "cover1" }
        safeAlbum = { ...album, id: Number(id) }; // conversion Bigint => int
        return (<div>

        </div>)
    }
    else { // production env.

        const album = await prisma.album.findUnique({
            where: { id: Number(id) },
        });

        if (!album) return <div>Album introuvable</div>;
        const safeAlbum = { ...album, id: Number(id) }; // conversion Bigint => int
        console.log("album id : ", album.id);    // DEBUG
        console.log("safeAlbum id : ", safeAlbum.id); // DEBUG

        return (
            <div>
                <h1 className="text-2xl font-bold">{album.title}</h1>
                <p className="text-gray-500">{album.artist}</p>
                <TracksList albumId={safeAlbum.id} />
            </div>
        );
    }
}
// SSR => on transmet les données récupérées par Prisma en utilisant un composant enfant (TrackList), et en mettant l'id de l'Album dans les props.
// L'enfant peut alors faire un fetch sur l'API en utilisant l'albumId => useEffect => useState => affichage dynamique de la liste des tracks
