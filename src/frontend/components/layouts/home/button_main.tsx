import { Component } from "@/frontend/types/component";

import IElement from "@/frontend/interfaces/elements/element";
import ComponentIcon from "@/frontend/components/partials/icon";
import ComponentLink from "@/frontend/components/partials/link";

interface IButtonMain extends Pick<IElement, 'title'> {
    url: string
}

export default function ComponentButtonMainHome(props: IButtonMain): Component {
    const { title, url } = props;

    return (
        <ComponentLink url={url} title={title} descriptionClass="bg-custom-gradient group mt-6 flex items-center gap-x-2 rounded-md bg-secondary dark:bg-dark-secondary px-5 sm:px-6 py-2 sm:py-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500">
            <ComponentIcon name="box" size={20} descriptionClass="text-primary dark:text-dark-primary group-hover:rotate-[360deg] transition-transform duration-700" />
            <span className="text-primary dark:text-dark-primary text-md sm:text-lg font-semibold">
                {title}
            </span>
        </ComponentLink>
    )
}