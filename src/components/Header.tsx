"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { asText, isFilled } from "@prismicio/client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
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

interface NavLink {
    label: any;
    link_type?: string;
    page_link?: any;
    section_id?: string;
}

export function Header({ settings, navigation }: HeaderProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const renderNavLink = (item: NavLink, isMobile = false) => {
        const linkLabel = <PrismicText field={item.label} />;

        // Link de seção (âncora)
        if (item.link_type === "section" && item.section_id) {
            const href = `/#${item.section_id}`;
            const className = isMobile
                ? "text-muted-foreground hover:text-foreground block py-2 text-lg font-medium transition-colors"
                : navigationMenuTriggerStyle();

            return (
                <a
                    href={href}
                    className={className}
                    onClick={isMobile ? () => setIsOpen(false) : undefined}
                >
                    {linkLabel}
                </a>
            );
        }

        // Link para página
        if (item.link_type === "page" && isFilled.link(item.page_link)) {
            const className = isMobile
                ? "text-muted-foreground hover:text-foreground block py-2 text-lg font-medium transition-colors"
                : navigationMenuTriggerStyle();

            return (
                <PrismicNextLink
                    field={item.page_link}
                    className={className}
                    onClick={isMobile ? () => setIsOpen(false) : undefined}
                >
                    {linkLabel}
                </PrismicNextLink>
            );
        }

        // Fallback para links antigos (compatibilidade)
        return (
            <PrismicNextLink
                field={item.page_link}
                className={isMobile ? "text-muted-foreground hover:text-foreground block py-2 text-lg font-medium transition-colors" : navigationMenuTriggerStyle()}
                onClick={isMobile ? () => setIsOpen(false) : undefined}
            >
                {linkLabel}
            </PrismicNextLink>
        );
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/30 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex h-20 items-center justify-between px-6 lg:px-12 xl:px-16 mx-auto max-w-7xl w-full">
                <PrismicNextLink
                    href="/"
                    className="mr-8 flex items-center space-x-2"
                >
                    <span className="text-xl font-bold tracking-tight">
                        <PrismicText field={settings.data.siteTitle} />
                    </span>
                </PrismicNextLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigation.data?.links.map((item: NavLink) => (
                                <NavigationMenuItem key={asText(item.label)}>
                                    <NavigationMenuLink asChild>
                                        {renderNavLink(item)}
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
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="px-7 h-12 flex items-center border-b border-slate-800/30">
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
                                {navigation.data?.links.map((item: NavLink) => (
                                    <div key={asText(item.label)}>
                                        {renderNavLink(item, true)}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
