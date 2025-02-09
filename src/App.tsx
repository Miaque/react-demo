import { Button, Input } from '@mui/material'
import { useEffect, useRef } from 'react'
import SendIcon from '@mui/icons-material/Send'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    console.log('inputRef', inputRef.current)
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex gap-2">
        <Input inputRef={inputRef} />
        <Button size='small' startIcon={<SendIcon />} onClick={handleClick}>
          聚焦输入框
        </Button>
      </div>
    </div>
  )
}

export default App
