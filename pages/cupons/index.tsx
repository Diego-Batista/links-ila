import Head from "next/head";
import { CardConsult } from "../../components/CardConsult";

export default function Cupons() {
  return (
    <div className="min-h-screen max-w-screen dark:bg-[#3D1549] bg-[#D7BBAC] overflow-hidden">
      <Head>
        <title>Links Ila | Cupons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardConsult />
    </div>
  );
}
