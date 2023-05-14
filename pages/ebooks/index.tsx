// import Head from "next/head";
// import { TbCloudDownload } from "react-icons/tb";
// import { Header } from "../../components/Header";
// import Higiene from "../../public/higiene.png";
// import Lanche from "../../public/lanche.png";

// import { BiBookAlt } from "react-icons/bi";
// import "swiper/css";
// import { BackButton } from "../../components/BackButton";
// import { CardEbooks } from "../../components/CardEbooks";

// export default function Ebooks() {
//   return (
//     <div className="min-h-screen max-w-screen bg-[#D7BBAC] dark:bg-[#3D1549]">
//       <Head>
//         <title>Ila Links | E-books</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="w-full flex flex-col items-center py-2">
//         <div className="flex justify-center items-center flex-col px-10 py-5 mt-5 ">
//           <div className="absolute top-2 left-2">
//             <BackButton />
//           </div>
//           <Header />
//         </div>
//         <div className="w-full flex items-center justify-center space-x-4 mb-6 text-gray-500 dark:text-gray-200">
//           <BiBookAlt size={40} className="" />
//           <h3 className="text-4xl">E-books</h3>
//         </div>
//         <div className="w-full flex flex-col items-center">
//           <CardEbooks
//             link="https://drive.google.com/file/d/13gPkE3A5V9vxNOTv5PJ9QqACUF_QQiCW/view?usp=share_link"
//             mainImage={Higiene}
//             title="Higiene do sono"
//             description="Cansado de sintomas como: cansaço, fadiga extrema, dor de cabeça, intestino preguiçoso, gases, azia e gordura abdominal?"
//             textBtn="download"
//             iconBtn={<TbCloudDownload size={24} />}
//           />

//           <CardEbooks
//             link="https://drive.google.com/file/d/13gPkE3A5V9vxNOTv5PJ9QqACUF_QQiCW/view?usp=share_link"
//             mainImage={Lanche}
//             title="Parceiros do Intestino"
//             description="Cansado de sintomas como: cansaço, fadiga extrema, dor de cabeça, intestino preguiçoso, gases, azia e gordura abdominal?"
//             textBtn="download"
//             iconBtn={<TbCloudDownload size={24} />}
//           />

//           <CardEbooks
//             link="https://drive.google.com/file/d/13gPkE3A5V9vxNOTv5PJ9QqACUF_QQiCW/view?usp=share_link"
//             mainImage={Higiene}
//             title="Higiene do sono"
//             description="Cansado de sintomas como: cansaço, fadiga extrema, dor de cabeça, intestino preguiçoso, gases, azia e gordura abdominal?"
//             textBtn="download"
//             iconBtn={<TbCloudDownload size={24} />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
