import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <section className="grid place-items-center items-center mt-[80px]">
            <SignUp />
        </section>
    )
}