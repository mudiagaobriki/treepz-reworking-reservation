'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';

const DATA = [
    {
        key: 1,
        image: "/assets/images/caravan-fill.png",
        title: 'Bluetooth',
    },
    {
        key: 2,
        image: "/assets/images/caravan-fill.png",
        title: "Air conditioner",
    },
    {
        key: 3,
        image: "/assets/images/caravan-fill.png",
        title: "USB charger",
    },
    {
        key: 4,
        image: "/assets/images/caravan-fill.png",
        title: 'Automatic gear system',
    },
    {
        key: 5,
        image: "/assets/images/caravan-fill.png",
        title: "Air conditioner",
    },
    {
        key: 6,
        image: "/assets/images/caravan-fill.png",
        title: "USB charger",
    },
]

const VehicleFeatures = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 w-2/3 pt-8 tz-border-top-3">
            <h3 className="text-2xl font-medium tz-text-dark mb-5">Features</h3>
            <div className="grid grid-cols-2 gap-y-5 mb-5">
                {
                    DATA.map((item, index) => {
                        return <div key={item?.key}>
                                <div className="flex items-center gap-3">
                                    <Image src={item?.image} alt="caravan icon" width={28} height={28} />
                                    <span className="tz-text-dark">{item?.title}</span>
                                </div>
                            </div>
                    })
                }
            </div>
            <div className="flex items-center justify-end gap-2 w-full">
                <p className="text-base font-semibold tz-text-dark">Show less</p>
                <Image src="/assets/images/chevron-up-line.png" alt="" width={24} height={24} className="flex-shrink-0" />
            </div>


            <div class="relative mb-3">
  <input
    type="text"
    class="peer block h-[5] w-full rounded-lg border-gray-300 border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput1"
    placeholder="Example label" />
  <label
    for="exampleFormControlInput1"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Example label
  </label>
</div>


        </div>
    );
};

export default VehicleFeatures;


/*
display: flex;
padding: 16px 12px;
align-items: center;
gap: 10px;
align-self: stretch;

border-radius: 8px;
border: 0.8px solid var(--neutral-main-60, #A0A3A6);
background: var(--white-00, #FFF);*/