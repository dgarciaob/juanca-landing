import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import InfoButton from "@/components/InfoButton";
import { learnings } from "@/constants/learnings";
import { Check } from "lucide-react";
import "@/components/css/Hero.css";

export default function Home() {
  return (
    <main className="mt-20">
      {/* Hero Section */}
      <section className="h-auto w-auto background-gradient rounded-3xl mx-8 px-16 py-20 overflow-hidden relative">
        <div className="animate-hero-slide-up">
          <h1 className="text-2xl font-semibold text-[#050250] lg:text-6xl max-w-3xl">
            Domina el Mercado Inmobiliario con nuestra guía experta
          </h1>
          <p className="mt-10 max-w-3xl lg:text-xl font-medium">
            Obtén acceso a las estrategias, prácticas de venta y las mejores
            técnicas de negociación de un experto para escalar tu negocio.
          </p>
          <div className="md:flex md:flex-row md:space-x-6 mt-24">
            <button className="bg-[#050250] px-8 py-4 rounded-full text-white font-bold hover:scale-105 hover:bg-[#050250]/80 transition-all duration-300">
              Agenda una Cita
            </button>
            <InfoButton />
          </div>
        </div>

        <Image
          src="/imgEjemplo.png"
          alt="Juan Carlos Guzman"
          width="1000"
          height="1000"
          className="w-80 absolute bottom-0 right-10 z-40 animate-hero-slide-up transition-all duration-300 ease-in-out"
        />
        <div className="bg-[#050250] absolute -bottom-40 -right-8 h-[26rem] w-[26rem] rounded-full animate-circle-grow" />
      </section>

      {/* Problem Section */}
      <section className="h-auto w-auto lg:mt-60 rounded-b-3xl">
        <MaxWidthWrapper className="flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-4">
            <h2 className="text-center text-xl lg:text-5xl max-w-3xl text-[#050250] font-bold">
              ¿Qué aprenderás en esta guía?
            </h2>
            <p className="text-center text-lg lg:text-2xl max-w-2xl text-muted-foreground font-medium">
              Aprende de un referente <strong>nacional</strong> del rubro
            </p>
          </div>

          <div className="flex flex-col lg:flex lg:flex-row lg:space-x-32 items-center mt-24">
            <Image
              src="/hero-4.jpg"
              alt="Team Picture"
              width="1000"
              height="1000"
              className="object-contain w-1/2 h-full rounded-3xl"
            />
            <div className="flex flex-col space-y-8 w-1/2">
              {learnings.map((learning, id) => {
                return (
                  <React.Fragment key={id}>
                    <div className="flex flex-row space-x-4 items-center">
                      <div className="flex justify-center items-center h-6 w-6 rounded-full bg-[#050250]">
                        <Check size={16} color="white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#050250]">
                        {learning.title}
                      </h3>
                    </div>
                    <p className="text-base text-pretty font-medium">
                      {learning.description}
                    </p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="h-auto w-auto lg:mt-36 bg-[#050250]">Hola</section>
    </main>
  );
}
