import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../components/ToggleDarkMode";
import logo from "../assets/spacetv-logo.png";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
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
      dropdown: false,
    },
    {
      path: "",
      name: "¿Cómo lo instalo?",
      icon: <IconChevronDown/>,
      dropdown: true,
      children: [
        { path: "/instalar-roku", 
          name: "Instalar SpaceTV+ (Roku)",
        },
        { path: "/instalar-android", 
          name: "Instalar SpaceTV+ (FireTV o AndroidTV)",
        },
        { path: "/instalar-windows", 
          name: "Instalar SpaceTV+ (Windows)",
        },
        { path: "/instalar-mac", 
          name: "Instalar SpaceTV+ (Mac)",
        },
        { path: "/instalar-ios", 
          name: "Instalar SpaceTV+ (iOS/iPhone/iPad)",
        },
        { path: "/instalar-smarttv-ssiptv", 
          name: "Instalar SpaceTV+ (SmartTV con SSIPTV)",
        },
        { path: "/instalar-smarttv-smartiptv", 
          name: "Instalar SpaceTV+ (SmartTV con SmartIPTV)",
        },
      ],
    },
    {
      path: "/canales",
      name: "Canales",
      dropdown: false,
    },
    {
      path: "/peliculas",
      name: "Peliculas",
      dropdown: false,
    },
    {
      path: "/series",
      name: "Series",
      dropdown: false,
    },
    {
      path: "/infraestructura",
      name: "¿Quiere tener su Propio Servicio IPTV?",
      dropdown: false,
    },
    {
      path: "/canales-restream",
      name: "Canales Re-Stream",
      dropdown: false,
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `text-md font-medium transition-colors hover:text-primary capitalize focus:outline-none ${!isActive ? "text-muted-foreground" : ""}`;
  };

  return (
    <>
      <div className="border-b">
        <div
          className={`flex ${isMobileMenuOpen ? "border-b-2" : ""} h-28 items-center px-4 sm:px-16 md:px-32 lg:px-64`}
        >
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a href="/">
              <img className="w-16" src={logo} alt="Logo" />
            </a>
            {/* Menú Normal */}
            <div className="hidden lg:flex space-x-4">
              {menuOptions.map((option, index) => (
                <div key={index}>
                  {option.dropdown ? (
                    <div className="relative group">
                      <div className="flex flex-row text-muted-foreground hover:text-primary">
                        <button
                          onClick={closeMobileMenu}
                          className={getNavLinkClass({ isActive: true })}
                        >
                          {option.name}
                        </button>
                        {option.icon}
                      </div>
                      <div
                        className={`${
                          isMobileMenuOpen ? "block" : "hidden"
                        } absolute w-96 left-0 mt-2 space-y-2 origin-top-right bg-slate-100 dark:bg-gray-600 z-50 shadow-lg rounded-lg group-hover:block hover`}
                      >
                        {option.children?.map((child, index) => (
                          <NavLink
                            to={child.path}
                            className="w-full block px-6 py-2 text-md text-black dark:text-white font-light text-primary capitalize transition-colors hover:text-muted-foreground dark:hover:text-muted-foreground"
                            key={index}
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={option.path}
                      className={getNavLinkClass}
                      key={index}
                    >
                      {option.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
          <div className="lg:hidden ml-auto flex items-center space-x-4">
            <button className="lg:hidden" onClick={toggleMobileMenu}>
              <Card className="p-1">
                <IconMenu2 size={28} />
              </Card>
            </button>
          </div>
        </div>
        {/* Menú Responsive */}
        {isMobileMenuOpen && (
          <div className="fixed lg:hidden top-0 right-0 h-full w-80 bg-gray-600 z-50 shadow-lg">
            <div className="py-2 space-y-2 border-b-2 border-primary-foreground">
              <div className="flex flex-col items-center py-4">
                <a href="/">
                  <img className="w-16" src={logo} alt="Logo" />
                </a>
              </div>
              {menuOptions.map((option, index) => (
                <div key={index}>
                  <NavLink
                    to={option.path}
                    className="block pl-6 text-md text-black dark:text-white font-normal text-primary capitalize transition-colors hover:text-muted-foreground dark:hover:text-muted-foreground"
                    onClick={closeMobileMenu}
                  >
                    {option.name}
                  </NavLink>
                  {index < menuOptions.length - 1 && (
                    <hr className="border-[1px] w-[100%] border-primary-foreground my-2"></hr>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <main className="" onClick={closeMobileMenu}>
        {children}
      </main>
    </>
  );
};
