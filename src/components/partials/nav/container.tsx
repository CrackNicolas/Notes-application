'use client'

import Link from "next/link";

import { Fragment, useState } from "react";

import ComponentIcon from "../icon";

export default function ComponentNav() {
    const [sesion, setSesion] = useState<boolean>(false);
    const [view_toggle, setView_toggle] = useState<boolean>(false);
    const [view_options, setView_options] = useState<boolean>(false);

    const view_navs = (name: string) => {
        switch (name) {
            case 'toogle':
                setView_toggle(!view_toggle);
                setView_options(false);
                break;
            case 'options':
                setView_options(!view_options);
                setView_toggle(false);
                break;
        }
    }

    return (
        <nav className="fixed w-full bg-primary">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => view_navs('toogle')} className="relative inline-flex items-center justify-center rounded-md p-2 outline-none">
                            <ComponentIcon name="toogle" size={27} view_box="0 0 16 16" description_class="hover:text-secondary text-fifth" />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link href="/" className="flex flex-shrink-0 items-center">
                            <ComponentIcon name="logo" size={27} description_class="text-secondary" />
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-secondary tracking-wider text-fifth px-3 py-2 text-md font-normal transition duration-500">Panel</a>
                                <a href="#" className="hover:text-secondary tracking-wider text-fifth px-3 py-2 text-md font-normal transition duration-500">Equipo</a>
                                <a href="#" className="hover:text-secondary tracking-wider text-fifth px-3 py-2 text-md font-normal transition duration-500">Proyectos</a>
                                <a href="#" className="hover:text-secondary tracking-wider text-fifth px-3 py-2 text-md font-normal transition duration-500">Calendario</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {
                            sesion ?
                                <Fragment>
                                    <button type="button" className="relative rounded-full p-1 outline-none">
                                        <ComponentIcon name="notification" size={20} description_class="hover:text-secondary text-fifth" />
                                    </button>
                                    <div className="relative ml-3">
                                        <button type="button" onClick={() => view_navs('options')} className="flex rounded-full outline-none">
                                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </button>
                                        <div className={`${!view_options && 'hidden'} bg-room absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                                            <a href="#" className="block px-4 py-2 tracking-wider text-sm text-fifth hover:text-secondary transition duration-500">Ver perfil</a>
                                            <a href="#" className="block px-4 py-2 tracking-wider text-sm text-fifth hover:text-secondary transition duration-500">Configuracion</a>
                                            <a href="#" className="block px-4 py-2 tracking-wider text-sm text-fifth hover:text-secondary transition duration-500">Cerrar sesion</a>
                                        </div>
                                    </div>
                                </Fragment>
                                :
                                <div className="flex gap-x-4">
                                    <Link href="" className="group flex px-2 py-[3px] outline-none">
                                        <span className="group-hover:text-secondary text-md tracking-wider text-tertiary">Login</span>
                                    </Link>
                                    <Link href="/log" className="group hover:bg-secondary flex rounded-full px-3 py-[3px] border-[0.1px] border-secondary outline-none transition duration-500">
                                        <span className="group-hover:text-primary text-md tracking-wider text-secondary">Registro</span>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className={` bg-room ${view_toggle ? 'visible' : 'hidden'} sm:hidden`}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="hover:text-secondary tracking-wider text-fifth block px-3 py-2 text-md font-normal transition duration-500">Panel</a>
                    <a href="#" className="hover:text-secondary tracking-wider text-fifth block px-3 py-2 text-md font-normal transition duration-500">Equipo</a>
                    <a href="#" className="hover:text-secondary tracking-wider text-fifth block px-3 py-2 text-md font-normal transition duration-500">Proyectos</a>
                    <a href="#" className="hover:text-secondary tracking-wider text-fifth block px-3 py-2 text-md font-normal transition duration-500">Calendario</a>
                </div>
            </div>
        </nav>

    )
}