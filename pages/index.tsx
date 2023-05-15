import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import { HiOutlineTicket } from "react-icons/hi";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import Planta from "../public/planta.png";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Links Ila | Nutricionista: Ila Bittencourt"
        description="Nutrição funcional e ortomolecular, agende sua consulta."
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "SiteName",
        }}
      />
      <div className="h-screen w-screen bg-[#D7BBAC] dark:bg-[#3D1549] font-sub-title">
        <Head>
          {/* <title>Links Ila | Nutricionista: Ila Bittencourt</title>
        <meta
          name="description"
          content="Nutricição ortomolecular e integrativa agende sua consulta."
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/16342420/pexels-photo-16342420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <meta property="og:image:alt" content="Imagem Nutricionista Ila" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full relative py-2 bg-[#D7BBAC] dark:bg-[#3D1549] overflow-hidden">
          <motion.div
            className="box"
            initial={{ x: -100, y: -16, opacity: 0 }}
            animate={{ x: 0, y: -16, opacity: 1 }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              priority
              alt=""
              src={Planta}
              className="absolute -top-4 -left-16 max-w-[350px]"
              width={800}
              height={600}
            />
          </motion.div>

          <div className="w-full flex flex-col px-5 py-5 mt-10 z-50 md:items-center">
            <Header />

            <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 mt-2 md:space-y-4 ">
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
                />
                <Button
                  target="_blank"
                  label="Consulta on-line"
                  route={`https://wa.me/5571993009032?text=Ol%C3%A1,+gostaria+de+agendar+uma+consulta+on-line`}
                />
                <Button
                  label="Cupons"
                  route={`/cupons`}
                  icon={<HiOutlineTicket size={20} />}
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
