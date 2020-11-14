import { useContext } from 'react'

/** components */
import HomeContext from './HomeContext'

/** styles */
import css from './Home.module.css'

export default function Home() {
    return (
        <>
            <ActiveList />
        </>
    )
}

function ActiveList() {
    const { activeList, isLoadingList, hasError } = useContext(HomeContext)
    console.log('isLoadingList', isLoadingList)
    if(hasError) {
        return (
            <div>404 page here. Coming soon...</div>
        )
    } else if(isLoadingList) {
        return (
            <div>Loading...</div>
        )
    } else if (!activeList.length) {
        return (
            <div>Please select a category</div>
        )
    }

    return (
        <div className={css.activeList}>
            {activeList.map(meal => {
                return (
                    <button
                        className={css.card}
                        key={meal.idMeal}
                    >
                        <div className={css.imgContainer}>
                            <img
                                className={css.img}
                                src={meal.strMealThumb}
                            />
                        </div>
                        <div className={css.text}>{meal.strMeal}</div>
                    </button>
                )
            })}
        </div>
    )

}