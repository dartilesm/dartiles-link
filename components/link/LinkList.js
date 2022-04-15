import { Container } from "@nextui-org/react"
import * as SimpleIcons from "react-icons/si"
import * as FaIcons from "react-icons/fa"
import * as FeatherIcons from "react-icons/fi"
import * as IonicIcons from "react-icons/io5"
import * as GrommetIcons from "react-icons/gr"
import Link from "./Link"

const Icons = {
    ...SimpleIcons,
    ...FaIcons,
    ...IonicIcons,
    ...GrommetIcons,
    ...FeatherIcons
}

function LinkList({ links }) {
    
    return <>
        {
            links.some(link => !link.primary) && <Container css={{ display: 'flex', flexDirection: 'column', gap: '$6', maxWidth: 400}}>
                    {
                        links
                            .filter(link => !link.primary)
                            .map(link => <Link text={link.text} href={link.href} key={link.key} primary={link.primary} Icon={Icons[link.icon]} />)
                    }
            </Container>
        }
        {
            links.some(link => link.primary) && <Container css={{ display: 'flex', flexDirection: 'row', maxWidth: 400, margin: '1rem 0', justifyContent: 'center' }}>
                    {
                        links
                            .filter(link => link.primary)
                            .map(link => <Link text={link.text} href={link.href} key={link.key} primary={link.primary} Icon={Icons[link.icon]} />)
                    }
            </Container>
        }
    </>
}

export default LinkList