import {Flex, VStack, Stack, Heading, Box, Image, Input, Center, Link} from "@chakra-ui/react";

import Barcode from "../components/barcode";
import config from '../config.json'

export default function Ticket() {

  return (
    <VStack>
      <Flex w="100%" bgColor="#FF9933" align="center" justify="center">
        {/* <Heading
          ml="8" size="md" fontSize="5xl" fontWeight='semibold' bgColor='#000080' bgClip="text">Holi
        </Heading> */}
      </Flex>
      <Stack>
        <Flex direction="row" spacing="200px" p="16" alignSelf="flex-start">
          <Box>
            <Image alignSelf="center" src={config["display_image"]}/>
          </Box>
          <Center p="8">
              <Barcode />
          </Center>
        </Flex>
      </Stack>
      <div style={{ position: "fixed", height: 60, left: 0, bottom: 0, right: 0, backgroundColor: "white" }}>
        <Center>
          <Heading p="4" size="md" fontSize="2xl" fontWeight='semibold' bgColor="#000080" bgClip="text">
              <Link href='http://aiaevents.org' isExternal>www.aiaevents.org</Link>
          </Heading>
        </Center>
      </div>
    </VStack>
  )
}
