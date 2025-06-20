import { FC } from 'react'
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Card from '../generics/Card'

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Contact me</Heading>
                    </Fade>
                    <Card maxW={'85vw'} w={'2xl'} pb={8} overflow={'hidden'}>
                        <Flex textAlign={'center'} direction={{ base: 'column', md: 'row' }} gap={4}>
                            <Container w={{ base: '100%', md: '33%' }}>
                                <Link href='mailto:ikeokoye617@gmail.com'>
                                    <Badge colorScheme='green'>Personal</Badge>
                                    <Text whiteSpace='nowrap'>
                                        ikeokoye617@gmail.com
                                    </Text>
                                </Link>
                            </Container>
                            <Container w={{ base: '100%', md: '33%' }}>
                                <Link href='tel:+18572609455'>
                                    <Badge colorScheme='blue'>Phone</Badge>
                                    <Text>
                                        (857) 260-9455
                                    </Text>
                                </Link>
                            </Container>
                            <Container w={{ base: '100%', md: '33%' }}>
                                <Link href='https://instagram.com/_ikeokoye' isExternal>
                                    <Badge colorScheme='orange'>Instagram</Badge>
                                    <Text>
                                        _ikeokoye
                                    </Text>
                                </Link>
                            </Container>
                        </Flex>
                    </Card>
                </VStack>
            </Container>
        </Element>
    )
}

export default Contact
