import { FaHome } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section
            className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-[url('/bg-hero.jpeg')] bg-cover bg-no-repeat bg-center py-14">
            <div className="container items-center pb-12 ">
                <div className="col-span-7 text-[#ffffff]">
                    <p className="my-2 text-base text-center flex justify-center items-center gap-1">
                        <FaHome /> <span>Real Estate Agency</span>
                    </p>
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl my-4 text-center lg:w-8/12 mx-auto">
                        Miami Real Estate Specialist
                    </h1>
                    <p className="my-2 text-base text-center px-12 md:px-32 lg:px-56">
                        your specialists in residential and commercial properties. From dream homes to prime business spaces, trust our unique expertise to guide you in Miami/South Florida&apos;s dynamic market.
                    </p>
                </div>
            </div>
        </section>
    );
}