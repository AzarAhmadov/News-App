import React from 'react'
import Aside from '../components/common/Aside/Aside'
import RightBlock from '../components/common/RightBlock/RightBlock'
import { Outlet } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <>
            <Aside />
            <Outlet />
            <RightBlock />
        </>
    )
}

export default Home