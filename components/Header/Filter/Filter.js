import { useContext } from 'react';
import HomeContext from '../../Home/HomeContext'

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
            {meals.map((meal) => {
                return (
                    <button onClick={() => handleFetchCategory(meal.strCategory)} key={meal.strCategory}>
                        {meal.strCategory}
                    </button>
                )
            })}
        </div>
    )
}

function AreaFilter() {
    const { handleFetchCategory, areaData: { meals } } = useContext(HomeContext)
    return (
        <div>
            {meals.map((mealArea) => {
                return (
                    <button onClick={() => handleFetchCategory(mealArea.strArea)} key={mealArea.strArea}>
                        {mealArea.strArea}
                    </button>
                )
            })}
        </div>
    )
}