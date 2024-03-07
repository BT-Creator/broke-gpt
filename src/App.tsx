import { MdSend } from 'react-icons/md'
import './App.css'
import { ActionIcon, Affix, Center, Group, Loader, Stack, Text, TextInput } from '@mantine/core'
import { useRef, useState } from 'react'
import Message from './components/Message';
import generateResponse from './utils/responseGenerator';
import { ChatMessage } from './interfaces/ChatMessage';
import { Prompt } from './interfaces/Prompt';
import Header from './components/Header';

function App() {
  const [chatlog, setChatlog] = useState<Array<ChatMessage>>([{
    id: 0,
    userCreated: false,
    message: <Text>Welcome, how can I help you, you lazy human?</Text>
  }])
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>({
    id: chatlog.length,
    userCreated: true,
    message: ''
  });
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeCurrentPrompt = (prompt: string) => {
    if (prompt !== '') {
      setError('')
      setCurrentPrompt({ id: chatlog.length, userCreated: true, message: prompt })
    } else {
      setCurrentPrompt({ id: chatlog.length, userCreated: true, message: '' })
    }
  }

  const submitPrompt = async () => {
    if (currentPrompt.message !== undefined) {
      setChatlog([...chatlog, {
        id: chatlog.length,
        userCreated: true,
        message: <Text>{currentPrompt.message}</Text>
      }])
      setLoading(true)
      await new Promise(r => setTimeout(r, 3000));
      generateGptMsg()
    } else {
      setError('Please fill in your question here')
    }
    setCurrentPrompt({ id: chatlog.length, userCreated: true, message: '' })
    if (inputRef.current) { inputRef.current.value = '' }
  }

  const generateGptMsg = () => {
    setChatlog([...chatlog, {
      id: chatlog.length + 1,
      userCreated: false,
      message: generateResponse(currentPrompt.message)
    }])
    setLoading(false)
  }

  return (
    <>
      <Affix position={{ top: 0, left: 0 }}>
        <Header />
      </Affix>
      <Stack mb="10vh" mt="7vh" gap={0}>
        {chatlog.map((chat) => <Message userGenerated={chat.userCreated} key={chat.id}>{chat.message}</Message>)}
        {loading && (
          <Center p='lg' bg="#212121">
            <Loader type='dots' color='#1ec480' />
          </Center>
        )}
      </Stack>
      <Affix
        position={{ bottom: 0, left: 0 }}>
        <Group
          justify='space-between'
          w='100vw'
          px='5vw'
          py='lg'
          bg='#171717'
          h="10vh">
          <TextInput
            style={{ flexGrow: 1 }}
            onChange={(e) => changeCurrentPrompt(e.currentTarget.value)}
            error={(error === '') ? undefined : error}
            ref={inputRef} />
          <ActionIcon
            size='xl'
            onClick={submitPrompt}
            color="#1ec480">
            <MdSend />
          </ActionIcon>
        </Group>
      </Affix>
    </>
  )
}

export default App
