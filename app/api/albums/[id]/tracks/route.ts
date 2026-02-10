import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export type Context = {
  params: Promise<{ id: string }>
}

//export async function GET(req: Request, {params}: {params: {id : string}}) {
export async function GET(req: Request, { params }: Context) {
  const {id} = await params
  console.log("**************************** id : ", id);

  try {
    const tracks = await prisma.track.findMany({
      where: { albumid: BigInt(id) },
    });
    
    const safeTracks = tracks.map((item) => ({
      ...item, id: Number(item.id), duration: Number(item.duration), albumid: Number(item.albumid) 
    }));
    // modif du typage BigInt => int en utilisant l'opérateur de Cast Number() pour chaque proriété de type BigInt,
    // sinon problème avec json stringify - Destructuration et update de l'objet tracks 
    
    return NextResponse.json(safeTracks);
  }
  catch (err) {
    console.log("Erreur albums/[id]/tracks/route.ts, err : ", err)
    return NextResponse.redirect('http://127.0.0.1:3000/albums'); // TODO: mettre en process.env
  }
}

// TODO: implémenter function POST
