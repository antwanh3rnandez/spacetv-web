import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../components/ToggleDarkMode";
import logo from "../assets/spacetv-logo.png";
import { IconMenu2 } from "@tabler/icons-react";
import { Card } from "../components/ui/card";

export const DashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const menuOptions = [
    {
      path: "/",
      name: "inicio",
    },
    {
      path: "/canales",
      name: "Canales",
    },
    {
      path: "/peliculas",
      name: "Peliculas",
    },
    {
      path: "/series",
      name: "Series",
    },
    {
      path: "/visitantes",
      name: "¿Cómo lo instalo?",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="border-b">
        <div className={`flex ${isMobileMenuOpen ? 'border-b-2' : ''} h-28 items-center px-4 sm:px-16 md:px-32 lg:px-64`}>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <img className="w-16" src={logo} alt="Logo" />
            <button
              className="lg:hidden"
              onClick={toggleMobileMenu}
            >
              <Card className="p-1">
                <IconMenu2 size={28} />
              </Card>
            </button>
            {/* Menú Normal */}
            <div className="hidden lg:flex space-x-4">
              {menuOptions.map((option, index) => (
                <NavLink
                  to={option.path}
                  className={({ isActive }) =>
                    `text-md font-medium transition-colors hover:text-primary capitalize ${!isActive && 'text-muted-foreground'} `
                  }
                  key={index}
                >
                  {option.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
        {/* Menú Responsive */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 py-2">
            {menuOptions.map((option, index) => (
              <div className="flex flex-col items-center justify-center">
                <NavLink
                to={option.path}
                className="block text-lg font-medium text-primary capitalize transition-colors hover:text-muted-foreground"
                key={index}
                onClick={closeMobileMenu}
                >
                    {option.name}
                </NavLink>
                {index < menuOptions.length - 1 && (
                    <hr className="border-[1px] w-[1000%] border-primary-foreground"></hr>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <main className="">{children}</main>
    </>
  );
};
