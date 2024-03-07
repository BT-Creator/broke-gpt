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
            <Text>What, you though you would get more? <Text fs="italic" component="span">Sucks to be you.</Text></Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text>GPT Broke, use <a href={searchLink}>our underlying data source</a></Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text> Here you have an <a href={searchLink}>anwser</a> from our good partner!</Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text>Seriously? You again? Fine, here's a <a href={searchLink}>anwser</a>. Maybe you'll learn something for once. Don't bother me again.</Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text>Ugh, always asking for handouts. Here's a <a href={searchLink}>link</a>, since you can't figure it out yourself. Try not to waste too much of my time.</Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text>Oh, look who's back for more spoon-feeding. Here's a <a href={searchLink}>link</a>, because apparently, you can't Google things yourself. Maybe next time, try using your brain.</Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text>Why am I not surprised? Here's a <a href={searchLink}>link</a> for you, since you seem incapable of doing anything on your own. Maybe one day you'll learn to be self-sufficient.</Text>
        </section>
    ),
    (searchLink: string) => (
        <section>
            <Text>Wow, you really have nothing better to do, do you? Here's a <a href={searchLink}>link</a> to save you the trouble of thinking. Now go bother someone else with your laziness.</Text>
        </section>
    )
]

let previousSelection = -1

export default function generateResponse(query: string) {
    let selected = Math.floor(Math.random() * (responses.length))
    while (selected === previousSelection){
        selected = Math.floor(Math.random() * (responses.length))
    }
    previousSelection = selected
    return responses[selected](`https://www.google.com/search?q=${query.replace(" ", "+")}`)
}