import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Home - Cozy Care",
};

export default function Home() {
    return (
        <main>
            Hello, home
        </main>
    );
}