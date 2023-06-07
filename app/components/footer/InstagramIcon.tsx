'use client';

import Image from "next/image";

interface InstagramProps {
    src: string | null | undefined;
};

const InstagramIcon: React.FC<InstagramProps> = ({
    src
}) => {
    return(
        <Image className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={src || "/images/instagram.png"}/>
    );
}

export default InstagramIcon;