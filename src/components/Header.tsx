import { Center, Title, Text } from "@mantine/core";

export default function Header(){
    return (
        <Center w="100vw" bg="#171717" c="white" pb="md">
          <Title order={1} ff="Err0r, sans-serif">Broke</Title><Text fw="bold">GPT</Text>
        </Center>
    );
}