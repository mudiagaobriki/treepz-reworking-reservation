'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import NavBar from '@/components/sections/NavBar';
import OurValues from '@/components/sections/OurValues';
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
            <div className="mb-20 -space-y-44">
                <div className="px-32 w-full self-stretch pt-20 pb-64 z-0 tz-bg-light">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center justify-center px-3 py-2 rounded-3xl tz-bg-orange">
                            <div className="text-xl font-medium tz-text-brown-2">OUR MISSION</div>
                        </div>
                        <div className="text-7xl font-medium tz-text-dark">Putting Africa’s 26 million <br /> cars to better use.</div>
                    </div>
                    <div className="flex items-start justify-end w-full">
                        <div className="inline-flex flex-col items-start gap-3 p-4 rounded-xl bg-white self-stretch w-[30.5rem] tz-border-light-2">
                            <p className="text-xl font-medium tz-text-orange-1">OUR VISION</p>
                            <p className="text-xl tz-text-dark">To ensure wherever you are, you can book and pay for the perfect vehicle to explore Africa with our reliable Treepz hosts.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-5 justify-center w-full z-10">
                    <Image src="/assets/images/people.png" alt="" width={1080} height={400} className="self-center" />  
                    <p className="text-xl font-medium text-center self-stretch tz-text-gray">A dedicated team focused on improving Africa’s transportation system.</p> 
                </div>
            </div>
            <div className="my-40"></div>
            <div className="w-full h-24 px-32">
                <div className="flex justify-between items-center w-full px-6 py-8 bg-white">
                    <p className="text-2xl font-medium tz-text-gray">We support the productivity <br /> of Africa’s big teams</p>
                    <div className="flex items-center flex-col gap-2">
                        <div className="flex items-center justify-between w-[40rem]">
                            <Image src="/assets/images/clients/img_6.png" alt="logo icon" width={60} height={16} />
                            <Image src="/assets/images/clients/img_7.png" alt="logo icon" width={60} height={24} />
                            <Image src="/assets/images/clients/img_8.png" alt="logo icon" width={60} height={30} />
                            <Image src="/assets/images/clients/img_10.png" alt="logo icon" width={60} height={20} />
                            <Image src="/assets/images/clients/img_11.png" alt="logo icon" width={60} height={20} />
                            <Image src="/assets/images/clients/img_13.png" alt="logo icon" width={40} height={40} />
                        </div>
                        <div className="flex items-center justify-between w-[40rem]">
                            <Image src="/assets/images/clients/img_9.png" alt="logo icon" width={60} height={36} />
                            <Image src="/assets/images/clients/img_8.png" alt="logo icon" width={60} height={30} />
                            <Image src="/assets/images/clients/img_14.png" alt="logo icon" width={60} height={20} />
                            <Image src="/assets/images/clients/img_16.png" alt="logo icon" width={60} height={60} />
                            <Image src="/assets/images/clients/img_17.png" alt="logo icon" width={40} height={40} />
                            <Image src="/assets/images/clients/img_12.png" alt="logo icon" width={60} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-40"></div>
            <div className="px-32">
                <div className="flex items-start gap-16">
                    <div className="flex items-start pt-36">
                        <div className="pt-12">
                            <Image src="/assets/images/friendz1.png" alt="logo icon" width={360} height={480} />
                        </div>
                        
                        <div className="h-[44rem]">
                            <div className="flex flex-col items-start gap-4 w-full pl-16 mb-16">
                                <p className="self-stretch text-center text-xl font-medium tz-text-gray">OUR STORY</p>
                                <p className="self-stretch text-center text-3xl font-medium tz-text-dark">Treepz was founded by four entrepreneurs who were tired of the broken transport system in Africa and wanted to make a change.</p>
                                <p className="self-stretch text-center text-xl tz-text-gray">They started with bus-hailing solution which grew quickly, and they realized make an even great impact, more has to be done, hence Treepz.</p>
                            </div>
                            <Image src="/assets/images/friendz3.png" alt="logo icon" width={412} height={284} />
                        </div>
                    </div>
                    <div>
                        <Image src="/assets/images/friendz2.png" alt="logo icon" width={360} height={480} />
                    </div>
                </div>
            </div>
            {/*<div className="w-full">
            	<Image src="/assets/images/toyota-forerunner-bg.png" alt="" width={1440} height={480} className="flex-shrink-0 self-stretch" />
            </div>*/}
            <div className="my-20"></div>
            <OurValues />
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
