import Wrapper from '@/layout/Wrapper/Wrapper'
import { Container, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h4" component="h2" textAlign={'center'} my={5} fontWeight={'bold'}>
            About Us
        </Typography>
      </Container>
    </Wrapper>
  )
}

export default Index
