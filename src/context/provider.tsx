'use client'

import { useUser, UserButton } from "@clerk/nextjs";

import { usePathname, useRouter } from "next/navigation";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { createContext, useEffect } from "react";

import { Props_layouts } from "@/frontend/types/props";
import { Props_context } from "@/context/types/context";

import Template from '@/frontend/template/init'

export const Context = createContext<Props_context>({
    section_current: '',
    user: {},
    button_login: <UserButton afterSignOutUrl="/" />
});

export default function Provider({ children }: Props_layouts) {
    const { user } = useUser();

    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
        if (!navigator.onLine) {
            router.push("/without_internet")
        }
    }, [path])

    return (
        <Context.Provider value={{ section_current: path.substring(1), user, button_login: <UserButton afterSignOutUrl="/" /> }}>
            <ProgressBar color="#00ffff" />
            <Template>
                {children}
            </Template>
        </Context.Provider>
    )
}