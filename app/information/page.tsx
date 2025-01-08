'use client'

import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import InformationCard from "./InformationCard";
import { informationMock } from "./informationMock";

export default function Information() {

    useEffect(() => {
        document.title = "Information - Cozy Care";
    }, []);

    return (
        <main className="flex flex-col min-h-[100dvh]">
            <NavBar />
            <div className="grow flex flex-col items-center mb-4 lg:w-[1000px] lg:mx-auto">
                <div className=" w-full h-max">
                    <Image
                        alt="Information background image"
                        src="https://www.flinn.org/wp-content/uploads/2023/04/GME-1024x326.webp"
                        width="100%"
                        height={150}
                        radius="none"
                        className="object-cover object-center"
                    />
                </div>

                <div className="flex justify-center sticky top-[111px] w-full z-[99] transition bg-white dark:bg-cozy-background-dark">
                    Search bar here
                </div>

                <div className="flex flex-col w-full items-center gap-4">
                    {informationMock.map((data, index) => (
                        <InformationCard 
                            key={index}
                            title={data.title}
                            imgUrl={data.imgUrl}
                            about={data.about}
                            by={data.by}
                            releaseDate={data.releaseDate}
                            edittedDate={data.edittedDate}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}