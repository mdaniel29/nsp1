"use client";

import { useEffect, useState } from "react";

export default function TracksList({ albumId }: { albumId: number }) {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/albums/${albumId}/tracks`)
      .then((res) => res.json())
      //.then(setTracks);
      .then((tr) => setTracks(tr));
  }, [albumId]);

  return (
    <>
      <ul className="mt-4">
        {tracks.map((t) => (
          <li key={t.id}>
            {t.title} ({t.duration}s)
          </li>
        ))}
      </ul>
      {/* <div><img src={`../images/${tracks.cover as string}`} /></div> */}
    </>
  );

}
