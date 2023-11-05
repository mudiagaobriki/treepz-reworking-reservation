'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';
// import isMobile from '@/components/helpers/isMobile'

const AddBankDetails = () => {
    const [agreed, setAgreed] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    
    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div>
            {/* Main modal */}
            <div id="add-bank-details-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="bg-white rounded-2xl shadow w-[37.5rem]">
                        <div className="flex justify-between items-center w-full px-8 py-3 tz-border-bottom-1">
                            <h4 className="font-medium tz-text-dark-1">Add bank details</h4>
                            <button type="button" className="p-1 tz-bg-light bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="add-bank-details-modal">
                                <Image src="/assets/images/close-lg.png" alt="close-x" width={16} height={16} />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="w-full pt-12 pb-14 px-8">
                            <form className="flex flex-col gap-y-20" action="#">
                                <div className="space-y-10 w-full">
                                    <div className="flex flex-col items-start gap-5 w-full">
                                        <div className="relative w-full">
                                            <input type="text" id="bankCountry" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                            <label for="bankCountry" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Bank country</label>
                                        </div>
                                        <div className="relative w-full">
                                            <input type="text" id="bankName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                            <label for="bankName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Bank name</label>
                                        </div>
                                        <div className="relative w-full">
                                            <input type="text" id="accountNumber" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                            <label for="accountNumber" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Account number</label>
                                        </div>
                                        <div className="relative w-full">
                                            <input type="text" id="accountName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                                            <label for="accountName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Account name</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-5 mb-20 w-full">
                                        <div class="flex items-center">
                                            <input onChange={(e) => setAgreed(e.target.checked)} id="terms_conditions" type="checkbox" value="" class="w-6 h-6 text-[#101010] bg-gray-100 border-gray-300 rounded focus:ring-0" />
                                            <label for="terms_conditions" class="ml-3 text-sm tz-text-gray-300 text-center">
                                                I agree to the 
                                                <Link href="/terms-conditions" class="underline font-medium tz-text-dark-1"> Terms and conditions</Link>.
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input onChange={(e) => setConfirmed(e.target.checked)} id="confirmation" type="checkbox" value="" class="w-6 h-6 text-[#101010] bg-gray-100 border-gray-300 rounded focus:ring-0" />
                                            <label for="confirmation" class="ml-3 text-sm tz-text-dark">I confirm the bank account details above</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <button 
                                        disabled={!agreed || !confirmed} 
                                        data-modal-target={"bank-success-modal"} 
                                        data-modal-toggle={"bank-success-modal"} 
                                        type="submit"
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
