import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Divider, Button } from "@heroui/react";
import { Link as HeroLink } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { showEmailModalToast } from "./toaster";


export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-content2">
      <NavbarContent className="basis-1/5 md:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:flex basis-1/5 md:basis-full"
        justify="start"
      >
        <div className="flex gap-4 justify-start ml-2">
          <Divider orientation="vertical" />
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  usePathname() === item.href ? "text-primary text-xl" : "text-xl"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 md:basis-full"
        justify="end"
      >
        <NavbarItem className="gap-2 flex">
          <HeroLink isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </HeroLink>
          <ThemeSwitch />
          <Button color="primary" size="md" className="shadow-lg mt-6 w-0 self-center text-xl px-14 my-auto" onPress={showEmailModalToast}>Join Now</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <HeroLink isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </HeroLink>
        <ThemeSwitch />
        <Divider orientation="vertical" />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "text-xl",
                  usePathname() === item.href ? "text-primary font-medium" : ""
                )}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
          <Button color="primary" size="lg" className="shadow-lg mt-6 w-0 self-center text-2xl px-[4rem]" onPress={showEmailModalToast}>Join Now</Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
