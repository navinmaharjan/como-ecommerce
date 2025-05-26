"use client"

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavUserMenu from "./NavUserMenu";
import ShopMenu from "./ShopMenu";

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        if (isCartOpen) {
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth;

            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;

            // Direct reference to current header
            if (headerRef.current) {
                headerRef.current.style.paddingRight = `${scrollbarWidth}px`;
            }
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";

            if (headerRef.current) {
                headerRef.current.style.paddingRight = "";
            }
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";

            if (headerRef.current) {
                headerRef.current.style.paddingRight = "";
            }
        };
    }, [isCartOpen]);
    return (
        <header ref={headerRef} className="absolute z-50 w-full">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <NavMenu />
                    <NavUserMenu isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
