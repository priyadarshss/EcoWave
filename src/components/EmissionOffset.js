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
        
      </Stack>
    </Container>
  )
}

export default ToggleRow
