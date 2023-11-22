'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

import Modal from 'flowbite';

import Button1 from '@/components/items/Button1';
import AccountSideBar from '@/components/accounts/AccountSideBar';
import BankCard from '@/components/accounts/BankCard';
import AddBankDetails from '@/components/modals/AddBankDetails';
import SuccessCard from '@/components/modals/SuccessCard';
import {useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";

const BankDetails = () => {
    const [bankDetails, setBankDetails] = useState([])

    const {currentUser, token} = useSelector(state => state.auth)
    const bearerToken = token?.token;

    // fetch user recipients
    useEffect(() => {
        FetchBanks()
            .then(response => {
                console.log({response})
                setBankDetails(response?.data)
            })
    }, []);

    const FetchBanks = async () => {
        const url = `${BASE_URL}/billing/wallet/get/recipients`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
                'x-api-key': 'testpassword',
            }
            const res = await axios.get(url, {headers})
            console.log({res})

            if (res?.status === 200) {
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            // alert("Invalid credentials. Please try again")
        }
    }

    return (
        <div className="flex flex-col items-start gap-8">
            {/*{<div className="flex items-start gap-8">*/}
            {/*    <BankCard />*/}
            {/*    <BankCard />*/}
            {/*</div>*/}
            {/*<div className="flex items-start gap-8">*/}
            {/*    <BankCard />*/}
            {/*    <div className="w-80 h-52 p-4 rounded-lg flex flex-col justify-center items-start gap-4 bg-white flex-shrink-0 border border-dashed border-black">*/}
            {/*        <button data-modal-target="bank-success-modal" data-modal-toggle="bank-success-modal">*/}
            {/*            <Image src="/assets/images/account/add-bank-details.png" alt="" width={56} height={56} />*/}
            {/*        </button>*/}
            {/*        <div className="flex flex-col items-start gap-1">*/}
            {/*            <div className="text-lg font-medium tz-text-dark text-left w-full">Add another bank account</div>*/}
            {/*            <div className="text-sm tz-text-gray-3">You can up to 4 accounts</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>}*/}
            <div className="flex flex-col items-start justify-center w-96">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/assets/images/piggy.png" alt="" width={180} height={140} />
                </div>
                <h4 className="w-full text-2xl font-semibold mb-4 text-center whitespace-nowrap tz-text-gray-3">No bank details added yet</h4>
                <p className="w-full mb-14 text-center self-stretch whitespace-nowrap tz-text-gray">You need to add your Bank details to enable withdrawal</p>
                <div className="flex justify-center w-full">
                    <button
                        data-modal-target="add-bank-details-modal"
                        data-modal-toggle="add-bank-details-modal"
                        className="flex py-3 px-6 justify-center items-center font-semibold w-80  rounded-lg bg-white hover:text-white hover:bg-[#101010] tz-text-dark-1 tz-border-dark-1"
                    >
                        Add bank details
                    </button>
                </div>
            </div>
            <AddBankDetails />
            <SuccessCard 
                title={"Bank details added successfully!"} 
                description={"Your provide bank details has been added to your account."} 
                btnText={"Understood!"} 
                modalId={"bank-success-modal"}
            />
        </div>
    );
};

export default BankDetails;
