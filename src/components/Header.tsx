"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { asText } from "@prismicio/client";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    settings: any;
    navigation: any;
}

export function Header({ settings, navigation }: HeaderProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
                <PrismicNextLink
                    href="/"
                    className="mr-6 flex items-center space-x-2"
                >
                    <span className="text-xl font-bold tracking-tight">
                        <PrismicText field={settings.data.siteTitle} />
                    </span>
                </PrismicNextLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigation.data?.links.map((item: any) => (
                                <NavigationMenuItem key={asText(item.label)}>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <PrismicNextLink field={item.link}>
                                            <PrismicText field={item.label} />
                                        </PrismicNextLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background pr-0">
                            <SheetTitle className="sr-only">Navigaton Menu</SheetTitle>
                            <div className="px-7">
                                <PrismicNextLink
                                    href="/"
                                    className="flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="font-bold">
                                        <PrismicText field={settings.data.siteTitle} />
                                    </span>
                                </PrismicNextLink>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 px-7">
                                {navigation.data?.links.map((item: any) => (
                                    <PrismicNextLink
                                        key={asText(item.label)}
                                        field={item.link}
                                        className="text-muted-foreground hover:text-foreground block py-2 text-lg font-medium transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <PrismicText field={item.label} />
                                    </PrismicNextLink>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
