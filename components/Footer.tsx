import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col">
        <div >
            <Image src={""} alt={"logo"} />
            <p>copyright</p>


        </div>
        <div className="">
            {footerLinks.map((link)=>(
                <div key={link.title} className="">
                    <h3>{link.title}</h3>
                    {link.links.map((item)=>(
                        <Link
                        key={item.title}
                        href={item.url}
                        className="S"
                        >{item.title}</Link>
                    ))} 
                    </div>
            ))}
        </div>
        <div className="">
            Terms OF use
        </div>


    </footer>
  )
}

export default Footer