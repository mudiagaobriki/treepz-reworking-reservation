'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import Notifications from '@/components/sections/Notifications';
import Footer from '@/components/sections/Footer';

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="my-20"></div>
            <Notifications />
            <div className="my-96"></div>
            <div className="pt-14 tz-border-top-3 tz-bg-light">
                <Footer />
            </div>
        </div>
    );
};

export default Page;
