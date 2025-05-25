import { Search, User, ShoppingCart } from 'lucide-react';

const NavUserMenu = () => {
  return (
    <div className='flex gap-4 text-white'>
        <Search />
        <User />
        <ShoppingCart />
    </div>
  )
}

export default NavUserMenu