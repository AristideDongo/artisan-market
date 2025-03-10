"use client";
import Image from "next/image";
import MainLayout from "@/components/layout/GlobalLayout";
import Image1 from "@/images/auth/souvenirs-7864977_1920.jpg";
import FormLogin from "./FormLogin";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'authentification à implémenter
  };

  return (
    <MainLayout>
      <div className="relative h-screen w-full">
        {/* Image de fond */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={Image1}
            alt="Artisanat traditionnel"
            fill
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Contenu */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-0 rounded-lg shadow-xl">
            <FormLogin handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
