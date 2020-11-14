import { useState } from 'react';
import HomeContext from './HomeContext';

export default function HomeProvider({
    areaData,
    categoryData,
    children,
}) {
    const [homePageState, setHomePageState] = useState({
        categoryData,
        areaData,
        activeList: [],
        isLoadingList: false,
        hasError: false,
    })

    function handleFetchCategory(category) {
        setHomePageState({ ...homePageState, isLoadingList: true })
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(data => setHomePageState({
                ...homePageState,
                activeList: data.meals,
                isLoadingList: false,
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
            }))
            .catch(err => setHomePageState({ hasError: true, isLoadingList: false, ...homePageState }))
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