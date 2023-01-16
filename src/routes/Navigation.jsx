import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Paths } from '.'
import { BebidasPage, ComidasPage, SnacksPage } from '../pages'

export const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route index path={Paths.BEBIDAS} element={<BebidasPage />} />
                <Route path={Paths.COMIDAS} element={<ComidasPage />} />
                <Route path={Paths.SNACKS} element={<SnacksPage />} />
            </Routes>
        </Router>
    )
}
