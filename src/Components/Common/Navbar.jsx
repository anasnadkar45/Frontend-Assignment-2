import React from 'react'
import BreadcrumbNav from './BreadcrumbNav';

const Navbar = () => {
    const links = [
        { path: '/', label: 'Home' },
        { path: '/', label: 'Dashboard V2' },
    ];
    return (
        <div>
            <BreadcrumbNav links={links}/>
            
        </div>
    )
}

export default Navbar