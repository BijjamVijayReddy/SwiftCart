import React, { useEffect, useState } from 'react'
import AppHeader from '../../components/AppHeader/AppHeader'
import SimpleSlider from '../../components/Slider/Slider'
import AppInfo from '../../components/AppInfo/AppInfo'
import Newsletter from '../../components/newsLetter/Newsletter'
import AppFooter from '../../components/AppFooter/AppFooter'
import NewDeals from '../../components/newDeals/NewDeals'
import SpinLoader from '../../components/spinLoader/SpinLoader'

function DashBoard() {
    const [isLoading, setIsLoading] = useState(true)
    const footerStyle = isLoading ? { position: "relative", top: "245px" } : {};

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            <AppHeader />
            {isLoading ? <SpinLoader /> : (
                <>
                    <SimpleSlider />
                    <AppInfo />
                    <NewDeals />
                    <Newsletter />
                </>
            )}
            <div style={footerStyle}>
                <AppFooter />
            </div>
        </div>
    )
}

export default DashBoard
