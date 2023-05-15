import Head from "next/head";
import { BackButton } from "../../components/BackButton";
import { CardConsult } from "../../components/CardConsult";

export default function Cupons() {
  return (
    <div className="h-screen w-screen dark:bg-[#3D1549] bg-[#D7BBAC] overflow-hidden">
      <Head>
        <title>Links Ila | Cupons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-4 left-2 z-50">
        <BackButton />
      </div>
      <CardConsult />
    </div>
  );
}
