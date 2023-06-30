import Head from "next/head";
import { CardQuiz } from "../../components/CardQuiz";

export default function Quiz() {

    return (
        <div className="min-h-screen max-w-screen dark:bg-[#3D1549] bg-[#D7BBAC] overflow-hidden">
            <Head>
                <title>Links Ila | Quiz da Nutri!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardQuiz />
           
        </div>
        
    )
}