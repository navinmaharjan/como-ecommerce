import Container from "./Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavUserMenu from "./NavUserMenu";
import ShopMenu from "./ShopMenu";

const Header = () => {
    return (
        <header className="absolute z-50 w-full">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <NavMenu />
                    <NavUserMenu />
                </div>
            </Container>
            {/* <ShopMenu /> */}
        </header>
    );
};

export default Header;
