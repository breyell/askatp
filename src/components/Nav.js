import React from "react";
import {Link} from 'gatsby'

const pages = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'About',
        link: '/about',
    }
]

export default function Nav() {
    return (
        <nav>
            <ul>
                
            </ul>
        </nav>
    )
}

// {pages.map((page, index) => (
//     <li>
//         <Link to={page.link} key={index}>{page.text}</Link>
//     </li>
// ))}