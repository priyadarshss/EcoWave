import * as React from 'react'
import { Container, Stack, Box, Text } from '@chakra-ui/react'

const ToggleRow = () => {
  const [activeText, setActiveText] = React.useState('happy')
  const texts = ['Measure', 'Reduce', 'Contribute', 'Report']

  const handleToggle = (text) => {
    setActiveText(text)
  }

  return (
    <Container
      maxW='7xl'
      px={{ base: 6, md: 3 }}
      py={24}
      bg='black'
      height='500px'
      color='white'
    >
      <Stack direction='row' spacing={4} justifyContent='center'>
        <Box
          display='flex'
          flexDirection='row'
          borderRadius='20px'
          border='1px solid white'
          overflow='hidden'
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
              borderRadius='5px'
              padding='10px'
              margin='20px'
              onClick={() => handleToggle(text)}
              backgroundColor={activeText === text ? '#00d062' : 'transparent'} // Change background color based on active text
              color={activeText === text ? 'black' : 'white'}
              fontWeight={700}
            >
              <Text>{text}</Text>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  )
}

export default ToggleRow
