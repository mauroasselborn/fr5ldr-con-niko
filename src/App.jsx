import { Container, Nav, Navbar } from 'react-bootstrap'
import { Navigation } from './routes/navigation'

function App() {
    return (
        <>
            <Navigation />

            {/* <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">F5LDR</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Bebidas</Nav.Link>
                        <Nav.Link href="#features">Comidas</Nav.Link>
                        <Nav.Link href="#pricing">Snacks</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    )
}

export default App

