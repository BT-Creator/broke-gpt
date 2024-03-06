import { MdSend } from 'react-icons/md'
import './App.css'
import { ActionIcon, Affix, Group, TextInput } from '@mantine/core'



function App() {


  return (
    <>
      <Affix position={{bottom:0, left: 0}}>
        <Group justify='space-between' w='100vw' px='5vw' py='lg' bg='gray'>
          <TextInput style={{flexGrow: 1}}/>
          <ActionIcon size='xl'>
            <MdSend />
          </ActionIcon>
        </Group>
      </Affix>
    </>
  )
}

export default App
