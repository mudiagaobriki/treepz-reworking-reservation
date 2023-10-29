'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import { Modal } from 'flowbite';

// Custom components
import Button1 from '@/components/items/Button1';

const VehicleType = () => {
    // options with default values
    const options = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      closable: true,
    };

    useEffect(() => {
        // set the modal menu element
        const $targetEl = document.getElementById('authentication-modal');

        const modal = new Modal($targetEl, options);

        // show the modal
        modal.show();

        // hide the modal
        modal.hide();
    });

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex justify-between items-start w-full px-32">
            <div className="flex flex-col items-start gap-3">
                <div className="flex items-start gap-2">
                    <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                        <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                        <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                    </div>
                    <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                        {/*<Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />*/}
                        <span className="text-xs font-semibold tz-text-green">Promoted</span>
                    </div>
                </div>
                <div className="text-3xl font-semibold tz-text-dark">Mercedes Maybach 2022</div>
                <div className="flex items-start gap-3">
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/star.png" alt="rating-star" width={16} height={16} />
                        <span className="text-sm font-bold tz-text-dark-1">4.9</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-sm text-opacity-80 tz-text-dark">(34 reviews)</p>
                        <div className="w-2 h-2 rounded-full tz-bg-gray-2"></div>
                        <p className="text-sm text-opacity-80 tz-text-dark">x1 2.0i ( 181bhp ) 2022 auto</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-5">
                    <Image src="/assets/images/heart-2-line.png" alt="logo icon" width={32} height={32} />
                    <Image src="/assets/images/share-box-fill.png" alt="logo icon" width={32} height={32} />
                    <Button1 text="Reserve" url="" width={"56"} modalId={"authentication-modal"} />
                </div>
                <div className="flex items-center gap-2 p-2 justify-end w-full">
                    <Image src="/assets/images/refund-fill.png" alt="logo icon" width={24} height={24} />
                    <p className="text-sm font-medium tz-text-dark-1">Free Cancellation</p>
                </div>
            </div>
        </div>
    );
};

export default VehicleType;
