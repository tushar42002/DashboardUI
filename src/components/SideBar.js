import React from 'react'

function SideBar() {


    return (

        <div style={{ height: '100%'}}>

            <ul className='sidebar'>
                <li className='active'><a href="#">Dashboard</a></li>
                <li><a href="#">Form elements</a></li>
                <li><a href="#">Charts</a></li>
                <li><a href="#">Tables</a></li>
                <li><a href="#">Icons</a></li>
                <li><a href="#">User pages</a></li>
                <li><a href="#">Documentation</a></li>
            </ul>

        </div>
    )
}

export default SideBar