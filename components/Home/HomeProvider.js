import { useState } from 'react';
import HomeContext from './HomeContext';

export default function HomeProvider({
    areaData,
    categoryData,
    children,
}) {
    const [homePageState, setHomePageState] = useState({ categoryData, areaData })

    function handleFetchCategory(category) {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(data => setHomePageState({
                ...homePageState,
                activeList: data.meals,
            }))
    }

    function handleFetchArea(area) {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(res => res.json())
            .then(data => setHomePageState({
                ...homePageState,
                activeList: data.meals,
            }))
    }

    return (
        <HomeContext.Provider value={{
            handleFetchCategory,
            handleFetchArea,
            ...homePageState,
        }}>
            {children}
        </HomeContext.Provider>
    )
}