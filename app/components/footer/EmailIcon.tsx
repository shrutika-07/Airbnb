import Image from "next/image";

interface EmailIconProps {
  src: string | null | undefined;
}

const EmailIcon: React.FC<EmailIconProps> = ({ src }) => {
  return (
    <Image
      height={30}
      width={30}
      alt="Avatar"
      src={src || "/images/gmail.png"}
    />
  );
};

export default EmailIcon;