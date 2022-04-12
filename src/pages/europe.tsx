import { Box, Flex, HStack, Text, VStack, Image, Icon, useBreakpointValue, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

export default function Europe() {

  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  })

  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '3000px',
    xl: '1900px',
    '2xl': '1536px',
  }

  const theme = extendTheme({ breakpoints })

  return (
    <>
      <Head>
        <title>WorlTrip | Europe</title>
      </Head>

      <Header />

      <Flex
        height={'500px'}
        bgImage={"url('/images/europe/london.png')"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize={'cover'}

      >
        <Flex
          maxW={'80%'}
          mx={'10%'}
          position={'relative'}
          top={'-30px'}
        >
          <Text
            alignSelf={'flex-end'}
            p={3}
            fontSize={'5xl'}
            color={'#fff'}
            fontWeight={'bold'}
          >
            Europa
          </Text>
        </Flex>
      </Flex>

      <Flex
        mx={'10%'}
        color={'gray.700'}
        maxW={'80%'}
        justify={'space-around'}
        mt={50}
      >

        <Box
          maxW={'50%'}
          textAlign={"justify"}
          lineHeight={1.8}
        >
          <Text>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
            a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural,
            o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </Box>

        <Flex
          w={'50%'}
          justify={'space-evenly'}
        >
          <Flex alignItems={'center'} flexDirection={'column'}>
            <Text color={'yellow.800'} fontSize={'5xl'}>50</Text>
            <Text>países</Text>
          </Flex>

          <Flex alignItems={'center'} flexDirection={'column'}>
            <Text color={'yellow.800'} fontSize={'5xl'}>60</Text>
            <Text>línguas</Text>
          </Flex>

          <Flex alignItems={'center'} flexDirection={'column'}>
            <Text color={'yellow.800'} fontSize={'5xl'}>27</Text>
            <Text>cidades +100</Text>
          </Flex>
        </Flex>

      </Flex>

      <Flex
        maxW={'80%'}
        mx='auto'
        mt={50}
        flexDirection={'column'}
      >
        <Text fontSize={'3xl'} color={'gray.700'}>
          Cidades +100
        </Text>

        <HStack>

          <Flex flexWrap={'wrap'} gap={'30px'}>

            <Box
              w={'250px'}
              my={10}
            >
              <Image
                src={'/images/europe/londres.jpg'}
                alt={'londres'}
                h={'150px'}
                objectFit={'cover'}
              />
              <Flex
                h={'110px'}
                p={3}
                border={'1px'}
                borderColor={'yellow.100'}
                justify={'space-between'}
              >
                <Box py={3}>
                  <Text color={'gray.700'} fontSize={'lg'}>Londres</Text>
                  <Text fontSize={'sm'} py={3}>Reino Unido</Text>
                </Box>

                <Image
                  w={7}
                  h={7}
                  src={'/images/europe/icon-londres.png'}
                  alt={'icon-londres'}
                  position={'relative'}
                  top={30}
                />
              </Flex>
            </Box>

            <Box
              w={'250px'}
              my={10}
            >
              <Image
                src={'/images/europe/paris.jpg'}
                alt={'paris'}
                h={'150px'}
                w={'250px'}
                objectFit={'cover'}
              />
              <Flex
                w={'100%'}
                h={'110px'}
                p={3}
                border={'1px'}
                borderColor={'yellow.100'}
                justify={'space-between'}
              >
                <Box py={3}>
                  <Text color={'gray.700'} fontSize={'lg'}>Paris</Text>
                  <Text fontSize={'sm'} py={3}>França</Text>
                </Box>

                <Image
                  w={7}
                  h={7}
                  src={'/images/europe/icon-paris.png'}
                  alt={'icon-paris'}
                  position={'relative'}
                  top={30}
                />
              </Flex>
            </Box>

            <Box
              w={'250px'}
              my={10}
            >
              <Image
                src={'/images/europe/roma.jpg'}
                alt={'roma'}
                h={'150px'}
                w={'250px'}
                objectFit={'cover'}
              />
              <Flex
                h={'110px'}
                p={3}
                border={'1px'}
                borderColor={'yellow.100'}
                justify={'space-between'}
              >
                <Box py={3}>
                  <Text color={'gray.700'} fontSize={'lg'}>Roma</Text>
                  <Text fontSize={'sm'} py={3}>Itália</Text>
                </Box>

                <Image
                  w={7}
                  h={7}
                  src={'/images/europe/icon-roma.png'}
                  alt={'icon-roma'}
                  position={'relative'}
                  top={30}
                />
              </Flex>
            </Box>

            <Box
              w={'250px'}
              my={10}
            >
              <Image
                src={'/images/europe/praga.jpg'}
                alt={'praga'}
                h={'150px'}
                w={'250px'}
                objectFit={'cover'}
              />
              <Flex
                h={'110px'}
                p={3}
                border={'1px'}
                borderColor={'yellow.100'}
                justify={'space-between'}
              >
                <Box py={3}>
                  <Text color={'gray.700'} fontSize={'lg'}>Praga</Text>
                  <Text fontSize={'sm'} py={3}>República Tcheca</Text>
                </Box>

                <Image
                  w={7}
                  h={7}
                  src={'/images/europe/icon-praga.png'}
                  alt={'icon-praga'}
                  position={'relative'}
                  top={30}
                />
              </Flex>
            </Box>

            <Box
              w={'250px'}
              my={10}
            >
              <Image
                src={'/images/europe/amsterda.jpg'}
                alt={'amsterda'}
                h={'150px'}
                w={'250px'}
                objectFit={'cover'}
              />
              <Flex
                h={'110px'}
                p={3}
                border={'1px'}
                borderColor={'yellow.100'}
                justify={'space-between'}
              >
                <Box py={3}>
                  <Text color={'gray.700'} fontSize={'lg'}>Amsterdã</Text>
                  <Text fontSize={'sm'} py={3}>Holanda</Text>
                </Box>

                <Image
                  w={7}
                  h={7}
                  src={'/images/europe/icon-amsterda.png'}
                  alt={'icon-amsterda'}
                  position={'relative'}
                  top={30}
                />
              </Flex>
            </Box>
          </Flex>

        </HStack>
      </Flex>
    </>
  )
}