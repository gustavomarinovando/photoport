import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import hiddenMenuIcon from '../../assets/images/burger-passive.png'
import activeMenuIcon from '../../assets/images/burger-active.png'
import Socials from './Socials'
import CSS from 'csstype'

const activeMenuStyles: CSS.Properties = {
  textDecoration: 'none',
  color: 'rgb(37, 99, 235)',
}

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true)
  const ref = useRef<HTMLImageElement>(null)

  function ToggleMenu() {
    setHiddenMenu(!hiddenMenu);
  }
  function RemoveMenu() {
    setHiddenMenu(true)
    window.scrollTo(0, 0)
  }

  return (
    <header className="sm:relative flex flex-col min-h-screen sm:col-span-1 md:col-span-2 items-center absolute" style={{ paddingTop: '0vh' }}>
      <img
        className="burger-icon w-10 fixed cursor-pointer md:hidden z-50 sm:ml-2 ml-12"
        onClick={ToggleMenu}
        ref={ref}
        src={hiddenMenu ? hiddenMenuIcon : activeMenuIcon}
        alt="Toggle menu"
      />
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden md:flex `}
      >
        <h1 className="sm:text-4xl md:text-5xl text-center uppercase text-black font-light">
          PortFolio<br></br>
          <span className="font-semibold font-namefont text-6xl">Gustavo Marin</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-2xl"
          to="/"
          onClick={() => {
            RemoveMenu()
          }}
        >
          Galeria
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-2xl"
          to="/about"
          onClick={() => {
            RemoveMenu()
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Acerca de
        </NavLink>
        {/* <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={() => {
            RemoveMenu()
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Blog
        </NavLink>
        
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={() => {
            RemoveMenu()
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Contact
        </NavLink> */}
        <Socials />
        <p className="text-sm">&copy; Copyright 2024-<span>{new Date().getFullYear()} by GMarin</span></p>
      </nav>
    </header>
  )
}

export default SideMenu
