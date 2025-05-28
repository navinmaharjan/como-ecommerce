"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavUserMenu from "./NavUserMenu";

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const headerRef = useRef(null);

    // useEffect(() => {
    //     if (isCartOpen || isSearchBarOpen) {
    //         const scrollbarWidth =
    //             window.innerWidth - document.documentElement.clientWidth;

    //         document.body.style.overflow = "hidden";
    //         document.body.style.paddingRight = `${scrollbarWidth}px`;

    //         // Direct reference to current header
    //         if (headerRef.current) {
    //             headerRef.current.style.paddingRight = `${scrollbarWidth}px`;
    //         }
    //     } else {
    //         document.body.style.overflow = "";
    //         document.body.style.paddingRight = "";

    //         if (headerRef.current) {
    //             headerRef.current.style.paddingRight = "";
    //         }
    //     }

    //     return () => {
    //         document.body.style.overflow = "";
    //         document.body.style.paddingRight = "";

    //         if (headerRef.current) {
    //             headerRef.current.style.paddingRight = "";
    //         }
    //     };
    // }, [isCartOpen, isSearchBarOpen]);
    
    return (
        <header ref={headerRef} className="bg-primary w-full sticky top-0 z-50 shadow-xl">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <NavMenu />
                    <NavUserMenu
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}
                        isSearchBarOpen={isSearchBarOpen}
                        setIsSearchBarOpen={setIsSearchBarOpen}
                    />
                </div>
            </Container>
        </header>
    );
};

export default Header;
