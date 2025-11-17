import React from 'react'
import './css.css'

export default function Stars({ rating }) {

    return (
        <div className='flex gap-1 ml-2 mb-2'>
            {
                Array.from({ length: 5 }, (_, index) =>

                    <div className='star'>
                        {
                            index < rating && <div className='strarsFill' style={index == Math.floor(rating) ? { width: `${(rating % 1)*100 }%` } : {}}></div>
                        }
                    </div>
                )
            }
        </div>
    )

}
