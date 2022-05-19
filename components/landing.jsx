import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Landing({content}) {
    return(
        <>
            <h1>This is the landing page</h1>
            <p>{content}</p>
        </>
    )
}