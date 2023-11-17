'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import HowItWorks from '@/components/sections/HowItWorks';
import JustMove from '@/components/sections/JustMove';
import ExploreSection from '@/components/sections/ExploreSection';
import Button1 from '@/components/items/Button1';
import ClientSection2 from '@/components/sections/ClientSection2';
import MeetNewPeople from '@/components/sections/MeetNewPeople';
import MeetNewPeople2 from '@/components/sections/MeetNewPeople2';
import TreepzExperience from '@/components/sections/TreepzExperience';
import DrivingEfficiency from '@/components/sections/DrivingEfficiency';
import Card9 from '@/components/items/Card9';
import Footer from '@/components/sections/Footer';

const DATA = [
    {
        key: 1,
        image: "/assets/images/hospitality.png",
        title: "Hospitality",
        description: "Whether you need a bus for an outstation trip for you and the squad or need a compact vehicle.",
    },
    {
        key: 2,
        image: "/assets/images/hospitality.png",
        title: "Hospitality",
        description: "Whether you need a bus for an outstation trip for you and the squad or need a compact vehicle.",
    },
    {
        key: 3,
        image: "/assets/images/hospitality.png",
        title: "Hospitality",
        description: "Whether you need a bus for an outstation trip for you and the squad or need a compact vehicle.",
    },
    {
        key: 4,
        image: "/assets/images/hospitality.png",
        title: "Hospitality",
        description: "Whether you need a bus for an outstation trip for you and the squad or need a compact vehicle.",
    },
    /*{
        key: 5,
        image: "/assets/images/hospitality.png",
        title: "Hospitality",
        description: "Whether you need a bus for an outstation trip for you and the squad or need a compact vehicle.",
    },*/
]

const Page = () => {

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="px-32 flex items-end justify-between self-stretch mt-32">
            	<div className="text-7xl font-medium tz-text-dark">Let’s build an Africa <br />with easy mobility <br />and freedom to roam</div>
            	<div className="flex flex-col items-start gap-8 self-stretch w-[30rem]">
            		<p className="text-xl tz-text-gray">Drive your income to new heights and embark on a journey where hosting becomes more than just sharing—it becomes a profitable venture.</p>
            		<Button1 text="Partner with us" url="" />
            	</div>
            </div>
            <div className="my-20"></div>
            <div className={`flex items-center justify-center w-full h-[30rem] bg-cover bg-center bg-[url('/assets/images/toyota-forerunner-bg.png')]`}> </div>
            {/*<div className="w-full">
            	<Image src="/assets/images/toyota-forerunner-bg.png" alt="" width={1440} height={480} className="flex-shrink-0 self-stretch" />
            </div>*/}
            <div className="my-20"></div>
            <ClientSection2 />
            <div className="my-48"></div>
            <MeetNewPeople imageRight={false} />
            <div className="my-40"></div>
            <MeetNewPeople2 />
            <div className="my-40"></div>
            <MeetNewPeople />
            <div className="my-40"></div>
            <div className="px-32">
            	<TreepzExperience />
            </div>
            <div className="my-40"></div>
            <DrivingEfficiency />
            <div className="my-40"></div>
            <div className="w-full px-32 py-14 flex flex-col items-start gap-14">
                <h1 className="text-[2.5rem] font-medium text-center self-stretch tz-text-dark">We improve productivity and income for different companies</h1>
                <div className="flex gap-6 items-center w-full">
                    {
                        DATA.map((item, index) => {
                            return <div key={item?.key}>
                                    <Card9 image={item?.image} title={item?.title} description={item?.description} />
                                </div>
                        })
                    }
                </div>
            </div>
            <div className="my-80"></div>
            <div className="flex justify-center items-center w-full px-32 py-14 tz-bg-dark-1">
                <div className="flex items-center justify-between self-stretch w-full">
                    <div className="text-[2.5rem] font-medium text-white">
                        <span className="tz-text-gray-2">Flexibility,</span> sounds good?
                    </div>
                    <Button1 text="Get in touch" url="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
