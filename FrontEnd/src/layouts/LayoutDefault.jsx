import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/footer'

export default function LayoutDefault() {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            <div className='main'>
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}
