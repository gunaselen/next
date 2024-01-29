'use client';

import React, { useEffect } from 'react'
import "./Header.scss"
import { Logo, ProfileIMg, menuIcon } from '@/utils/images'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";


const onClick = () => {
    location.href = `/api/auth/signin`
}

export default function Header() {

    const { data: session, status } = useSession();

    useEffect(() => {
        console.log(session,status);
        if (status === "authenticated" && session) {
            if (session) {
                
            }
        }
    }, [session, status]);

    const getUserName = () => {
        return session && (
            <span>
                <Image src={ProfileIMg} alt="" priority />
                {session?.user?.name}
            </span>
        );
    };


    return (
        <header className='continer'>
            <div className="logo">
                <Image src={Logo} alt="" />

            </div>

            <div className="profile">
                {!session ? (
                    <a onClick={() => { signIn('azure-ad') }}>
                        Sign In
                    </a>
                ) : (
                    <div className="profile-img" onClick={() => { signOut()}} >
                        {getUserName()}
                    </div>)}
                    <div className="profile-menu">
                        <Image src={menuIcon} alt="" priority />
                    </div>

            </div>
        </header>
    )
}
