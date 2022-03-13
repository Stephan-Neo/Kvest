import { Link, useMatch } from "react-router-dom"

function CustomLink({children, to, ...props}){
    const match = useMatch(to)
    return(
        <Link 
            to={to} 
            className={ match ? 'active_link': 'link' }
            {...props}
            >
            {children}
        </Link>
    )
}

export {CustomLink}