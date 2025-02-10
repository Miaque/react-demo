import SendIcon from '@mui/icons-material/Send'
import { Button, Input } from '@mui/material'
import { useEffect, useRef } from 'react'
import Icon from './components/Icon'
function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    console.log('inputRef', inputRef.current)
  }, [])

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='flex gap-2 items-center'>
        <span className='icon-[mdi-light--home]'></span>
        <Input inputRef={inputRef} />
        <Button size='small' startIcon={<SendIcon />} onClick={handleClick}>
          聚焦输入框
        </Button>
        {/* <SvgIcon component={() => <Icon icon={'mdi-light:home'} width="1em" height="1em" />}></SvgIcon> */}
        <Icon icon={'mdi-light:home'} size='1em' color='red' />
        <Icon icon={'react'} size='1em' color='red' spin={true} />
      </div>
    </div>
  )
}

export default App
