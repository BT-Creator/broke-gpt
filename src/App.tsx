import { MdSend } from 'react-icons/md'
import './App.css'
import { ActionIcon, Affix, Group, Stack, Text, TextInput } from '@mantine/core'
import { useState } from 'react'
import Message from './components/Message';

interface ChatMessage {
  "id": number;
  "userCreated": boolean;
  "message": string;
}

function App() {
  const [chatlog, setChatlog] = useState<Array<ChatMessage>>([{
    id: 0,
    userCreated: false,
    message: 'Welcome, how can I help you, you lazy human?'
  }])
  const [currentPrompt, setCurrentPrompt] = useState<ChatMessage>({
    id: chatlog.length,
    userCreated: true,
    message: ''
  });
  const [error, setError] = useState('')

  const changeCurrentPrompt = (prompt:string) => {
    if(prompt !== ''){
      setError('')
      setCurrentPrompt({ id: chatlog.length, userCreated: true, message: prompt })
    } else {
      setCurrentPrompt({ id: chatlog.length, userCreated: true, message: prompt })
    }
  }
  
  const submitPrompt = () => {
    (currentPrompt.message !== '')
      ? setChatlog([...chatlog, currentPrompt as ChatMessage])
      : setError('Please fill in your question here')
  }

  return (
    <>
      <Stack mx='xl' gap='md' mt={'lg'}>
        {chatlog.map((chat) => <Message userGenerated={chat.userCreated}><Text>{chat.message}</Text></Message>)}
      </Stack>
      
      <Affix
        position={{ bottom: 0, left: 0 }}>
        <Group
          justify='space-between'
          w='100vw'
          px='5vw'
          py='lg'
          bg='gray'>
          <TextInput
            style={{ flexGrow: 1 }}
            onChange={(e) => changeCurrentPrompt(e.currentTarget.value)}
            error={(error === '') ? undefined : error} />
          <ActionIcon
            size='xl'
            onClick={submitPrompt}>
            <MdSend />
          </ActionIcon>
        </Group>
      </Affix>
    </>
  )
}

export default App
