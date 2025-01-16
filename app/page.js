//@ts-nocheck
"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CubeGrid, CubeCluster } from "@/components/cube";
import Image from "next/image";
import Logo from "@/public/assets/harmoniq-logo.png";

import cube3 from "@/public/assets/animation/animate-cube-3.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <div className="bg-zinc-900 py-3 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto ">
          <div className="sticky top-12">
            <nav className=" top-0 flex justify-between items-center p-4 bg-transparent bg-opacity-0">
              <div className="flex items-center gap-2">
                <Image src={Logo} height={35} alt="Logo" />
                <span className="text-blue-400">ENSEMBLE.CODES</span>
              </div>
              <div className="flex space-x-8 hidden md:block">
                <button>
                  <p className=" tracking-widest text-customBlue hover:text-blue-400 cursor-pointer mt-3">
                    [ Beta ]
                  </p>
                </button>
                <button>
                  <p className=" tracking-widest text-customBlue hover:text-blue-400 cursor-pointer mt-3">
                    [ Docs ]
                  </p>
                </button>
                <button>
                  <p className=" tracking-widest text-customBlue hover:text-blue-400 cursor-pointer mt-3">
                    [ Github ]
                  </p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl  mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4 tracking-wider">
            <span className="text-customBlue ">Restaking</span>|<br />
            Automation
          </h1>
          <p className="font-geistMono text-white text-md mb-6 leading-8  ">
            <TypeAnimation
              sequence={[
                "Automate everything. Ensemble makes it easy to create and securely execute automated workflows that operate over multiple smart contracts and networks.",
                10,
              ]}
              speed={50}
              repeat={5}
            />
          </p>
          <button>
            <p className="text-xl tracking-widest text-customBlue hover:text-blue-400 cursor-pointer mt-3">
              [ Get In Touch ]
            </p>
          </button>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="justify-self-center lg:justify-self-end"
        >
          <CubeGrid />
        </motion.div>
      </section>

      {/* Ensemble Workflow Section */}
      <section className="max-w-7xl  mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="justify-self-center lg:justify-self-start"
        >
          <CubeCluster />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="">
            <p className="mb-6 text-5xl md:text-7xl font-bold  tracking-wider font-mono">
              {" "}
              Ensemble
            </p>
            <p className="mb-3 text-5xl md:text-7xl font-bold  tracking-wider text-customBlue font-mono">
              Workflow
            </p>
          </div>
          <p className=" text-md leading-8 font-geistMono text-white">
            45% of blockchain code follows the same pattern and shares common
            challenges. Ensemble focuses engineers where to focus on the core
            logic and operate blockchains effectively. We make what is difficult
            and inaccessible easy and affordable.
          </p>
          <button>
            <p className="text-xl tracking-widest text-blue-500 hover:text-blue-400 cursor-pointer mt-3">
              [ Learn More ]
            </p>
          </button>
        </motion.div>
      </section>

      {/* How it works Section */}
      <section className="max-w-7xl  mx-auto px-4 py-20">
        <motion.h2
          className="text-[3.3rem] md:text-7xl font-mono font-bold text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How it works
        </motion.h2>
        <p className="text-center font-geistMono text-white text-md tracking-wide leading-8  md:w-[800px] md:mx-auto md:mb-10">
          Ensemble creates a marketplace that connects workflow builders and
          node operators with users seeking automated solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Build",
              description:
                "Developers build the automated workflows using Ensemble developer framework.",
            },
            {
              step: 2,
              title: "Configure",
              description:
                "Users configure workflow parameters adjusting to specific user case.",
            },
            {
              step: 3,
              title: "Execute",
              description:
                "Node operators execute the workflows by running the Ensemble Engine.",
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              className="bg-zinc-900 p-6 rounded-lg "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.step * 0.2 }}
            >
              <div className="text-white text-xl">
                {item.step}_{" "}
                <span className="text-customBlue_secondary ml-2 font-mono">
                  {item.title}
                </span>
              </div>
              <p className="text-gray-400 mt-2 text-xl tracking-widest leading-8 font-geistMono">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scalable Efficient Section */}
      <section className="max-w-7xl  mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="">
            <p className="mb-6 text-5xl font-bold font-mono  tracking-wider md:text-7xl">
              {" "}
              Scalable
            </p>
            <p className="mb-3 text-5xl font-bold text-customBlue  tracking-wider font-mono md:text-7xl">
              Efficient
            </p>
          </div>
          <p className="font-geistMono text-white text-md leading-8">
            Our system efficiently handles an unlimited number of complex user
            intents, ensuring smooth operations and scalability across various
            blockchain applications.
          </p>
          <p className="text-xl tracking-widest text-customBlue mt-3">
            Expand Effortlessly
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 2.5, opacity: 0 }}
          whileInView={{ scale: 2.5, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="justify-self-center lg:justify-self-end"
        >
          <Lottie animationData={cube3} loop={true} className="w-64 h-64" />
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl  mx-auto px-4 py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="">
            <h2 className="text-4xl md:text-7xl font-mono mb-8 font-bold">
              Contact us
            </h2>
            <form className=" space-y-1 bg-zinc-900 p-8 rounded-2xl">
              <div className="space-y-2 mb-8">
                <label>Name</label>
                <Input
                  placeholder=""
                  className="bg-zinc-900 border-zinc-800 mb-6 p-5"
                />
              </div>
              <div className="space-y-2 mb-8 pb-6">
                <label className="mt-8 pt-8">Company</label>
                <Input
                  placeholder=""
                  className="bg-zinc-900 border-zinc-800 mb-6 p-5"
                />
              </div>
              <div className="space-y-2 mt-8 pb-6">
                <label>E-mail address</label>
                <Input
                  placeholder=""
                  className="bg-zinc-900 border-zinc-800 p-5"
                />
              </div>
              <div className="space-y-2 mb-8">
                <label>How can we help?</label>
                <Textarea
                  placeholder=""
                  className="bg-zinc-900 border-zinc-800 min-h-[100px] mb-10 "
                />
              </div>
              <button>
                <p className=" text-customBlue hover:text-blue-400 mt-14 tracking-widest">
                  [ Subscribe ]
                </p>
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-2 md: mt-28 font-mono">Join Beta</h3>
              <p className="text-gray-500 font-geistMono text-lg tracking-wider font-semibold leading-8">
                Run your first blockchain automation with Ensemble. Sign up for
                early access to our platform.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-2 font-mono">Are you a business?</h3>
              <p className="text-gray-500 font-geistMono text-lg tracking-wide font-semibold leading-8">
                Contact us to discuss your specific needs and see how blockchain
                automation can streamline your business.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-2 font-mono">DeFi?</h3>
              <p className="text-gray-500 font-geistMono text-lg tracking-wider font-semibold leading-8">
                We&apos;a special offer for you. Lower your & bundle for a 0%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-zinc-600"></hr>

      <footer className="max-w-7xl mx-auto pb-20 md:p-0 p-4">
        <div className="">
          <div className=" mt-12 ">
            <span className="text-blue-400">ENSEMBLE.CODES</span>
            <div className="flex md:gap-36 gap-12 mt-12">
              <div className="space-y-3">
                <span className=" font-bold text-lg font-mono">Company</span>
                <div className="space-y-3 text-gray-500">
                  <p>About</p>
                  <p>Who we are</p>
                </div>
              </div>
              <div className="space-y-3">
                <span className=" font-bold font-mono text-lg">
                  More from us
                </span>
                <div className="space-y-3 text-gray-500">
                  <p>LinkedIn</p>
                  <p>X</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
