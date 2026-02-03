export const dynamic = "force-dynamic";
export const runtime = "nodejs";
//import { getPrisma } from "@/lib/prisma";
import RenderImage from "./RenderImage";
import { AlbumType } from "../types";
import prisma from "@/lib/prisma";

export default async function AlbumsPage() {

    //const prisma = await getPrisma();

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
                {albums && albums.map((a: AlbumType) => (
                    <li key={a.id} className="m-2 mb-3">
                        <a href={`/albums/${a.id}`} className="hover:underline text-blue-700 mb-2">{a.title} — {a.artist}</a>
                        {a.id && <RenderImage key={a.id} urlImg={"/images/"+a.cover} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}
