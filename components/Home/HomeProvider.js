import { useState } from 'react';
import HomeContext from './HomeContext';

export default function HomeProvider({
    areaData,
    categoryData,
    children,
}) {
    const [homePageState, setHomePageState] = useState({
        categoryData: categoryData || { meals: [] },
        areaData: areaData || { meals: [] },
        activeList: [],
        isLoadingList: false,
        hasError: false,
        foodItem: {},
    })

    function handleFetchCategory(category) {
        setHomePageState({ ...homePageState, isLoadingList: true })
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(data => setHomePageState({
                ...homePageState,
                activeList: data.meals,
                isLoadingList: false,
                foodItem: {},
            }))
            .catch(err => setHomePageState({ hasError: true, isLoadingList: false, ...homePageState }))
    }

    function handleFetchArea(area) {
        setHomePageState({ ...homePageState, isLoadingList: true })
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(res => res.json())
            .then(data => setHomePageState({
                ...homePageState,
                activeList: data.meals,
                isLoadingList: false,
                foodItem: {},
            }))
            .catch(err => setHomePageState({ hasError: true, isLoadingList: false, ...homePageState }))
    }

    function handleSetFoodItem(id) {
        setHomePageState({ ...homePageState, isLoadingList: true })
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setHomePageState({
                ...homePageState,
                foodItem: { ...data.meals[0] },
                isLoadingList: false,
            }))
            .catch(err => setHomePageState({ hasError: true, isLoadingList: false, ...homePageState }))
    }

    return (
        <HomeContext.Provider value={{
            handleFetchCategory,
            handleFetchArea,
            handleSetFoodItem,
            ...homePageState,
        }}>
            {children}
        </HomeContext.Provider>
    )
}