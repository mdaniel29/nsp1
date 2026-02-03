export type AlbumType = {
    id: number;
    title: String;
    artist: String;
    cover?: String;
}

export type TrackType = {
    id: number;
    title: String;
    duration: number;
    albumId?: number
    //album    Album  @relation(fields: [albumId], references: [id])
}


