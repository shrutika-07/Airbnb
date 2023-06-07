'use client';

import Image from "next/image";

interface GithubIconProps {
    src: string | null | undefined;
};

const GithubIcon: React.FC<GithubIconProps> = ({
    src
}) => {
    return(
        <Image
            height="30"
            width="30"
            alt="Avatar"
            src={src || "/images/github.png"}/>
    );
}

export default GithubIcon;