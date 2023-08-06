import{ BsFillBellFill,  BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsSearch } from 'react-icons/bs';

const Header = ({ menuHandler }) => {
    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className='icon' onClick={ menuHandler } />
            </div>
            <div className="header-left">
                <BsSearch className='icon' />
            </div>
            <div className="header-right">
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />
            </div>
        </header>
    )
}

export default Header;