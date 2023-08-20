import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Fottor } from './Fottor'

export const RootLayout = () => {
    const [header, setHeader] = useState(null);
    const [outlet, setOutlet] = useState(null);
    const [footer, setFooter] = useState(null);
    useEffect(()=>{
        setHeader(
            ()=>{
                return <Header></Header>
            }
        )
        setOutlet(
            ()=>{
                return <Outlet></Outlet>
            }
        )
        setFooter(
            ()=>{
                return <Fottor></Fottor>
            }
        )
    } ,[header, footer, outlet])
    return (
        <div>
            <header>
                {header}
            </header>
            {outlet}
            <footer>
                {footer}
            </footer>
        </div>
    )
}
