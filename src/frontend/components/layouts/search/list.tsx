import { Dispatch, SetStateAction } from "react";

import { Props_loading_notes } from "@/frontend/types/props";
import { Props_delete_note, Props_note } from "@/context/types/note"

import ComponentIcon from "@/frontend/components/partials/icon";
import ComponentNote from "@/frontend/components/layouts/notes/note";
import ComponentHeader from "@/frontend/components/partials/template/dashboard/header";
import ComponentLoading from "@/frontend/components/layouts/notes/list/loading";
import ComponentButtonCreate from "@/frontend/components/layouts/search/button_create";

type Props = {
    loading: Props_loading_notes | undefined,
    notes: Props_note[],
    update_note: (note: Props_note) => void,
    description_class?: string,
    state: boolean,
    notes_selected: Props_delete_note[],
    setNotes_selected: Dispatch<SetStateAction<Props_delete_note[]>>
}

export default function ComponentList(props: Props) {
    const { loading, notes, update_note, description_class = '', state, notes_selected, setNotes_selected } = props;

    return (
        <article className={`${description_class} grid grid-cols-1 xl:grid-cols-2 place-items-center gap-4`}>
            {
                (loading?.value) ?
                    <ComponentLoading count={10} />
                    :
                    (notes.length === 0) ?
                        <div className="col-span-full flex flex-col items-center gap-5 pt-16">
                            <ComponentIcon name={loading?.icon} size={200} description_class={`w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] text-secondary cursor-pointer`} />
                            <ComponentHeader title={loading?.description} />
                            {
                                loading?.button && <ComponentButtonCreate response={false} />
                            }
                        </div>
                        :
                        notes.map(note => {
                            return <ComponentNote key={note._id} note={note} update_note={update_note} state={state} notes_selected={notes_selected} setNotes_selected={setNotes_selected} />
                        })
            }
        </article>
    )
}