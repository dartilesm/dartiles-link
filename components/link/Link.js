import { Link as NextUILink, StyledCard, Avatar, Text, Container, Button, useTheme } from '@nextui-org/react'
import { FiExternalLink } from 'react-icons/fi'
import { IconContext } from 'react-icons'

function Link({ text, href, primary, Icon }) {
    const { theme } = useTheme()
    return <NextUILink href={href} target="_blank" css={{ width: '100%', maxWidth: primary ? 35 : 400, color: '$black' }}>
        {
            primary ? 
                <IconContext.Provider value={{ size: '1.4rem', color: theme.colors.text.value }}>
                    <Icon />
                </IconContext.Provider> :
                <StyledCard clickable hoverable bordered shadow={false} css={{display: 'flex', flexDirection: 'row', padding: '$sm $lg', alignItems: 'center', gap: 16}}>
                    <Container css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, padding: '$0', flexWrap: 'nowrap' }}>
                        <Container css={{ width: '1.6rem', height: '1.6rem', display: 'inline-flex', margin: '$0', padding: '$0', justifyContent: 'center', alignItems: 'center' }}>
                            <IconContext.Provider value={{ color: theme.colors.text.value, style: { width: '1.6rem' } }}>
                                <Icon />
                            </IconContext.Provider>
                        </Container>
                        <Text css={{ fontWeight: '$semibold', margin: '$0' }}>{text}</Text>
                    </Container>
                    <IconContext.Provider value={{ color: theme.colors.text.value }}>
                        <FiExternalLink />
                    </IconContext.Provider>
                </StyledCard>
        }
    </NextUILink>
}

export default Link