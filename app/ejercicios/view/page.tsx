import { Card, List, ListItem, Title } from "@tremor/react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@alias/lib/database.types";
import { cookies } from "next/headers";
import Link from "next/link";

async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: ejercicios } = await supabase
    .from("ejercicios")
    .select("id,titulo,created_at");

  if (!ejercicios) return <>Error</>;

  return (
    <Card className="max-w-md">
      <Title>Ejercicio</Title>
      <List>
        {ejercicios.map((item) => (
          <ListItem className="w-full" key={item.id}>
            <Link href={`/ejercicios/view/${item.id}`}>{item.titulo}</Link>
            <span>{new Date(item.created_at).toLocaleDateString()}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Page;
