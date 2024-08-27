import React from 'react'
import AppHeader from '../../components/AppHeader/AppHeader'
import SimpleSlider from '../../components/Slider/Slider'
import AppInfo from '../../components/AppInfo/AppInfo'
import Newsletter from '../../components/newsLetter/Newsletter'
import AppFooter from '../../components/AppFooter/AppFooter'
import NewDeals from '../../components/newDeals/NewDeals'

function DashBoard() {
    return (
        <div>
            <AppHeader />
            <SimpleSlider />
            <AppInfo />
            <NewDeals />
            <Newsletter />
            <AppFooter />
        </div>
    )
}

export default DashBoard
