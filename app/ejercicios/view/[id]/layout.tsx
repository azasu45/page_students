import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Text } from "@tremor/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Database } from "@alias/lib/database.types";

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { id: string };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: ejercicios } = await supabase
    .from("ejercicios")
    .select("id,titulo");

  if (!ejercicios) return redirect("/");

  return (
    <div className="w-full max-w-7xl flex flex-col">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {ejercicios.map((item) => (
          <Link
            key={item.id}
            href={`/ejercicios/view/${item.id}`}
            className={
              params.id === item.id
                ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
            }
          >
            <Text>{item.titulo}</Text>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
