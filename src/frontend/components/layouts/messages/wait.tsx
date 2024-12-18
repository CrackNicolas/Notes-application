import { Dispatch, SetStateAction } from "react";

import ComponentModal from "@/frontend/components/partials/modal";

type Props = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function ComponentMessageWait(props: Props): JSX.Element {
    const { open, setOpen } = props;

    return (
        <ComponentModal open={open} setOpen={setOpen}>
            <div className="flex flex-col items-center gap-y-5 px-3 sm:px-7 py-7">
                <p title="Texto de espera" className="mt-2 text-center text-xl dark:text-dark-tertiary text-tertiary dark:opacity-100 opacity-50">
                    Espere por favor...
                </p>
                <div className="mt-1 flex gap-x-4 place-items-center justify-center">
                    <div className="w-3 h-3 dark:bg-dark-secondary bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 dark:bg-dark-secondary bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-3 h-3 dark:bg-dark-secondary bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>
            </div>
        </ComponentModal>
    )
}