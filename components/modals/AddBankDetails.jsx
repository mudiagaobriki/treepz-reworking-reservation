'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import {setCurrentUser} from "../../redux/features/authSlice";
// import isMobile from '@/components/helpers/isMobile'

const AddBankDetails = ({isOpen, closeModal}) => {
    const [agreed, setAgreed] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [isVisible, setIsVisible] = useState(isOpen);
    const [banksList, setBanksList] = useState([]);
    const [bank, setBank] = useState('');
    const [bankName, setBankName] = useState('');
    const [country, setCountry] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [userWallet, setUserWallet] = useState(null);

    const dispatch = useDispatch();
    const {currentUser, token} = useSelector(state => state.auth);
    const bearerToken = token?.token;
    // console.log({currentUser,token})
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
        }
    }, [isOpen]);

    useEffect(() => {
        GetBanksList(country)
            .then(res => {
                // console.log({"Banks list": res})
                let sorted = res
                res.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive comparison
                    const nameB = b.name.toUpperCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0; // Names are equal
                });
                // let sorted = res?.sort((a,b) => a?.name > b?.name)
                console.log({sorted})
                setBanksList(res?.sort((a,b) => a?.name - b?.name))
            })
    }, [country]);

    useEffect(() => {
        FetchUserWallet()
            .then(res => {
                // console.log({"Banks list": res})
                setUserWallet(res)
            })
    }, []);

    const selectBank = (bk) => {
        setBank(bk);
        const selected = banksList?.find(el => el?.code === bk)
        setBankName(selected?.name)
    }

    const FetchUserWallet = async () => {
        const url = `${BASE_URL}/billing/wallet`

        try {
            const headers = {
                Authorization: `Bearer ${bearerToken}`,
            }
            const res = await axios.get(url, {headers})
            // console.log({res})

            if (res?.status === 200) {
                console.log("User wallet: ", res?.data?.data)
                return res?.data?.data
            }
        } catch (ex) {
            console.log({ex})
            // alert("Invalid credentials. Please try again")
        }
    }

    const CreateBankAccount = async () => {
        const credentials = {
            accountNumber, accountName, bankCode: bank,
            currency: userWallet?.currency,bankName,
        }

        console.log({credentials})

        const url = `${BASE_URL}/billing/wallet/recipient`

        try {
            const headers = {
                Authorization: `Bearer ${token?.token}`,
            }

            const res = await axios.post(url, credentials, {headers})

            if (res?.status === 200 || res?.status === 201) {

                setInterval(() => window.location.reload(), 2000)
                // setShowSuccessModal(true)
            }
        } catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
    }


    const GetBanksList = async (con) => {
        let conShort = ''
        if (con?.toLowerCase() === 'nigeria'){
            conShort = 'NG'
        }

        const url = `${BASE_URL}/billing/bank/list?country=${conShort}`

        try {
            const headers = {
                Authorization: `Bearer ${token?.token}`,
                'x-api-key': 'testpassword',
            }

            const res = await axios.get(url, {headers})
            // console.log('List: ', res)

            if (res?.status === 200) {
                return res?.data?.data
                // setInterval(() => window.location.reload(), 2000)
                // setShowSuccessModal(true)
            }
        } catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
    }

    const ResolveAccountNumber = async (accNo) => {
        const credentials = {
            accountNumber: accNo,bankCode: bank,
        }
        // console.log({credentials})

        const url = `${BASE_URL}/billing/bank/resolve`

        try {
            const headers = {
                Authorization: `Bearer ${token?.token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-api-key': 'testpassword',
            }

            if (accNo?.length < 10) return

            const res = await axios.post(url, credentials, {headers})
            // console.log(res)

            if (res?.status === 201) {
                setAccountNumber(accNo)
                setAccountName(res?.data?.data['account_name'])
                // console.log("account name: ",res?.data?.data['account_name'])

                // setInterval(() => window.location.reload(), 2000)
                // setShowSuccessModal(true)
            }
        } catch (ex) {
            console.log({ex})
            setAccountName("Invalid account number")
            // alert("Invalid credentials. Please try again")
        }
    }

    return (
        <div>
            {/* Main modal */}
            <div id="add-bank-details-modal" tabindex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${isVisible ? 'block' : 'hidden'}`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Add bank details</h4>
                            <button onClick={closeModal} type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="add-bank-details-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-12 pb-14 px-8">
                            <form className="flex flex-col gap-y-20" action="#">
                                <div className="space-y-10 w-full">
                                    <div className="flex flex-col items-start gap-5 w-full">
                                        <div className="relative w-full">
                                            {/*<input type="text" id="bankCountry" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />*/}
                                            <select
                                                onChange={el => setCountry(el?.target?.value)}
                                                id="bankCountry"
                                                className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3"
                                                defaultValue="Nigeria"
                                            >
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="country1">Ghana</option>
                                                <option value="country2">Kenya</option>
                                                <option value="country2">UAE</option>
                                                {/* Add more options as needed */}
                                            </select>
                                            <label htmlFor="bankCountry" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Bank country</label>
                                        </div>
                                        <div className="relative w-full">
                                            {/*<input type="text" id="bankName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />*/}
                                            <select
                                                onChange={el => selectBank(el?.target?.value)}
                                                id="bankName"
                                                className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3"
                                                defaultValue={bank}
                                            >
                                                {
                                                    banksList?.map((item,index) => {
                                                        return <option key={index} value={item?.code}>{item?.name}</option>
                                                    })
                                                }
                                            </select>
                                            <label htmlFor="bankName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Bank name</label>
                                        </div>
                                        <div className="relative w-full">
                                            <input onChange={(el) => ResolveAccountNumber(el?.target?.value)} type="text" id="accountNumber" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                            <label htmlFor="accountNumber" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Account number</label>
                                        </div>
                                        <div className="relative w-full">
                                            <input value={accountName} disabled type="text" id="accountName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                            <label htmlFor="accountName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Account name</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-5 mb-20 w-full">
                                        <div className="flex items-center">
                                            <input onChange={(e) => setAgreed(e.target.checked)} id="terms_conditions" type="checkbox" value="" class="w-6 h-6 text-[#101010] bg-gray-100 border-gray-300 rounded focus:ring-0" />
                                            <label htmlFor="terms_conditions" className="ml-3 text-sm tz-text-gray-300 text-center">
                                                I agree to the 
                                                <Link href="/terms-conditions" className="underline font-medium tz-text-dark-1"> Terms and conditions</Link>.
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input onChange={(e) => setConfirmed(e.target.checked)} id="confirmation" type="checkbox" value="" class="w-6 h-6 text-[#101010] bg-gray-100 border-gray-300 rounded focus:ring-0" />
                                            <label htmlFor="confirmation" className="ml-3 text-sm tz-text-dark">I confirm the bank account details above</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <button
                                        onClick={CreateBankAccount}
                                        disabled={!agreed || !confirmed} 
                                        // data-modal-target={"bank-success-modal"}
                                        // data-modal-toggle={"bank-success-modal"}
                                        type="button"
                                        className={`flex py-3 px-6 justify-center items-center font-semibold w-full rounded-lg ${agreed && confirmed ? 'bg-[#F8B02B] hover:bg-[#F8B02B]/80' : 'bg-[#FBDF88]'} tz-text-dark-1`}
                                    >
                                        Add bank details
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default AddBankDetails;
