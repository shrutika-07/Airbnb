'use client';

import Image from "next/image";

interface LinkedInProps {
    src: string | null | undefined;
};

const LinkedInIcon: React.FC<LinkedInProps> = ({
    src
}) => {
    return(
        <Image
            height="30"
            width="30"
            alt="Avatar"
            src={src || "/images/linkedin.png"}/>
    );
}

export default LinkedInIcon;