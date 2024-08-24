import React from 'react'
import { CiGift } from "react-icons/ci";
import Button from '../Button';

const Subscribe: React.FC = () => {
    return (
        <div className='p-5 rounded-md bg-primary ms-5 h-[120px]'>
            <div className='flex items-center gap-x-3'>
                <CiGift className='text-[28px] text-textWhite shrink-0' />
                <h3 className='text-sm font-normal text-textWhite'>Subscribe to Premium</h3>
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex items-end text-xl font-bold text-textWhite'>
                    $8<small className='text-sm'>/m</small>
                </div>
                <Button type="primaryDarker" size="sm" rounded={true}> Upgrate </Button>
            </div>
        </div>
    )
}

export default Subscribe