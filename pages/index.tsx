import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { HiTicket } from "react-icons/hi2";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Links Ila | Nutricionista: Ila Bittencourt"
        description="Nutrição funcional e ortomolecular, agende sua consulta."
        openGraph={{
          url: "https://links-ila.vercel.app/",
          title: "Links Nutricionista Ila Bittencourt",
          description:
            "Nutrição funcional e ortomolecular, agende sua consulta.",
          images: [
            {
              url: "/avatar.jpg",
              width: 800,
              height: 420,
              alt: "Nutricionista Ila Bittencourt",
            },
          ],
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen bg-[#D7BBAC] dark:bg-[#3D1549] font-sub-title">
      
        <div className="w-full relative py-2 bg-[#D7BBAC] dark:bg-[#3D1549] overflow-hidden">

          <div className="h-full w-full flex flex-col px-5 py-5  z-50 md:items-center">
            <Header />

            <div className="flex flex-col w-full md:w-[80%] xl:w-1/3 mt-2 md:mt-4 md:space-y-4 ">
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Button
                  target="_blank"
                  label="Consulta presencial"
                  route={`https://wa.me/5571993009032?text=Ol%C3%A1,+gostaria+de+agendar+uma+consulta+presencial`}
                  // icon={<RiWhatsappFill size={24} />}
                />
                <Button
                  target="_blank"
                  label="Consulta on-line"
                  route={`https://wa.me/5571993009032?text=Ol%C3%A1,+gostaria+de+agendar+uma+consulta+on-line`}
                  // icon={<RiWhatsappFill size={24} />}
                />
                <Button
                  label="Cupons"
                  route={`/cupons`}
                  icon={<HiTicket className="w-7 h-7 md:w-11 md:h-11" />}
                />
                {/* <Button
                label="E-books"
                route={`/ebooks`}
                icon={<BiBookAlt size={20} />}
              /> */}
              </motion.div>
            </div>
          </div>

          {/* <div className='w-full'>
          <BlogList />
        </div> */}
        </div>
      </div>
    </>
  );
}
