import { Database } from "@alias/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Card } from "@tremor/react";
import { cookies } from "next/headers";
import TextCode from "./text-code";

export const dynamic = "force-dynamic";

async function Page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: ejercicio } = await supabase
    .from("ejercicios")
    .select("*")
    .eq("id", params.id);

  if (!ejercicio) return <>no se encontró el ejercicio</>;

  return (
    <div>
      <Card>
        <TextCode text={ejercicio[0]?.codigo ?? ""} />
      </Card>
    </div>
  );
}

export default Page;
