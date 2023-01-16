import { Paths } from '.'
import { BebidasPage, ComidasPage, SnacksPage } from '../pages'

export const routes = [
    {
        to: Paths.BEBIDAS,
        name: 'Bebidas',
        Component: BebidasPage,
    },
    {
        to: Paths.COMIDAS,
        name: 'Comidas',
        Component: ComidasPage,
    },
    {
        to: Paths.SNACKS,
        name: 'Snacks',
        Component: SnacksPage,
    },
    {
        to: Paths.ALGOMAS,
        name: 'Bla',
        Component: BebidasPage,
    },
]
