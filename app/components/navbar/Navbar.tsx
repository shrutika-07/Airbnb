'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
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
                    <UserMenu/>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;