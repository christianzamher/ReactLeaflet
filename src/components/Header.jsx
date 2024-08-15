import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

export const Header = () => {
  return (
    <Navbar className="w-full bg-[#0a1200]/90  z-[9000]">
      <NavbarBrand>
        <p className="font-bold text-inherit text-white">La Ruta del Tango</p>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            Sobre Mí
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Configuracion
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="src\assets\tango001.webp"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 ">
              <p className="font-semibold text-orange-700 ">Bienvenido</p>
            </DropdownItem>
            <DropdownItem key="settings">
              <Link href="/home">
                <p className="text-black ">Equipo</p>
              </Link>
            </DropdownItem>
            <DropdownItem key="team_settings">Configuracion</DropdownItem>
            <DropdownItem key="analytics">Acerca de La Ruta</DropdownItem>
            
            {/* <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
