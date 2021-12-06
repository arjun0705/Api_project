import React from 'react'
import {useSelector} from 'react-redux'
function Show() {
    const apidata = useSelector(state =>state.APIapp)

    return (
        <div className='show'>
            {apidata.data.map((ele,i)=>(
                <div key={i+1}>
                    <img src={ele.thumbnail}/>
                   <p> {ele.title}</p>

                 </div>
            ))}
        </div>
    )
}

export default Show