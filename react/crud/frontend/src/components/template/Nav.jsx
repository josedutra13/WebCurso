import './Nav.css'
import React from 'react'
import NavItens from './NavItem'



export default props =>
    <aside className="menu-area">
        <nav className="menu">
         <NavItens href="/" icon="home" title="Início"></NavItens> 
         <NavItens href="/users" icon="users" title="Usuarios"></NavItens>
        </nav>
    </aside>