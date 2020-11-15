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
        return <div className={css.loader} />
    } else if (!activeList.length) {
        return (
            <div>Please select a category</div>
        )
    } else if (foodItem?.idMeal) {
        return (
            <FoodItem />
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

function FoodItem() {
    const { activeList, handleSetFoodItem, foodItem } = useContext(HomeContext)
    return (
        <div>
            <div>
                <h1>{foodItem.strMeal}</h1>
                <div className={css.itemContent}>
                    <img className={css.hero} src={foodItem.strMealThumb} />
                    <Instructions />
                </div>
                <h3 className={css.more}>More Like {foodItem.strMeal}</h3>
                <div className={css.moreFilter}>
                    {activeList.map((meal) => {
                        return (
                            <button
                                key={meal.idMeal}
                                onClick={() => handleSetFoodItem(meal.idMeal)}
                                className={css.btn}
                            >
                                {meal.strMeal}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function Instructions() {
    const { foodItem } = useContext(HomeContext)
    for(let i = 1; i <= 20; i++) {
        console.log('i', i)
    }
    function instructionsList() {
        let tableRows = []
        for(let i = 1; i <= 20; i++) {
            console.log('i', i)
            tableRows.push(
                <tr>
                    <td>{foodItem[`strIngredient${i}`]}</td>
                    <td>{foodItem[`strMeasure${i}`]}</td>
                </tr>
            )
        }
        return tableRows;
    }
    return (
        <div className={css.instructionsContainer}>
            <h2>Instructions</h2>
            <table>
                {instructionsList()}
            </table>
        </div>
    )
}