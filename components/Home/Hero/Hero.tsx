import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/pixton-avatar-headshot-murali k..png";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Bala Komatireddy
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          MSCS @ SJSU • Blockchain Developer • AI Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I am a Blockchain Developer with expertise in Cosmos-SDK, Ethereum, and programming in Golang and Rust. I have experience delivering scalable decentralized systems, including blockchain explorers, DeFi APIs, and NFT platforms, along with contributing to open-source projects focused on Cosmos-SDK and cross-chain interoperability. Passionate about advancing blockchain technology, I specialize in building high-performance, secure solutions for the decentralized future.
        </p>
        <p className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Golang, Rust, Solidity, Python, Java, Cosmos-SDK, Ethereum, Web3.js, Ethers.js
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Bala-K"
        />
      </div>
    </div>
  );
};

export default Hero;
