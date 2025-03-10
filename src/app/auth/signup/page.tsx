"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UserTypeSelection from "./UserTypeSelection";
import VendorForm from "./VendorForm";
import MainLayout from "@/components/layout/GlobalLayout";
import BasicForm from "./BasicForm";
import ImageFond1 from '@/images/auth/souvenirs-7864977_1920.jpg'

export default function Register() {
  const [userType, setUserType] = useState<"client" | "vendeur">("client");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
    // Champs spécifiques aux vendeurs
    nomBoutique: "",
    descriptionBoutique: "",
    categorieArtisanat: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription comme", userType, "avec les données:", formData);
  };

  return (
    <MainLayout>
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={ImageFond1}
            alt="Artisanat traditionnel"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl p-8 space-y-8 bg-white/80 backdrop-blur-0 rounded-lg shadow-xl">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900">
                Marketplace Artisanale
              </h1>
              <h2 className="mt-3 text-xl font-bold text-gray-700">
                Créer un compte
              </h2>
            </div>

            {/* Sélection du type d'utilisateur */}
            <UserTypeSelection userType={userType} setUserType={setUserType} />

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Informations personnelles */}
                <BasicForm formData={formData} handleChange={handleChange} />
                {/* Formulaire vendeur */}
                {userType === "vendeur" && (
                  <VendorForm formData={formData} handleChange={handleChange} />
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  J&apos;accepte les conditions générales d&apos;utilisation et
                  la politique de confidentialité
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300"
                >
                  Créer mon compte{" "}
                  {userType === "vendeur" ? "vendeur" : "client"}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Déjà inscrit?{" "}
                <Link
                  href="/login"
                  className="font-medium text-amber-600 hover:text-amber-500"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
