import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Paths } from '.'
import { routes } from './routes'
import { BebidasPage, ComidasPage, SnacksPage } from '../pages'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavigationLinks = () => {
    const activateLink = (active) => (active ? 'nav-active' : 'inactive')
    console.log(routes)

    return (
        <BrowserRouter>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">F5LDR</Navbar.Brand>
                    <Nav className="me-auto">
                        {routes.map((route, i) => (
                            <NavLink key={route.name + i} to={route.to} className={({ isActive }) => activateLink(isActive)}>
                                {route.name}
                            </NavLink>
                        ))}
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                {routes.map(({ name, to, Component }, i) => (
                    <Route key={name + to} path={to} element={<Component />} />
                ))}

                <Route path="/*" element={<Navigate to={routes.at(0)} replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavigationLinks

// IIFE funciones auto ejecutables

// Async await useEffect

// try catch   vs   then catch
