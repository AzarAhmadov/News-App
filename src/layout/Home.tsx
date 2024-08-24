import React from 'react'
import Aside from '../components/common/Aside/Aside'
import RightBlock from '../components/common/RightBlock/RightBlock'
import { Outlet } from 'react-router-dom'
import Search from '../components/common/Seach/Search'

const Home: React.FC = () => {
    return (
        <div className="grid gap-5 grid-cols-[16.25rem_auto_17.813rem] bg-bodyBack min-h-screen">
            <Aside />
            <main className='py-8'>
                <Search />
                <Outlet />
            </main>
            <RightBlock />
        </div>

    )
}

export default Home