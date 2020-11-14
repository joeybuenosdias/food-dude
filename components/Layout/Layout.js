import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import css from './Layout.module.css'

export default function Layout({
    children,
}) {
    return (
        <div className={css.container}>
            <Header />
            <div className={css.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}