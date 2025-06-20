import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/headshot.jpeg'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Ike and I'm a graduate of 
                                        {' '} <b>Boston Univeristy</b> with a
                                        passion for <b>Software Engineering</b>, 
                                        Technology and Innovation.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I graduated with a Bachelor's of {' '}
                                        <b>Computer Science </b>{' '}
                                        and <b> African Studies </b>. My relevant coursework entailed CS 411 (Software Engineering), 
                                        CS 460 (Database Systems), CS 111 (Intro to Python), CS 112 (Data Structures and Algorthims - Java),
                                        CS 237 (Probability in Computing), CS 515 (Natural Language Processing - AI)
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        My most recent position was <b>Software Engineer at Wellington Mangement</b> working in Full Stack development under the Client Platform Technology 
                                        and Infrastructure Platform Technology teams. I have previously held a position as a{' '}
                                        <b>
                                            InvesTech Intern at
                                            Wellington Managment 
                                        </b>{' '}
                                        working in full-stack development, data analytics, and webscraping. I also have experience as a developer at various organizations, including <b>BU Spark, AfroBites, Boston HealthCare for the Homeless</b> 
                                        {' '}and <b> Assembly Square Auto Sales</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced in full-stack web
                                        development - particularly with{' '}
                                        <b>Typescript</b> and <b>Python</b>.{' '}
                                        <b>ReactJS</b> is my frontend framework
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>NodeJS, .NET Core, Java,</b> and <b>Python</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Engineering, I
                                        am also interested in Chess, Soccer, Basketball, Power-Lifting, Cars, Real-Estate, Crypto, 
                                        Decentralized Apps, and Innovation. 
    
                                    </Text>
                                </Flex>
                            </Fade>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
