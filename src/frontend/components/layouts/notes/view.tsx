import { Component } from "@/frontend/types/component";

import INoteBase from "@/frontend/interfaces/note";
import IModalBase from "@/frontend/interfaces/modal";
import useAppTranslation from "@/shared/hooks/translation";
import translateLastTime from "@/frontend/logic/translate/format_time";

import { timeElapsed } from "@/frontend/logic/format_time";
import { ValuePriority } from "@/shared/enums/note/priority";

import ComponentIcon from "@/frontend/components/partials/icon";
import ComponentModal from "@/frontend/components/partials/modal";

interface IView extends Pick<INoteBase, 'note'>, IModalBase { }

export default function ComponentView(props: IView): Component {
    const { open, setOpen, note } = props;

    const { translate } = useAppTranslation();

    return (
        <ComponentModal open={open} setOpen={setOpen}>
            <div className="flex flex-col w-full items-center sm:mt-0 sm:text-left pt-1">
                <span title={translate('notes.form.note.view.date')} className="absolute top-[5px] dark:text-dark-tertiary text-tertiary dark:opacity-100 opacity-30 text-[12px]">
                    {translateLastTime({ lastTime: timeElapsed(note.createdAt), translate })}
                </span>
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-start line-clamp-1 tracking-wide dark:text-dark-secondary text-secondary font-semibold text-lg" title={note.title} >
                        {note.title}
                    </h3>
                    <span className="rounded-full" title={`${translate('categories.default')} ${translate(`categories.items.${note.category.icon}`)}`}>
                        <ComponentIcon name={note.category.icon} size={20} descriptionClass="dark:text-dark-secondary text-secondary" />
                    </span>
                </div>
                <p className="text-start text-sm dark:text-dark-secondary text-gray-500 w-full mb-7" title={note.description}>
                    {note.description}
                </p>
                <div className="flex justify-between items-center w-full">
                    {
                        (note.file) && (
                            <a href={`/api/images/${note.file.url.split("/").pop()}`} target="_blank" title={translate('notes.form.note.view.image')} rel="noopener noreferrer" className="group cursor-pointer dark:hover:bg-dark-secondary hover:bg-secondary flex items-center outline-none gap-x-1.5 border-[0.1px] dark:border-dark-secondary border-secondary rounded-md px-1.5">
                                <ComponentIcon name="upload-file-selected" size={13} descriptionClass="dark:text-dark-secondary text-secondary dark:group-hover:text-dark-primary group-hover:text-primary" />
                                <span className="dark:text-dark-secondary text-secondary dark:group-hover:text-dark-primary group-hover:text-primary">
                                    {translate('notes.form.note.view.image')}
                                </span>
                            </a>
                        )
                    }
                    <div className="flex gap-x-2 items-center">
                        <span className="rounded-full" title={translate(`notes.form.items.priority.options.${note.priority?.toLocaleLowerCase()}`)}>
                            <ComponentIcon name="arrow" size={21} descriptionClass={`text-${(note.priority === ValuePriority.High) ? 'red' : (note.priority === ValuePriority.Medium) ? 'yellow' : 'green'}-500 ${(note.priority !== ValuePriority.Low) && 'rotate-[-180deg]'}`} />
                        </span>
                        <span className="rounded-full" title={`${translate('notes.form.note.default')} ${(note.featured ? translate('notes.form.items.featured.details.text_1') : translate('notes.form.items.featured.details.text_2'))}`}>
                            <ComponentIcon name={`star-${note.featured ? 'fill' : 'half'}`} size={19} descriptionClass="dark:text-dark-secondary text-secondary" />
                        </span>
                    </div>
                </div>
            </div>
        </ComponentModal>
    )
}