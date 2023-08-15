import { Box } from '@chakra-ui/react'
import { ChatState } from '../context/ChatProvider'
import SideDrawer from '../components/Authentication/misillinious/SideDrawer'

import ChatBox from '../components/ChatBox'
import Mychat from '../components/Mychat'
import { useState } from 'react'

const Chatpage = () => {
  const { user }= ChatState()
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{width:"100%"}}>
      {user && <SideDrawer/>}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && <Mychat fetchAgain={fetchAgain} />} 
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
      </Box>
    </div>
  )
}

export default Chatpage