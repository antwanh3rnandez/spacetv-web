import { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { ModeToggle } from "../components/ToggleDarkMode"
import logo from "../assets/spacetv-logo.png";



export const DashboardLayout = ({
    children,
}: {
    children: ReactNode
}) => {
    const menuOptions = [
        {
            path: '/',
            name: 'inicio'
        },
        {
            path: '/canales',
            name: 'Canales'
        },
        {
            path: '/peliculas',
            name: 'Peliculas'
        },
        {
            path: '/series',
            name: 'Series'
        },
        {
            path: '/visitantes',
            name: '¿Como lo instalo?'
        },
    ];
    return (
        <>  
            <div className="flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-28 items-center px-4 sm:px-16 md:px-32 lg:px-64">
                        <nav className="flex items-center space-x-4 lg:space-x-6">
                            <img className="w-16" src={logo} />
                            {
                                menuOptions.map((option, index) => (
                                    <NavLink
                                        to={option.path}
                                        className={({isActive}) => `text-md font-medium transition-colors hover:text-primary capitalize ${!isActive && 'text-muted-foreground'} `}
                                        key={index}
                                    >
                                        {option.name}
                                    </NavLink>
                                ))
                            }
                        </nav>
                        <div className="ml-auto flex items-center space-x-4">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
            <main className="">
                {children}
            </main>
        </>
    )
}
