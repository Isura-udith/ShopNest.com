import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const activeStyle = "underline underline-offset-4";

export const NavBar = () => {

    const context = useContext(Context);

    return (
        <nav className='fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light fondo'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg font-semibold'>
                    <NavLink to='/' onClick={() => context.setSearchByCategory()}>ShopNest.com</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/laptops'
                        onClick={() => context.setSearchByCategory('laptops')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Laptops
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/tablets'
                        onClick={() => context.setSearchByCategory('tablets')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Tablets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/cameras'
                        onClick={() => context.setSearchByCategory('cameras')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Cameras
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/headphones'
                        onClick={() => context.setSearchByCategory('headphones')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Headphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/cellphones'
                        onClick={() => context.setSearchByCategory('cellphones')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Cellphones
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/accessories'
                        onClick={() => context.setSearchByCategory('accessories')}
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Accessories
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    shop@email.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({isActive}) => isActive ? activeStyle : undefined}>My orders</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/account' className={({isActive}) => isActive ? activeStyle : undefined}>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>Sign in</NavLink>
                </li> */}
                <li className='flex'>
                    <NavLink to='/cart-shopping' className={({isActive}) => isActive ? activeStyle : undefined}>
                        <ShoppingCartIcon className='w-5 h-5 text-black'></ShoppingCartIcon>
                    </NavLink>
                    {
                        context.productsCount === 0 ?
                            <div className='flex items-center justify-center text-xs font-semibold'>{context.productsCount}</div>
                            :
                            <div className='flex items-center justify-center w-5 h-5 text-xs font-semibold bg-green-100 rounded-full'>{context.productsCount}</div>
                    }
                </li>
            </ul>
        </nav>
    )
};