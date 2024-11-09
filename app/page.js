"use client"
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {


  return (
    <>
      <main className="w-full bg-orange-100">
        <section className="flex justify-center items-center">
          <div className="left w-[50%] min-h-[91vh] flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl font-bold text-center">Welcome to LeetJoke</h1>
            <p className="text-center text-lg">The best place to find the funniest jokes on the internet</p>
            <Link href={"/generate"}><button className="bg-orange-400 px-4 py-2 rounded-md">Get Started</button></Link>
          </div>
          <div className="right bg-orange-200 w-[50%] min-h-[91vh] flex justify-center items-center">
            <Image src={"/hero.png"} alt="A laughing emoji" height={500} width={500} />
          </div>
        </section>
      </main>
    </>
  );
}