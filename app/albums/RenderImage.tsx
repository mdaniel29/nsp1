'use client'
import { useEffect, useState } from "react";

export interface IurlImg {
    urlImg: string;
}

const RenderImage = ({ urlImg }: IurlImg) => {

    const [showImg, setShowImg] = useState<string|null>(null);
    useEffect(() => {
        setShowImg(urlImg);
    }, [])

    return (
        <div>
            {showImg && <img src={showImg} className="max-w-40"/>}
        </div>
    )
}

export default RenderImage


