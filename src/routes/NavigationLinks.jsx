import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Paths } from '.'
import { BebidasPage, ComidasPage, SnacksPage } from '../pages'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavigationLinks = () => {
    const activateLink = (active) => (active ? 'nav-active' : 'inactive')

    return (
        <BrowserRouter>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">F5LDR</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={Paths.BEBIDAS} className={({ isActive }) => activateLink(isActive)}>
                            Bebidas
                        </NavLink>
                        <NavLink to={Paths.COMIDAS} className={({ isActive }) => activateLink(isActive)}>
                            Comidas
                        </NavLink>
                        <NavLink to={Paths.SNACKS} className={({ isActive }) => activateLink(isActive)}>
                            Snacks
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path={Paths.BEBIDAS} element={<BebidasPage />} />
                <Route path={Paths.COMIDAS} element={<ComidasPage />} />
                <Route path={Paths.SNACKS} element={<SnacksPage />} />

                <Route path="/*" element={<Navigate to={Paths.BEBIDAS} replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavigationLinks

