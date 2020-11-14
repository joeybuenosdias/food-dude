import Filter from './Filter/Filter'
import Search from './Search/Search'

export default function Header() {
    return (
        <header>
            <Search />
            <Filter />
        </header>
    )
}