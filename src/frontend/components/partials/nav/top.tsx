'use client'

import { useRef } from "react";

import { Component } from "@/frontend/types/component";
import { APP_ROUTES } from "@/frontend/constant/app_rutes";

import IContext from "@/context/interfaces/context";
import useMouseDown from "@/frontend/hooks/mousedown";
import useCurrentPath from "@/frontend/hooks/path";

import ComponentLink from "@/frontend/components/partials/link";
import ComponentIcon from "@/frontend/components/partials/icon";

export default function ComponentNavTop(props: IContext): Component {
    const { session, buttonSesion, setOpacity, opacity } = props;

    const path: string = useCurrentPath(true);

    const refUserButton = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent): void => {
        if (refUserButton.current && !refUserButton.current.contains(event.target as Node)) {
            setOpacity(false);
        }
    }

    useMouseDown({ action: handleClickOutside });

    return (
        <nav className="fixed w-full dark:bg-dark-primary bg-primary top-0 mt-[-7px] z-40">
            <article className="mx-auto max-w-7xl pl-3 pr-2 2xl:pl-10 sm:pl-[60px] sm:pr-10">
                <div className="relative flex gap-x-3 h-16 items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <ComponentLink url={APP_ROUTES.home} title="NoteTube" descriptionClass="flex gap-x-2 items-center">
                            <ComponentIcon testid="icon-home" name="logo-fill" size={24} descriptionClass="icon-home text-secondary text-opacity-60 dark:text-seventh cursor-pointer" />
                            <strong className="text-gradient text-xl">
                                NoteTube
                            </strong>
                        </ComponentLink>
                    </div>
                    <div className="relative inset-y-0 right-0 flex items-center pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {
                            (path != APP_ROUTES.init && path != APP_ROUTES.signIn && !session.value.user) && (
                                <span  title="Usuario" className="absolute right-0 animate-pulse dark:bg-dark-secondary bg-secondary opacity-30 rounded-full w-[28px] h-[28px] " />
                            )
                        }
                        {
                            (path == APP_ROUTES.init && !session.value.user) ?
                                <ComponentLink url={APP_ROUTES.signIn} title="Iniciar sesion" descriptionClass="group dark:bg-custom-gradient dark:border-transparent border dark:border-dark-tertiary border-tertiary hover:border-secondary border-[0.1px] px-3 rounded-md flex py-[3px] flex items-center gap-x-1 outline-none transition duration-500">
                                    <ComponentIcon name="user" size={17} descriptionClass="dark:text-primary dark:group-hover:text-tertiary group-hover:text-secondary dark:text-dark-tertiary text-tertiary cursor-pointer" />
                                    <span className="dark:text-primary dark:group-hover:text-tertiary  group-hover:text-secondary text-sm tracking-wider text-tertiary duration-500">
                                        Iniciar sesion
                                    </span>
                                </ComponentLink>
                                :
                                (session.value.id) && (
                                    <div ref={refUserButton} onClick={() => setOpacity(!opacity)} className="flex gap-x-4 rounded-full" title="Usuario">
                                        {buttonSesion}
                                    </div>
                                )
                        }
                    </div>
                </div>
            </article>
        </nav>
    );
}