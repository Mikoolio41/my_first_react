import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <Link to={'/'}>home</Link><span>            </span>
            <Link to={'/about'}>About</Link><span>           </span>
            <Link to={'/shop'}>Shop</Link>
        </>
    )

}

export default Nav;