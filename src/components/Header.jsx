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
        <p className="font-bold text-inherit text-white">Leaflet Maps</p>
      </NavbarBrand>

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
              <Link to="/" className="flex">
                <img className="w-5 h-5" src="mapas.png" alt="map icon" />
                <p className="text-black flex pl-1 ">Mapa</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="https://github.com/christianzamher"
                target="_blank"
                className="flex"
              >
                <img className="w-5 h-5" src="github.png" alt="github icon" />
                <p className="text-black flex pl-1">GitHub</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="https://www.linkedin.com/in/christianzamorahermida"
                target="_blank"
                className="flex  "
              >
                <img
                  className="w-5 h-5"
                  src="linkedin.png"
                  alt="linkedin icon"
                />
                <p className="text-black pl-1  "> Linkedin</p>
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link
                to="https://czam.vercel.app/"
                target="_blank"
                className=" flex"
              >
                <img
                  className="w-5 h-5"
                  src="web-browser.png"
                  alt="portfolio icon"
                />
                <p className="text-black pl-1">Portfolio</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
