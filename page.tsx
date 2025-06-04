// import Image from "next/image";
// import { GoArrowUpRight } from "react-icons/go";
// pages/index.tsx or app/page.tsx
import Image from 'next/image';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });
// export default function Home() {
//   return (
//     <div className="2xl:w-[1600px] w-full h-[90vh] lg:h-[101vh] 2xl:h-[780px]  bg-primary mx-auto">
//           <div className="w-full h-full bg-center bg-cover" style={{backgroundImage : "url(/Subtract.png)"}}>
          
//                  <header className="flex justify-center ">
//                        <div className="w-[85%] h-24 text-white flex  justify-between items-center">
//                             <div>
//                                <Image
//                                  src="/logo.png"
//                                  alt="logo"
//                                  width={200}
//                                  height={200}
//                                  className="bg-center bg-cover"
//                                />
//                             </div>
//                             <div className="flex gap-3">
//                                 <button className="w-28 h-10 transparent border border-gray-600 rounded-3xl hover:border-blue-800 hover:shadow-lg hover:shadow-blue-950 hover:scale-105 transition duration-200">About Us</button>
//                                 <button className="w-28 h-10 transparent border border-gray-600 rounded-3xl hover:border-blue-800 hover:shadow-lg hover:shadow-blue-950 hover:scale-105 transition duration-200">Services</button>
//                                 <button className="w-28 h-10 transparent border border-gray-600 rounded-3xl hover:border-blue-800 hover:shadow-lg hover:shadow-blue-950 hover:scale-105 transition duration-200">Reviews</button>
//                             </div>
//                             <div className="flex items-center">
//                                <button className="w-28 h-10 transparent border-[2px] border-yellow-500 rounded-3xl">Contact Us</button>
//                                <div className="w-11 h-11 rounded-full bg-yellow-500 text-black flex justify-center items-center"><GoArrowUpRight className="w-8 h-8" /></div>
//                             </div>
//                         </div>
//                   </header>

//                   {/*hero Section*/}


//                   <div className="w-[85%] h-[70%] mx-auto flex justify-between grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2">

//                        <div className="w-[75%] h-[80%] text-white flex flex-col self-end gap-5">
//                            <span className="text-4xl font-bold">
//                                Comprehensive Signage Solutions for Businesses of All Sizes
//                            </span>
//                            <span className="w-[90%] font-extralight text-[18px]">
//                                Expert Signage Solutions Across the UK and Europe by Cassius Installations
//                            </span>
//                            <span className="flex">
//                                <button className="w-28 h-10 bg-buttons rounded-3xl text-black">Contact Us</button>
//                                <div className="w-11 h-11 rounded-full bg-buttons text-black flex justify-center items-center"><GoArrowUpRight className="w-5 h-5" /></div>
//                            </span>
//                        </div>

//                        <div className="w-[95%] flex items-center justify-end" >
//                             <div className="w-[40%] h-40 border-[10px] border-white rounded-full sm:mt-52 mt-60 ">
//                                 <Image
//                                    src="/b2.png"
//                                    alt="pic"
//                                    width={450}
//                                    height={450} 
//                                    className="w-full h-full bg-center bg-cover"
//                                  />
//                             </div>
//                        </div>

//                   </div>
              
//           </div>   




//           <section className="2xl:w-[1600px] w-full h-[100vh] 2xl:h-[780px] bg-primary flex justify-center">
//               <div className="sm:w-[85%] w-full h-[60%] flex">
                
//                     <div className="w-[50%] h-[500px] flex flex-col gap-4 text-white justify-end">
//                         <h1 className="text-4xl font-bold">About Cassius Installations</h1>
//                         <p className="w-[80%] text-gray-200 font-sans text-[17px]">At Cassius Installations, we are passionate about delivering exceptional sign installation services with an unwavering commitment to quality and precision. With years of experience in the industry, we’ve built a reputation for our meticulous attention to detail, ensuring that every sign we install is flawless and perfectly positioned to represent your brand. We believe that a successful project goes beyond the installation process—it’s about forging lasting relationships with our clients. We take the time to understand your needs and work collaboratively with you to achieve the best results.</p>
//                         <button className="w-28 h-10 bg-buttons rounded-3xl text-black">Contact Us</button>
//                     </div>

//                     <div className="relative w-[50%] h-[500px] flex justify-end items-center mt-20">
//                       {/* Background Image */}
//                               <div className="relative w-[70%] h-[70%]">
//                                 <Image
//                                   src="/b3.png"
//                                   alt="Billboard Background"
//                                   layout="fill"
//                                   objectFit="cover"
//                                   className="rounded-lg"
//                                 />
//                               </div>
                        
//                        {/* Oval Image Overlay */}
//                               <div className="absolute bottom-1 left-10">
//                                 <div className="relative w-[390px] h-[250px] overflow-hidden rounded-[50px] ">
//                                   <Image
//                                     src="/b4.png"
//                                     alt="Overlay Image"
//                                     width={400}
//                                     height={400}
//                                   />
//                                 </div>
//                               </div>
//                       </div>
               
//               </div>
//           </section>






//     </div>
//   );
// }





// // // app/page.tsx
// // 'use client';

// // import Image from 'next/image';
// // import { useEffect } from 'react';

// // export default function Home() {
// //   useEffect(() => {
// //     const root = document.documentElement;
// //     root.style.setProperty('--quantity', '10');
// //   }, []);

// //   return (
// //     <main className="bg-black text-white scroll-smooth">
// //       {/* Header */}
// //       <header className="w-[85%] max-w-[1100px] mx-auto bg-white/60 backdrop-blur-md z-50 fixed top-4 left-0 right-0 shadow-md rounded-full">
// //         <div className="flex items-center justify-between h-16 px-6">
// //           <div className="font-bold text-blue-950 text-xl">
// //             <span>Infonet</span>
// //             <span className="text-orange-700 ml-1">Services</span>
// //           </div>
// //           <nav className="flex items-center gap-6 text-sm font-medium">
// //             <a className="hover:font-bold" href="#">Home</a>
// //             <a className="hover:font-bold" href="#about">About</a>
// //             <a className="hover:font-bold" href="#skills">Skills</a>
// //             <a className="hover:font-bold" href="#projects">Projects</a>
// //             <a className="hover:font-bold" href="#contact">Contact</a>
// //             <button className="w-[120px] h-10 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">
// //               Get Started
// //             </button>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Hero */}
// //       <section className="min-h-screen flex flex-col justify-center items-center gap-4 text-center pt-28" id="hero">
// //         <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-orange-500 animate-bounce">
// //           I'm Hassan Nadeem
// //         </h1>
// //         <p className="text-2xl sm:text-3xl mt-2 animate-fade-in-down">Web Developer</p>
// //         <div className="flex gap-6 mt-6 socials text-xl">
// //           <a href="https://github.com" target="_blank" className="hover:text-orange-500 transition-transform">GitHub</a>
// //           <a href="https://linkedin.com" target="_blank" className="hover:text-orange-500 transition-transform">LinkedIn</a>
// //           <a href="https://twitter.com" target="_blank" className="hover:text-orange-500 transition-transform">Twitter</a>
// //           <a href="https://instagram.com" target="_blank" className="hover:text-orange-500 transition-transform">Instagram</a>
// //         </div>
// //       </section>

// //       {/* About */}
// //       <section id="about" className="min-h-[80vh] py-20 px-6 md:px-24 bg-white text-black flex flex-col lg:flex-row items-center gap-12">
// //         <Image src="/profile.png" alt="Hassan Nadeem" width={240} height={240} className="rounded-full shadow-lg border-4 border-orange-600" />
// //         <div>
// //           <h2 className="text-4xl font-bold mb-4 text-orange-600">About Me</h2>
// //           <p className="text-lg leading-relaxed">
// //             As a frontend developer with a strong foundation in creating engaging user interfaces, I have contributed to several projects that enhance user experiences.
// //             With a keen interest in expanding my skill set, I am actively learning backend technologies to become a full-stack developer.
// //             I am eager to leverage my creativity and technical skills to build comprehensive end-to-end solutions in the near future.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Skills */}
// //       <section id="skills" className="min-h-screen p-8 flex items-center justify-center bg-gray-900">
// //         <div className="relative w-full h-[120vh] overflow-hidden text-center">
// //           <div className="slider w-20 h-[110px] absolute top-[10%] left-1/2 -translate-x-1/2 animate-[autorun_20s_linear_infinite]"
// //                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
// //             {[...Array(10)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="absolute inset-0"
// //                 style={{
// //                   transform: `rotateY(${i * (360 / 10)}deg) translateZ(200px)`
// //                 }}
// //               >
// //                 <img src={`/picture${i + 1}.png`} alt={`Skill ${i + 1}`} className="w-full h-full object-cover rounded-2xl" />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Projects */}
// //       <section id="projects" className="min-h-screen p-8 bg-white text-black">
// //         <h2 className="text-3xl text-center font-bold mb-8">Projects</h2>
// //         <div className="flex flex-wrap gap-2 justify-center transform-style-preserve-3d perspective-[1000px] mt-8">
// //           {[...Array(10)].map((_, i) => (
// //             <div key={i} className="group relative w-32 h-48 md:w-40 md:h-60 transition-all duration-300 filter brightness-0 hover:brightness-100 hover:scale-110 hover:z-10">
// //               <img src={`/picture${i + 1}.png`} alt={`Project ${i + 1}`} className="w-full h-full object-cover rounded-2xl" />
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Contact */}
// //       <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
// //         <div className="text-center max-w-xl w-full">
// //           <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
// //           <form className="space-y-4">
// //             <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-white/10 text-white" />
// //             <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded bg-white/10 text-white" />
// //             <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded bg-white/10 text-white"></textarea>
// //             <button type="submit" className="px-6 py-2 bg-orange-600 rounded hover:bg-orange-700">Send Message</button>
// //           </form>
// //         </div>
// //       </section>

// //       <footer className="text-center text-gray-400 py-6 bg-black border-t border-gray-700">
// //         <p>&copy; 2025 Infonet Services. All rights reserved.</p>
// //       </footer>

// //       {/* Custom Animations */}
// //       <style jsx>{`
// //         @keyframes autorun {
// //           from {
// //             transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
// //           }
// //           to {
// //             transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
// //           }
// //         }
// //       `}</style>
// //     </main>
// //   );
// // }





export default function LogoOptions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 gap-3">

      
      {/* Hands image in the middle */}
      <Image
        src="/comp.png"
        alt="hand-middle"
        width={80}
        height={80}
        className="z-10 relative top-5"
      />


      {/* Special Touch at the top */}
      <h1 className={`${pacifico.className} z-20 text-6xl text-[#800000]`}>
        Special Touch
      </h1>

      {/* Massage and Spa Services at the bottom */}
      <p className={` text-2xl font-sans relative top-3 font-bold  text-[#3d3c3c] text-center`}>
        Massage and Spa Services
      </p>
    </div>
  );
}