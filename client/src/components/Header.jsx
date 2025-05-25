import Container from './Container'
import Logo from './Logo'
import NavMenu from './NavMenu'
import NavUserMenu from './NavUserMenu'


const Header = () => {
    return (
        <header className='py-4 absolute  z-10 w-full'>
            <Container>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <NavMenu />
                    <NavUserMenu />
                </div>
            </Container>
        </header>
    )
}

export default Header