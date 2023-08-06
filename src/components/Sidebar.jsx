import { BsCart3 } from 'react-icons/bs';

import data from '../data/data';

const Sidebar = ({ showSidebar, menuHandler }) => {
    return (
        <div className={ showSidebar ? "sidebar-responsive" : "" } id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 /> Dashboard
                </div>
                <span className="icon close_icon" onClick={ menuHandler }>X</span>
            </div>
            <ul className="sidebar-list">
                {
                    data.sidebarMenu.map((item, i) => {
                        return (
                                <li className='sidebar-list-item' key={i}>
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