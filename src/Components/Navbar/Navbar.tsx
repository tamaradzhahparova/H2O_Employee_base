import s from './Navbar.module.scss'
import LogoIcon from "../../Icons/LogoIcon";
import {NavIcon1, NavIcon2, NavIcon3, NavIcon4, NavIcon5, NavIcon6, NavIcon7} from "../../Icons/NavIcons";

const navIcons = [
  <NavIcon1/>,
  <NavIcon2/>,
  <NavIcon3/>,
  <NavIcon4/>,
  <NavIcon5/>,
  <NavIcon6/>,
  <NavIcon7/>,
]

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <a href='/' className={s.logo}>
          <LogoIcon/>
        </a>
        <ul className={s.navList}>
          {navIcons.map(icon => <li className={s.navItem}>
            <button>
              {icon}
            </button>
          </li>)}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar