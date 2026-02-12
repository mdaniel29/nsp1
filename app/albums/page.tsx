
import RenderImage from "./RenderImage";
import prisma from "@/lib/prisma";
import { Prisma } from "../generated/prisma/client";

export async function getServerSideProps() {
  // En développement, retourne des données mockées
  if (process.env.NODE_ENV === 'development' && !process.env.CI) {
    return {
      props: {
        albums: [{ id: 1, title: "titre", artiste: "artist", cover: "cover" }],
      },
    };
  }

  // En production, récupère les données depuis la base
  const albums = await prisma.album.findMany();
  return {
    props: {
      albums: JSON.parse(JSON.stringify(albums)), // Convertit les BigInt en nombres
    },
  };
}

export default async function AlbumsPage() {

    async function getImage(albumId: number): Promise<string> {
        const albumImg = await prisma.album.findFirst({ where: { id: albumId }, select: { cover: true } })
        //console.log("Dans la function getImage(), albumImg : ", albumImg)
        if (!albumImg) throw new Error("Image introuvable")
        const image = `/images/${albumImg.cover}`;
        return image;
    }

        const albums = await prisma.album.findMany();
        return (
            <div>
                <h1 className="text-2xl mb-4">Albums</h1>
                <ul className="">
                    {albums && albums.map((a: Prisma.albumModel) => (
                        <li key={a.id} className="m-2 mb-3">
                            <a href={`/albums/${a.id}`} className="hover:underline text-blue-700 mb-2">{a.title} — {a.artist}</a>
                            {a.id && <RenderImage key={a.id} urlImg={"/images/" + a.cover} />}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

