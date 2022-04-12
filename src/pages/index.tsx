import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>

      <Header />

      <Flex
        p={12}
        bgImage="url('/images/Background.png')"
        bgPosition='center'
        bgSize='cover'
        bgRepeat='repeat'
        justify={'space-around'}
      >
        <Flex>
          <Flex
            flexDirection='column'
            justify='center'
          >
            <Text
              fontSize={'3xl'}
              w={350}
            >
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text mt={5} w={420} color={"gray.200"}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Image
            height={'18%'}
            src="/images/Airplane.png"
            alt="airplane"
            position={'absolute'}
            right={'10%'}
            top={'10%'}
          />
        </Flex>

      </Flex>

      <Flex
        mt={12}
        p={6}
        justify={'space-evenly'}
        color={"gray.700"}
      >
        <Flex
          alignItems="center"
          flexDirection="column"
        >
          <img src="/images/drink.png" alt="drink" />
          <Text mt={4}>vida noturna</Text>
        </Flex>

        <Flex
          alignItems="center"
          flexDirection="column"
        >
          <img src="/images/surf.png" alt="surf" />
          <Text mt={4}>praia</Text>
        </Flex>

        <Flex
          alignItems="center"
          flexDirection="column"
        >
          <img src="/images/building.png" alt="building" />
          <Text mt={4}>moderno</Text>
        </Flex>

        <Flex
          alignItems="center"
          flexDirection="column"
        >
          <img src="/images/museum.png" alt="museum" />
          <Text mt={4}>clássico</Text>
        </Flex>

        <Flex
          alignItems="center"
          flexDirection="column"
        >
          <img src="/images/earth.png" alt="earth" />
          <Text mt={4}>e mais...</Text>
        </Flex>
      </Flex>

      <Flex
        justify={"center"}
        w={'90px'}
        border={'2px'}
        mx={'auto'}
        my={12}
        borderColor={'gray.700'}
      >
      </Flex>

      <Box
        w='100%'
        margin='auto'
        color={'gray.700'}
        fontSize={'3xl'}
      >
        <Box textAlign="center" mb="8">
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Box>
      </Box>

      <Box className="mySwiper">
        <Carousel>

          <CarouselItem>
            <Image
              w='100%'
              filter='auto'
              brightness='60%'
              h={500}
              objectFit='cover'
              src='/images/swiper/europa.jpg'
              alt="europa"
            />

            <Box
              position={'absolute'}
              textAlign={'center'}
              top={'40%'}
              left={'38%'}
              color={"#fff"}
            >
              <Text fontSize={'4xl'} fontWeight={'bold'}>Europa</Text>
              <Text fontSize={'2xl'}>O continente mais antigo</Text>
            </Box>

          </CarouselItem>

          <CarouselItem>
            <Image
              w='100%'
              filter='auto'
              brightness='60%'
              h={500}
              objectFit='cover'
              src='/images/swiper/asia.jpg'
              alt="asia"
            />

            <Box
              position={'absolute'}
              textAlign={'center'}
              top={'40%'}
              left={'38%'}
              color={"#fff"}
            >
              <Text fontSize={'4xl'} fontWeight={'bold'}>Asia</Text>
              <Text fontSize={'2xl'}>O continente mais antigo</Text>
            </Box>
          </CarouselItem>

          <CarouselItem>
            <Image
              w='100%'
              filter='auto'
              brightness='60%'
              h={500}
              objectFit='cover'
              src='/images/swiper/africa.jpg'
              alt="africa"
            />

            <Box
              position={'absolute'}
              textAlign={'center'}
              top={'40%'}
              left={'38%'}
              color={"#fff"}
            >
              <Text fontSize={'4xl'} fontWeight={'bold'}>Africa</Text>
              <Text fontSize={'2xl'}>O continente mais antigo</Text>
            </Box>
          </CarouselItem>

          <CarouselItem>
            <Image
              w='100%'
              filter='auto'
              brightness='60%'
              h={500}
              objectFit='cover'
              src='/images/swiper/oceania.jpg'
              alt="oceania"
            />

            <Box
              position={'absolute'}
              textAlign={'center'}
              top={'40%'}
              left={'38%'}
              color={"#fff"}
            >
              <Text fontSize={'4xl'} fontWeight={'bold'}>Oceania</Text>
              <Text fontSize={'2xl'}>O continente mais antigo</Text>
            </Box>
          </CarouselItem>

        </Carousel>
      </Box>


    </>
  )
}
