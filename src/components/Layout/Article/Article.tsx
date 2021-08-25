import { Box, Text } from '@chakra-ui/react'

type ArticleProps = {
  heading?: string
  body?: string
  children?: React.ReactNode
}

export const Article = ({
  children,
  heading,
  body,
  ...rest
}: ArticleProps): React.ReactElement => {
  return (
    <Box p={{ base: '0', md: '2rem' }} {...rest}>
      <Text
        as='h3'
        my='1rem'
        fontFamily='heading'
        fontSize='2rem'
        maxW='30ch'
        fontWeight='900'>
        {heading}
      </Text>
      <Text m='1rem 0' maxW='65ch' fontSize='lg' opacity='0.8' lineHeight={1.5}>
        {body}
        {children}
      </Text>
    </Box>
  )
}