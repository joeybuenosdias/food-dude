/** components */
import Filter from './Filter/Filter'
import Search from './Search/Search'

/** styles */
import css from './Header.module.css'

export default function Header() {
    return (
        <header className={css.header}>
            <Search />
            <Filter />
        </header>
    )
}