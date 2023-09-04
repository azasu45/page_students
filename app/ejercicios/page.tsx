import { Database } from "@alias/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Card,
  Text,
} from "@tremor/react";
import Link from "next/link";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: ejercicios } = await supabase.from("ejercicios").select("*");

  if (!ejercicios) return <>Error</>;

  return (
    <div className="w-full max-w-4xl">
      <Card>
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Titulo</TableHeaderCell>
              <TableHeaderCell>Creado</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ejercicios.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.titulo}</TableCell>
                <TableCell>
                  {new Date(item.created_at).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Link href={`/ejercicios/${item.id}`}>
                    <Text>Ir</Text>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
