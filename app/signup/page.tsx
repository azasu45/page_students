"use client";

import { Bold, Button, TextInput } from "@tremor/react";

export default function Login() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Iniciar sesión en su cuenta
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="/auth/signup"
            method="post"
          >
            <div className="space-y-1 md:space-y-2">
              <Bold>Correo</Bold>
              <TextInput name="email" placeholder="email@email.com" />
            </div>

            <div className="space-y-1 md:space-y-2">
              <Bold>Contraseña</Bold>
              <TextInput
                name="password"
                placeholder="Tu contraseña"
                type="password"
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              Registrarse
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
