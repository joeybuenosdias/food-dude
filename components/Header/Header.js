/** components */
import Filter from './Filter/Filter'
import FoodIcon from '../FoodIcon/FoodIcon'

/** styles */
import css from './Header.module.css'

export default function Header() {
    return (
        <header className={css.header}>
            <FoodIcon />
            <Filter />
        </header>
    )
}