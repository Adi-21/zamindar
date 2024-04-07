import { curve } from "../assets";
import Button from "./Button";
// import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  return (
    <div className="container relative">
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6">
          Land a Piece of the Futeure&nbsp;:&nbsp;Tokenized and Ready to Grow
          with {` `}
          <span className="inline-block relative">
            Zamindar{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Tokenization of Land, Fractional Ownership, Decentralized Finance and
          Trading of Real Estate Assets
        </p>
        <Button href="/" white>
          Get started
        </Button>
      </div>
      {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
    </div>
  );
};

export default Hero;
