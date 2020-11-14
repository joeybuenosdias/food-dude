/** components */
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import HomeProvider from '../components/Home/HomeProvider'

export default function HomePage({
    areaData,
    categoryData,
}) {
    return (
        <HomeProvider
            categoryData={categoryData}
            areaData={areaData}
        >
            <Layout>
                <Home />
            </Layout>
        </HomeProvider>
    )
}

export async function getServerSideProps() {
    const areaResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    const categoriesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    const areaData = await areaResponse.json()
    const categoryData = await categoriesResponse.json()
    return { props: {
        areaData,
        categoryData,
    }}
}