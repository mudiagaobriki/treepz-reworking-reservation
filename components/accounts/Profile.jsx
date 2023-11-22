'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

import Button1 from '@/components/items/Button1';
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "../../public/assets/constants/constants";
import axios from "axios";
import {setCurrentUser} from "../../redux/features/authSlice";
import SuccessCard from "../modals/SuccessCard";

const Profile = () => {
    const [selectedImage, setSelectedImage] = useState("/assets/images/profile-photo-3.png");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [loadingImage, setLoadingImage] = useState(true);

    const dispatch = useDispatch();

    const {currentUser, token} = useSelector(state => state.auth);
    console.log({currentUser, token})

    useEffect(() => {
        if (currentUser){
            setFirstName(currentUser?.firstName)
            setLastName(currentUser?.lastName)
            setEmail(currentUser?.email)
            setPhoneNumber(currentUser?.phoneNumber)
            setProfileImageUrl(currentUser?.profileImageUrl ?? "")
            setSelectedImage(currentUser?.profileImageUrl ?? "")
            setLoadingImage(false)
        }
    }, [currentUser]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file)
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onload = (e) => {
        //         setSelectedImage(e.target.result);
        //         setProfileImageUrl(file)
        //         console.log("File: ", URL.createObjectURL(file))
        //     };
        //     reader.readAsDataURL(file);
        // } else {
        //     setSelectedImage("/assets/images/profile-photo-3.png");
        // }
    };

    const UpdateProfile = async () => {
        const credentials = {
            firstName, lastName, phoneNumber
        }
        console.log({profileImage: profileImageUrl})
        const url = `${BASE_URL}/auth/user/profile`
        const url2 = `${BASE_URL}/auth/user/profile-image` // for profile picture update

        // form data for image upload
        let formData = new FormData();
        formData.append("profileImage", selectedFile);

        try {
            const headers = {
                Authorization: `Bearer ${token?.token}`,
            }
            // headers for image upload
            // const headers2 = {
            //     Authorization: `Bearer ${token?.token}`,
            //     // "Content-Type": "multipart/form-data",
            // }
            const res = await axios.patch(url, credentials, {headers})
            const res2 = await axios.patch(url2, formData, {headers})

            console.log({res2})
            if (res?.status === 200) {
                // const currentUser = res?.data?.data?.user;
                // console.log({currentUser})
                // const token = res?.data?.data?.jwt;
                dispatch(setCurrentUser({user: {...currentUser, firstName, lastName, phoneNumber }, loginToken: token}))
                setInterval(() => window.location.reload(), 2000)
                // setShowSuccessModal(true)
            }
        } catch (ex) {
            console.log({ex})
            alert("Invalid credentials. Please try again")
        }
    }

    const handleCloseSuccessCard = () => {
        setShowSuccessModal(false)
    }

    return (
        <div className="flex flex-col items-start gap-10 w-[37rem]">
            {!loadingImage && <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Your photo</p>
                <div className="flex items-center gap-8">
                    <div className="rounded-full">
                        <Image src={selectedImage} alt="profile photo" width={100} height={100} className="rounded-full" />
                    </div>
                    <div className="flex flex-row items-center">
                        <input type="file" id="custom-input" accept="images/*" onChange={handleImageChange} hidden />
                        <label htmlFor="custom-input" className="flex items-center justify-center px-3 py-2 rounded-lg hover:bg-[#101010] hover:text-white tz-border-dark-1">
                            Change picture
                        </label>
                    </div>
                </div>
            </div>}
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Personal information</p>

                <div className="flex items-start gap-6 w-full">
                    <div className="relative w-1/2">
                        <input value={firstName} onChange={(el) => setFirstName(el?.target?.value) } type="text" id="firstName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label htmlFor="firstName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">First name</label>
                    </div>
                    <div className="relative w-1/2">
                        <input value={lastName} onChange={(el) => setLastName(el?.target?.value)} type="text" id="lastName" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label htmlFor="lastName" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Last name</label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5 self-stretch p-5 rounded-xl w-full tz-border-gray-2">
                <p className="text-2xl font-medium tz-text-dark">Contact information</p>
                <div className="flex flex-col items-center gap-6 self-stretch w-full">
                    <div className="flex flex-col items-start gap-3 w-full">
                        <div className="relative w-full">
                            <input value={email} onChange={el => setEmail(el?.target?.value)} type="email" id="emailAddress" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                            <label htmlFor="emailAddress" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Email</label>
                            <a href="#" className="absolute inset-y-0 right-3 flex items-center p-0 pointer-cursor">
                                <Image src="/assets/images/account/checkbox-multiple-fill.png" alt="eye-icon" width={20} height={20} />
                            </a>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <Image src="/assets/images/account/information-line.png" alt="info icon" width={20} height={20} />
                            <p className="underline text-sm tz-text-gray-3">Change your email</p>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <input value={phoneNumber} onChange={el => setPhoneNumber(el?.target?.value)} type="text" id="phoneNumber" className="block rounded-lg px-3 pt-6 pb-2 w-full text-base bg-white  border appearance-none focus:outline-none focus:ring-0 focus:border-[#A0A3A6] peer tz-text-gray-2 tz-border-light-3" placeholder=" " />
                        <label htmlFor="phoneNumber" className="absolute text-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-[#A0A3A6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 tz-text-gray-2">Phone number</label>
                    </div>
                </div>
            </div>
            <div>
                <Button1 onClick={UpdateProfile} submit={true} text="Save changes" width={"width1"} />
            </div>
            <SuccessCard
                title={"Profile Update successful!"}
                description={"Your profile has been updated."}
                btnText={"Okay"}
                // modalId={"password-reset-success-modal"}
                isOpen={showSuccessModal} closeModal={handleCloseSuccessCard}
                onNextStep={() => (setTimeout(() => window.location.reload(), 1000))}
            />
        </div>
    );
};

export default Profile;
