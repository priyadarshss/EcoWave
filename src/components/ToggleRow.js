import * as React from 'react'
import { Container, Stack, Box, Text, VStack } from '@chakra-ui/react'
import With from "../../public/images/graph1.jpeg"
import Without from "../../public/images/graph2.jpeg"
import Image from 'next/image'

const ToggleRow = () => {
  const [activeText, setActiveText] = React.useState('With EcoWave')
  const texts = ['With EcoWave', 'Without EcoWave']

  const handleToggle = (text) => {
    setActiveText(text)
  }

  return (
    <VStack
      maxW='7xl'
      px={{ base: 6, md: 3 }}
      py={24}
      bg='black'
      height='625px'
      color='white'
    >
      <Stack direction='row' spacing={4} justifyContent='center'>
        <Box
          display='flex'
          flexDirection='row'
          borderRadius='20px'
          border='1px solid white'
          overflow='hidden'
          mt="-35px"
        >
          {texts.map((text, index) => (
            <Box
              key={index}
              width='200px'
              height='50px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              cursor='pointer'
              borderRadius='12px'
              margin='10px'
              onClick={() => handleToggle(text)}
              backgroundColor={activeText === text ? '#00d062' : 'transparent'}
              color={activeText === text ? 'black' : 'white'}
              fontWeight={700}
            >
              <Text>{text}</Text>
            </Box>
          ))}
        </Box>
      </Stack>
      {activeText === 'With EcoWave' ? (
        <Image
          src={With}
          alt='with-us'
          height={350}
          style={{ marginTop: '50px', borderRadius: '15px' }}
        />
      ) : (
        <Image
          src={Without}
          alt='without-us'
          height={350}
          style={{ marginTop: '50px', borderRadius: '15px' }}
        />
      )}
    </VStack>
  )
}

export default ToggleRow
