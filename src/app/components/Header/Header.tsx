'use client';

import React from 'react'
import "./Header.scss"
import { Logo, ProfileIMg, menuIcon } from '@/utils/images'
import Image from 'next/image'


const onClick = () => {
    location.href = `/api/auth/signin`
  }

export default function Header() {


    return (
        <header className='continer'>
            <div className="logo">
                <Image src={Logo} alt="" />

            </div>
            
            <div className="profile">
                <div className="profile-img" onClick={onClick}>
                    <Image src={ProfileIMg} alt="" priority />
                </div>
                <div className="profile-menu">
                    <Image src={menuIcon} alt="" priority />
                </div>

            </div>
        </header>
    )
}
