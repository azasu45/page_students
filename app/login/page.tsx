"use client";

import { Bold, Button, Divider, Text, TextInput } from "@tremor/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
//mport AuthGoogleButton from "./auth-google-button";

export default function Login() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Iniciar sesión en su cuenta
          </h1>
          <div className="flex justify-center">
            {/* <AuthGoogleButton /> */}
          </div>
          <Divider />
          <form
            className="space-y-4 md:space-y-6"
            action="/auth/login"
            method="post"
          >
            <div className="space-y-1 md:space-y-2">
              <Bold>Correo</Bold>
              <TextInput
                name="email"
                error={!!error}
                placeholder="email@email.com"
              />
            </div>

            <div className="space-y-1 md:space-y-2">
              <Bold>Contraseña</Bold>
              <TextInput
                error={!!error}
                name="password"
                placeholder="Tu contraseña"
                type="password"
              />
            </div>

            <Text color="red">{error ? error : ""}</Text>

            <Button type="submit" className="w-full mt-4">
              Iniciar sesión
            </Button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              ¿Aún no tienes una cuenta?{" "}
              <Link
                href="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Inscribirse
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
