'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

import { Dismiss } from 'flowbite';
import {useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import useCopyToClipboard from "../../services/functions/useCopyToClipboard";

const Referals = () => {
    const [allReferrals, setAllReferrals] = useState([])
    const [referralLink, setReferralLink] = useState([])
    const [referralEarnings, setReferralEarnings] = useState([])
    const [referralHistory, setReferralHistory] = useState([])
    const [value, copy] = useCopyToClipboard();

    const {currentUser, token} = useSelector(state => state.auth)
    console.log({currentUser})
    const bearerToken = token?.token;

    // fetch user recipients
    useEffect(() => {
        FetchReferrals()
            .then(response => {
                console.log({response})
                setAllReferrals(response)
            })
    }, []);

    useEffect(() => {
        FetchUserProfile()
            .then(res => {
                setReferralLink(res?.referralLink)
            })
    },[])

    useEffect(() => {
        FetchReferralEarnings()
            .then(res => {
                setReferralEarnings(res)
            })
    }, []);

    useEffect(() => {
        FetchReferralHistory()
            .then(res => {
                setReferralHistory(res)
            })
    }, []);

    const FetchReferrals = async () => {
        const url = `${BASE_URL}/referral/user/${currentUser?.id}`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.get(url, {headers})
            // console.log({res})

            if (res?.status === 200) {
                console.log("All referrals: ", res?.data?.data)
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            // alert("Invalid credentials. Please try again")
        }
    }

    const FetchReferralEarnings = async () => {
        const url = `${BASE_URL}/billing/summary?referralEarnings=true`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.get(url, {headers})
            // console.log({"Referral Earnings": res})

            if (res?.status === 200) {
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            // alert("Invalid credentials. Please try again")
        }
    }

    const FetchReferralHistory = async () => {
        const url = `${BASE_URL}/billing/bonus/user?order=asc&page=0&limit=10&claimable=false&type=referral`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.get(url, {headers})
            // console.log({"Referral Earnings": res})

            if (res?.status === 200) {
                console.log({"Referral History":res?.data?.data })
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            // alert("Invalid credentials. Please try again")
        }
    }

    const FetchUserProfile = async () => {
        const url = `${BASE_URL}/auth/user/profile`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.get(url, {headers})
            // console.log({"Profile": res})

            if (res?.status === 200) {
                console.log({"Profile": res?.data?.data})
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            // alert("Invalid credentials. Please try again")
        }
    }

    return (
        <div className="inline-flex gap-24 items-start">
            <div className="flex flex-col items-start gap-8 w-[31rem]">
                <div className="flex items-start gap-6 mb-8 w-full">
                    <div className="flex flex-col items-start px-3 py-4 gap-2 rounded-lg bg-white w-1/2 tz-border-light-2">
                        <div className="text-sm tz-text-gray-7">Amount earned</div>
                        <div className="text-xl font-semibold tz-text-dark">₦{referralEarnings?.totalEearned}</div>
                    </div>
                    <div className="flex flex-col items-start px-3 py-4 gap-2 rounded-lg bg-white w-1/2 tz-border-light-2">
                        <div className="text-sm tz-text-gray-7">Completed referrals</div>
                        <div className="text-xl font-semibold tz-text-dark">{allReferrals?.length}</div>
                    </div>
                </div>  
                <div className="flex justify-between items-center p-3 mb-10 rounded-lg w-full tz-bg-light tz-border-gray-2">
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-xs tz-text-gray-7">Referral link</div>
                        <div className="text-sm tz-text-dark-1">{referralLink}</div>
                    </div>
                    <button onClick={() => navigator.clipboard.writeText(referralLink)} id="copyToClipboard" data-collapse-toggle="copy-toast" data-tooltip-target="tooltip-default">
                        <Image src="/assets/images/account/copy.png" alt="" width={88} height={44} className="flex-shrink-0" />
                    </button>
                </div>
                <h3 className="mb-8 text-2xl font-medium tz-text-dark">Your invite history</h3>
                {!allReferrals?.length && <div className="flex flex-col items-center gap-1 justify-center w-full">
                    <p className="text-center text-lg font-medium tz-text-dark">No referrals yet</p>
                    <p className="text-center text-sm font-light tz-text-gray">Invite your friends to earn</p>
                </div>}
                {allReferrals?.length && <div className="flex flex-col items-start w-full gap-5">
                    {
                        referralHistory?.map((item, index) => {
                            return <div key={index} className="flex justify-between items-center pb-0 w-full tz-border-light-2">
                                <div className="flex flex-col items-start gap-1">
                                    <div className="font-medium tz-text-dark">{JSON.parse(item?.meta)?.referredName}</div>
                                    <div className="text-xs tz-text-gray-3">{new Date(item?.createdAt)?.toDateString()}</div>
                                </div>
                                <div className="text-sm font-medium tz-text-dark">{`${item?.currencySymbol} ${item?.amount}`}</div>
                            </div>
                        })
                    }

                    {/*<div className="flex justify-between items-center pb-0 w-full tz-border-light-2">*/}
                    {/*    <div className="flex flex-col items-start gap-1">*/}
                    {/*        <div className="font-medium tz-text-dark">Afolabi Wahab</div>*/}
                    {/*        <div className="text-xs tz-text-gray-3">Jul, 2023</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-sm font-medium tz-text-dark">NGN 500</div>*/}
                    {/*</div>*/}
                </div>}
            </div>
            <div className="flex flex-col items-start justify-center w-96">
                <div className="flex justify-center w-full mb-10">
                    <Image src="/assets/images/rafiki.png" alt="" width={208} height={208} />
                </div>
                <h4 className="w-full text-2xl font-semibold mb-1 text-center tz-text-dark">Spread the love and earn</h4>
                <p className="w-full mb-6 text-center self-stretch tz-text-gray">Explore our marketplace to find a car for your next adventure</p>
                {/*<p className="w-full mb-6 text-center self-stretch tz-text-gray">Invite a friend and earn <span className="font-medium tz-text-dark">NGN500</span></p>*/}
                <div className="flex justify-center w-full">
                    <Link 
                        href=""
                        className="flex py-3 px-6 justify-center items-center font-semibold w-full  rounded-lg bg-white hover:text-white hover:bg-[#101010] tz-text-dark-1 tz-border-dark-1"
                    >
                        Invite a friend
                    </Link>
                </div>
            </div>
            {/*<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Copy
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>*/}

            {/*<div id="copy-toast" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <Image src="/assets/images/status-icons.png" alt="logo icon" width={20} height={20} />
                <div class="pl-4 text-sm font-normal">Copied to clipboard</div>
            </div>*/}

            {/*<div id="copy-toast" class="fixed hidden flex items-center w-full max-w-xs p-4 space-x-4 text-white bg-gray-800 divide-x divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                <div class="text-sm font-normal">Copied to clipboard</div>
            </div>*/}

        </div>
        
    );
};

export default Referals;
