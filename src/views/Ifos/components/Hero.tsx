import React from 'react'
import styled from 'styled-components'
import {Heading, Text} from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({as: 'h1', size: 'xl'})`
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`
const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Heading as="h1" size="lg" color="secondary" mb="40px" style={{textAlign: 'center', fontSize: 35}}>
          {TranslateString(500, 'IFO: Initial Farm Offerings')}
        </Heading>
        <Heading as="h4" style={{textAlign: 'center'}}>
          {TranslateString(502, 'Buy new tokens with a brand new token sale model.')}
        </Heading>
      </Container>
    </StyledHero>
  )
}

export default Hero
