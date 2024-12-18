import ComponentIcon from "@/frontend/components/partials/icon";
import ComponentLink from "@/frontend/components/partials/link";

export default function ComponentHome(): JSX.Element {
    return (
        <article className="flex flex-col h-screen justify-between relative px-6 lg:px-8 pb-5">
            <article className="mt-[130px] flex flex-col items-center gap-y-9">
                <ComponentIcon testid="icon-home" name="logo" size={70} description_class="text-secondary" />
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-center text-4xl font-bold tracking-wider dark:text-dark-tertiary text-tertiary text-2xl sm:text-6xl">
                        Aplicación de notas
                    </h1>
                    <p className="text-center text-md sm:text-lg leading-8 dark:text-dark-tertiary text-tertiary opacity-60 tracking-wider">
                        ¡Organiza tu vida, toma notas sin límites!
                    </p>
                </div>
                <div className="mt-3 flex items-center justify-center gap-x-6">
                    <ComponentLink url="/dashboard/main" title="Empezar" description_class="group flex items-center gap-x-2 rounded-md border-[1px] dark:border-dark-secondary border-secondary dark:hover:bg-dark-secondary hover:bg-secondary px-3.5 py-2.5 transition duration-700 cursor-pointer">
                        <ComponentIcon name="box" size={16} description_class="group-hover:rotate-[360deg] group-hover:text-primary dark:group-hover:text-dark-primary dark:text-dark-secondary text-secondary duration-700" />
                        <span className="dark:group-hover:text-dark-primary group-hover:text-primary dark:text-dark-secondary text-secondary text-sm group-hover:font-semibold tracking-wider duration-300">
                            Click para iniciar
                        </span>
                    </ComponentLink>
                </div>
            </article>
            <span className="text-center text-sm dark:text-dark-tertiary text-tertiary opacity-60 font-normal tracking-wide">
                Version {process.env.PROJECT_VERSION}
            </span>
        </article>
    )
}