import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar className="w-full bg-[#0a1200]/90 z-[9000]">
      <NavbarBrand>
        <p className="font-bold text-inherit text-white">La Ruta del Tango</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" to="/equipo">
            Sobre Mí
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/ruta" aria-current="page" className="text-secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NextUILink className="text-white" href="#">
            Configuracion
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform bg-orange-600"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://imgs.search.brave.com/HZTzT4hztPp3ddCwh8Cty8pS5Q4BLpIv-forUtQrXXw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mbHlj/bGlwYXJ0LmNvbS90/aHVtYnMvdGFuZ28t/ZGFuY2VyLWNsaXBh/cnQtdHJhbnNwYXJl/bnQtaW1hZ2VzLWJh/bGxyb29tLWRhbmNl/LTE1MzAwNzYucG5n"
              alt="User Avatar"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem className="h-14 gap-2">
              <p className="text-orange-700">Bienvenido</p>
            </DropdownItem>
            <DropdownItem>
              <Link to="/">
                <p className="text-black">Mapa</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/equipo">
                <p className="text-black">Equipo</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <NextUILink href="#">
                <p className="text-black">Configuracion</p>
              </NextUILink>
            </DropdownItem>
            <DropdownItem>
              <Link to="/ruta" className="text-black">
                <p>Acerca de La Ruta</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};