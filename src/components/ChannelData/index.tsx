import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
  
  useEffect(() =>{
    const div = messagesRef.current;
    
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return <Container>
    <Messages ref={messagesRef}>
      {Array.from(Array(15).keys()).map((n) => (
        <ChannelMessage 
          key={n}
          author="NickDigs"
          date="21/06/2133"
          content="Sim, sim, tá bom."
        />
      ))}

      <ChannelMessage
        author="Diego Fernandes"
        date="21/06/2020"
        content={
          <>
            <Mention>@Guilherme Rodz</Mention>, me carrega no LOL e CS de novo
            por favor?
          </>
        }
        hasMention
        isBot        
         />
    </Messages>

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre"/>
      <InputIcon />
    </InputWrapper>

    

  </Container>

};

export default ChannelData;
