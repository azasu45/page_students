import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@alias/lib/database.types";
import { Button, Card, Flex, Text, TextInput } from "@tremor/react";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: ejercicio } = await supabase
    .from("ejercicios")
    .select("*")
    .eq("id", params.id);

  if (!ejercicio) return <>no se encontró el ejercicio</>;

  return (
    <div className="w-full max-w-4xl">
      <Card>
        <Flex>
          <form
            className="w-full flex flex-col space-y-2"
            action={`/api/ejercicios/edit/${ejercicio[0].id}`}
            method="POST"
          >
            <div>
              <Text>Titulo</Text>
              <TextInput
                name="titulo"
                defaultValue={ejercicio[0].titulo ?? ""}
              />
            </div>
            <div className="w-full">
              <Text>código</Text>
              <textarea
                name="codigo"
                className="w-full text-black max-h-60"
                defaultValue={ejercicio[0].codigo ?? ""}
              ></textarea>
            </div>
            <Button type="submit">Guardar</Button>
          </form>
        </Flex>
      </Card>
    </div>
  );
}
