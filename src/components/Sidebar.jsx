import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

import data from '../data/data';

const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 /> Dashboard
                </div>
                <span className="icon close_icon"></span>
            </div>
            <ul className="sidebar-list">
                {
                    data.sidebarMenu.map((item, i) => {
                        return (
                                <li className='sidebar-list-item'>
                                    <a href="">
                                        {item.icon}  {item.name}
                                    </a>
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;