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
              src="maps-and-location.png"
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
            <DropdownItem>
              <Link
                to="/instructions"
                
                
                className="flex  "
              >
                <img
                  className="w-5 h-5"
                  src="user-guide.png"
                  alt="argentina icon"
                />
                <p className="text-black pl-1  ">Guia</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="/about"
                
                
                className="flex  "
              >
                <img
                  className="w-5 h-5"
                  src="argentina.png"
                  alt="argentina icon"
                />
                <p className="text-black pl-1  ">Acerca de..</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
