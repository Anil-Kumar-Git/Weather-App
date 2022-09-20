import React, { useState } from 'react'
import { Message } from 'semantic-ui-react'

const  MessageBlock=({message,color})=>{
    const [state,setState]=useState(true)
  const handleDismiss = () => {
    setState(false)
  }
      return (<>
       {state?(
              <Message
              color={color}
              onDismiss={handleDismiss}
              header={""}
              content={message}
            />
            ):("")}
      </>     
      )
}

export default MessageBlock