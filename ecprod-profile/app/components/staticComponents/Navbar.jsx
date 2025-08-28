"use client";
import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";

class Navbar extends Component {
  state = { clicked: false, isScrolled: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  render() {
    const { pathname } = this.props;

    return (
      <nav
        className={`fixed grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 top-0 px-2.5 pt-5 z-50 transition-all duration-300 ${
          this.state.isScrolled ? "bg-white shadow-md pt-0" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="px-5 md:px-10 py-5 w-50">
          <img src="/images/ECPROD Logo 1.svg" alt="logo" className="w-60" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex justify-end items-center px-5 sm:flex md:hidden lg:hidden xl:hidden">
          <span onClick={this.handleClick} className="text-3xl font-extrabold">
            {this.state.clicked ? <FaXmark /> : <FaBars />}
          </span>
        </div>

        <div
          className={`col-span-2 flex sm:justify-start md:justify-end lg:justify-end items-center transition-all duration-500 ease-in-out 
          ${
            this.state.clicked
              ? "max-h-screen opacity-100 translate-y-0 bg-white"
              : "max-h-0 opacity-0 -translate-y-5"
          } 
          overflow-hidden md:max-h-none md:opacity-100 md:translate-y-0`}
        >
          <ul className="flex flex-col px-5 py-5 sm:px-5 sm:py-5 md:justify-between lg:justify-between md:items-center lg:items-center gap-2 sm:flex-col md:flex-row lg:flex-row">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "bg-[#009A3C] text-white"
                    : "hover:bg-gray-200 hover:text-green-950"
                } px-4 py-2 rounded-3xl transition-colors duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "bg-[#009A3C] text-white"
                    : "hover:bg-gray-200 hover:text-green-950"
                } px-4 py-2 rounded-3xl transition-colors duration-300`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`${
                  pathname === "/services"
                    ? "bg-[#009A3C] text-white"
                    : "hover:bg-gray-200 hover:text-green-950"
                } px-4 py-2 rounded-3xl transition-colors duration-300`}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "bg-[#009A3C] text-white"
                    : "hover:bg-gray-200 hover:text-green-950"
                } px-4 py-2 rounded-3xl transition-colors duration-300`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Morrisco's Functional wrapper
export default function NavbarWrapper() {
  const pathname = usePathname();
  return <Navbar pathname={pathname} />;
}
