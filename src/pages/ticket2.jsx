import {Flex, VStack, Stack, Heading, Box, Image, Input, Center, Link} from "@chakra-ui/react";
import { useRef, useEffect, useState } from 'react';

export default function Ticket() {
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log("Keypress Event: ", event.target.value)
      if(event.target.value === "") return;

      event.target.select()
      // event.target.value = ""

      let value = localStorage.getItem(JSON.stringify(event.target.value)) || undefined;
      console.log("Value: ", value)
      if(value === undefined) {
        console.log("Adding the value: ", event.target.value)
        localStorage.setItem(JSON.stringify(event.target.value), Date().toLocaleString());
      } else {
        console.log("Duplicate!!!")
        alert("Duplicate Ticket { " + event.target.value + " }!!")
      }
    }
  }

  const handleBlur = event => {
    event.target.focus()
  };

  return (
    <VStack>
      <Flex w="100%" bgColor="#FF9933" align="center" justify="center">
        <Heading
          ml="8" size="md" fontSize="5xl" fontWeight='semibold' bgColor='#000080' bgClip="text">Swades</Heading>
      </Flex>
      <Stack>
        <Flex direction="row" spacing="200px" p="16" alignSelf="flex-start">
          <Box>
            <Image alignSelf="center" src="./img/DDD.jpeg"/>
          </Box>
          <Center p="8">
              <Input w="300px" placeholder='Scan Ticket...' ref={inputRef} type="text" onKeyPress={handleKeyPress} onBlur={handleBlur}/>
          </Center>
        </Flex>
      </Stack>
      <div style={{ position: "fixed", height: 60, left: 0, bottom: 0, right: 0, backgroundColor: "#138808" }}>
        <Center>
          <Heading p="4" size="md" fontSize="2xl" fontWeight='semibold' bgColor="#000080" bgClip="text">
              <Link href='http://aiaevents.org' isExternal>www.aiaevents.org</Link>
          </Heading>
        </Center>
      </div>
    </VStack>
  )
}
