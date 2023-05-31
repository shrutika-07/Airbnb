'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
    currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log({ currentUser });
    return (
        <div className="fixed w-full px-12 bg-white z-10 shadow-sm">
            <div className="py-2 border-b-[1 px]">
            </div>
            <Container>
                <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0"
                >
                    <Logo/>
                    <Search/>
                    <UserMenu currentUser = {currentUser}/>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;