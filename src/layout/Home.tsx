import React from 'react'
import Aside from '../components/common/Aside/Aside'
import RightBlock from '../components/common/RightBlock/RightBlock'
import { Outlet } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <div className="grid grid-cols-[260px_auto_285px] bg-bodyBack min-h-screen">
            <Aside />
            <main className='mx-auto'>
                <Outlet />
            </main>
            <RightBlock />
        </div>

    )
}

export default Home