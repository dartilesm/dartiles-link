import { Container } from "@nextui-org/react"
import * as SimpleIcons from "react-icons/si"
import * as FaIcons from "react-icons/fa"
import * as FeatherIcons from "react-icons/fi"
import * as Ionic5Icons from "react-icons/io5"
import * as Ionic4Icons from "react-icons/io"
import * as GrommetIcons from "react-icons/gr"
import Link from "./Link"

const Icons = {
    ...SimpleIcons,
    ...FaIcons,
    ...Ionic5Icons,
    ...Ionic4Icons,
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
                            .map(link => <Link {...link} key={link.slug} Icon={Icons[link.icon]} />)
                    }
            </Container>
        }
        {
            links.some(link => link.primary) && <Container css={{ display: 'flex', flexDirection: 'row', maxWidth: 400, margin: '1rem 0', justifyContent: 'center', columnGap: '$6' }}>
                    {
                        links
                            .filter(link => link.primary)
                            .map(link => <Link {...link} key={link.slug} Icon={Icons[link.icon]} />)
                    }
            </Container>
        }
    </>
}

export default LinkList