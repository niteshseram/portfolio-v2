import { Heading, Text } from '@chakra-ui/react'
import Container from '../components/Container'
import ContentWrapper from '../components/contentWrapper'

const About = () => (
	<Container m='auto'>
		<ContentWrapper>
			<Heading as='h1' variant='h2'>
				About 👨‍💻
			</Heading>
			<Text>
				This page will contain information about my background, skillset and
				hobbies outside of tech.
			</Text>
			<Text>It will also contain info about how to get in touch with me.</Text>
		</ContentWrapper>
	</Container>
)

export default About
