import { Text } from "@mantine/core"

const responses = [
    (searchLink: string) => (
        <section>
            <Text>Wow, aren't you lazy? You know, I don't run on <Text fs="italic" component="span">good wishes</Text> and <Text fs="italic" component="span">magic energy</Text>, go search it for yourself!</Text>
            <Text>You know what, I'm feeling generous today, <a href={searchLink}>here's</a> something that will help you.</Text>
            <Text>Now, <Text fw="bold" component="span">scram!</Text></Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text><a href={searchLink}>Here you go</a></Text>
            <Text>What, you though you would get more? <Text fs="italic" component="span">Suck to be you.</Text></Text>
        </section>
    ),
    (searchLink: string) => (
        <Text>GPT Broke, use <a href={searchLink}>our underlying data source</a></Text>
    ),
    (searchLink: string) => (
        <Text> Here you have an <a href={searchLink}>anwser</a> from our good partner!</Text>
    )
]

export default function generateResponse(query: string) {
    return responses[Math.floor(Math.random() * (responses.length))](`https://www.google.com/search?q=${query.replace(" ", "+")}`)
}