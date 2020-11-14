import { useContext } from 'react';

/** components */
import HomeContext from '../../Home/HomeContext'

/** styles */
import css from './Filter.module.css'

export default function Filter() {
    return (
        <div>
            <CategoryFilter />
            <AreaFilter />
        </div>
    )

}

function CategoryFilter() {
    const { handleFetchCategory, categoryData: { meals } } = useContext(HomeContext)
    return (
        <div>
            <h3 className={css.title}>Search by Category</h3>
            <div className={css.subFilter}>
                {meals.map((meal) => {
                    return (
                        <button
                            className={css.btn}
                            onClick={() => handleFetchCategory(meal.strCategory)}
                            key={meal.strCategory}
                        >
                            {meal.strCategory}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

function AreaFilter() {
    const { handleFetchArea, areaData: { meals } } = useContext(HomeContext)
    return (
        <div>
            <h3 className={css.title}>Search by Area</h3>
            <div className={css.subFilter}>
                {meals.map((mealArea) => {
                    return (
                        <button
                            className={css.btn}
                            onClick={() => handleFetchArea(mealArea.strArea)}
                            key={mealArea.strArea}
                        >
                            {mealArea.strArea}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}