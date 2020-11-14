/** components */
import Filter from './Filter/Filter'

/** styles */
import css from './Header.module.css'

export default function Header() {
    return (
        <header className={css.header}>
            <Filter />
        </header>
    )
}