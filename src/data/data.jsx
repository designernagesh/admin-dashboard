import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }
]


const sidebarMenu = [
  {
    icon: <BsGrid1X2Fill className='icon' />, 
    name: "Dashboard"
  },

  {
    icon: <BsFillArchiveFill className='icon' />, 
    name: "Products"
  },

  {
    icon: <BsFillGrid3X3GapFill className='icon' />, 
    name: "Categories"
  },

  {
    icon: <BsPeopleFill className='icon' />, 
    name: "Customers"
  },

  {
    icon: <BsListCheck className='icon' />, 
    name: "Inventory"
  },

  {
    icon: <BsMenuButtonWideFill className='icon' />, 
    name: "Reports"
  },

  {
    icon: <BsFillGearFill className='icon' />,
    name: "Setting"
  }
];

  
const mainCards = [
  {
    title: 'PRODUCTS',
    icon: <BsFillArchiveFill className='card_icon' />,
    count: 350
  },
  {
    title: 'CATEGORIES',
    icon: <BsFillGrid3X3GapFill className='card_icon' />,
    count: 32
  },
  {
    title: 'CUSTOMERS',
    icon: <BsPeopleFill className='card_icon' />,
    count: 43
  },
  {
    title: 'ALERTS',
    icon: <BsFillBellFill className='card_icon' />,
    count: 82
  }
];

const barChart = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const lineChart = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default { data, sidebarMenu, mainCards, barChart, lineChart };