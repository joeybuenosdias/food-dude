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
    const { activeList, isLoadingList, hasError, handleSetFoodItem, foodItem } = useContext(HomeContext)
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
    } else if (foodItem?.idMeal) {
        return (
            <FoodItem foodItem={foodItem} activeList={activeList} handleSetFoodItem={handleSetFoodItem} />
        )
    }

    return (
        <div className={css.activeList}>
            {activeList.map(meal => {
                return (
                    <button
                        className={css.card}
                        key={meal.idMeal}
                        onClick={() => handleSetFoodItem(meal.idMeal)}
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

function FoodItem({ foodItem, activeList, handleSetFoodItem }) {
    return (
        <div>
            <div>
                <h3 className={css.title}>Items</h3>
                <div className={css.subFilter}>
                    {activeList.map((meal) => {
                        return (
                            <button
                                key={meal.idMeal}
                                onClick={() => handleSetFoodItem(meal.idMeal)}
                            >
                                {meal.strMeal}
                            </button>
                        )
                    })}
                </div>
            </div>
            <h1>{foodItem.strMeal}</h1>
            <img src={foodItem.strMealThumb} />
        </div>
    )
}