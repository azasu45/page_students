import { Button, Card, Flex, Text, TextInput } from "@tremor/react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full max-w-4xl">
      <Card>
        <Flex>
          <form
            className="w-full flex flex-col space-y-2"
            action={`/api/ejercicios/new`}
            method="POST"
          >
            <div>
              <Text>Titulo</Text>
              <TextInput name="titulo" />
            </div>
            <div className="w-full">
              <Text>código</Text>
              <textarea
                name="codigo"
                className="w-full text-black max-h-60"
              ></textarea>
            </div>
            <Button type="submit">Guardar</Button>
          </form>
        </Flex>
      </Card>
    </div>
  );
}
