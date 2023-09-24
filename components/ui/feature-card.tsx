import { clsx } from "clsx";
import Image from "next/image";
import { FollowerPointerCard } from "./followerPointerCard";

export default function FeatureCard({
    title,
    img,
    content,
    zIndex
}: {
    title: string,
    img: string,
    content?: string,
    zInded: number

}) {
    return (
        <div className={clsx("sticky bottom-[6vh] w-11/12 h-[600px] rounded-lg border bg-card-gradient-green border-[#555] m-2 group", `z-${zIndex}`)}>
            <div className="relative">
                <h1 className="font-fixel text-4xl font-semibold p-5 ml-2">{title}</h1>
                <div className="flex flex-row w-full h-full ">
                    <div className="flex flex-col items-center w-1/2 ml-8 z-5">
                        <div className="flex flex-col items-center w-11/12 h-56 gap-9 rounded-md border border-[#383838] bg-inside-card backdrop-blur-md bg-opacity-10">
                            <h2 className="text-center font-fixel text-xl mt-4 p-2">Search influencer from any social media platform</h2>
                            <div className="logo-wall before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] w-fit before:max-w-full before:bg-transparent before:from-[rgba(65,80,88,.3)] before:to-transparent before:to-70% sm:max-w-full relative before:-inset-x-[40px] before:-inset-y-[20px] flex items-center justify-center">
                                <div className="logo-wall-mask flex overflow-x-hidden border border-[#454545] rounded-[40px] pt-2 pb-2 pl-1 pr-1 w-3/5">
                                    <ul className="flex animate-logo-wall items-center gap-5 mr-5">
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="41"
                                                height="40"
                                                viewBox="0 0 512 512"
                                                fill="white"
                                            >
                                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="41"
                                                height="40"
                                                viewBox="0 0 41 40"
                                                fill="none"
                                            >
                                                <path
                                                    d="M33.8889 18.6612L28.5339 24.0162H23.1776L18.4914 28.7024V24.0162H12.4664V3.93241H33.8889V18.6612ZM11.1276 1.25491L4.43262 7.94991V32.0487H12.4664V38.7437L19.1614 32.0487H24.5164L36.5676 19.9987V1.25366L11.1276 1.25491ZM27.1951 8.61866H29.8726V16.6524H27.1951V8.61866ZM19.8301 8.61866H22.5089V16.6524H19.8289L19.8301 8.61866Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="41"
                                                height="40"
                                                viewBox="0 0 41 40"
                                                fill="none"
                                            >
                                                <g clipPath="url(#clip0_98_113)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M16.4769 25.1722V13.9486C20.4613 15.8235 23.5472 17.6346 27.1969 19.5873C24.1867 21.2567 20.4613 23.1298 16.4769 25.1722ZM38.682 8.36657C37.9947 7.46105 36.8233 6.75618 35.5762 6.52282C31.9105 5.82672 9.04197 5.82474 5.3783 6.52282C4.37822 6.7103 3.48767 7.16346 2.72267 7.86754C-0.500725 10.8593 0.509332 26.9034 1.28629 29.5023C1.61301 30.6272 2.03538 31.4385 2.5673 31.9711C3.25262 32.6751 4.19093 33.1599 5.26872 33.3773C8.28691 34.0016 23.8361 34.3507 35.5124 33.4711C36.5882 33.2836 37.5405 32.7832 38.2915 32.0492C41.2719 29.0693 41.0687 12.1243 38.682 8.36657Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_98_113">
                                                        <rect
                                                            width="40"
                                                            height="40"
                                                            fill="white"
                                                            transform="translate(0.5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="41"
                                                height="40"
                                                viewBox="0 0 41 40"
                                                fill="none"
                                            >
                                                <path
                                                    d="M32.7021 9.27031C32.449 9.13949 32.2026 8.99608 31.9639 8.84062C31.2695 8.38161 30.6329 7.84074 30.0678 7.22969C28.6537 5.61172 28.1256 3.97031 27.931 2.82109H27.9389C27.7764 1.86719 27.8435 1.25 27.8537 1.25H21.4131V26.1547C21.4131 26.4891 21.4131 26.8195 21.399 27.1461C21.399 27.1867 21.3951 27.2242 21.3928 27.268C21.3928 27.2859 21.3928 27.3047 21.3889 27.3234C21.3889 27.3281 21.3889 27.3328 21.3889 27.3375C21.321 28.2311 21.0345 29.0943 20.5547 29.8512C20.0749 30.6081 19.4165 31.2354 18.6373 31.6781C17.8252 32.1401 16.9067 32.3825 15.9725 32.3812C12.9717 32.3812 10.5396 29.9344 10.5396 26.9125C10.5396 23.8906 12.9717 21.4437 15.9725 21.4437C16.5405 21.4432 17.105 21.5326 17.6451 21.7086L17.6529 15.1508C16.0134 14.939 14.3477 15.0693 12.761 15.5335C11.1743 15.9976 9.70108 16.7856 8.43417 17.8477C7.32406 18.8122 6.39079 19.963 5.67636 21.2484C5.40448 21.7172 4.3787 23.6008 4.25448 26.6578C4.17636 28.393 4.69745 30.1906 4.94589 30.9336V30.9492C5.10214 31.3867 5.70761 32.8797 6.69433 34.1383C7.48998 35.1479 8.43002 36.0347 9.48417 36.7703V36.7547L9.49979 36.7703C12.6178 38.8891 16.0748 38.75 16.0748 38.75C16.6732 38.7258 18.6779 38.75 20.9545 37.6711C23.4795 36.475 24.917 34.693 24.917 34.693C25.8353 33.6282 26.5656 32.4147 27.0764 31.1047C27.6592 29.5727 27.8537 27.7352 27.8537 27.0008V13.7883C27.9318 13.8352 28.9724 14.5234 28.9724 14.5234C28.9724 14.5234 30.4717 15.4844 32.8107 16.1102C34.4889 16.5555 36.7498 16.6492 36.7498 16.6492V10.2555C35.9576 10.3414 34.349 10.0914 32.7021 9.27031Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                            >
                                                <path
                                                    d="M22.5055 0.492188H9.50999C3.86518 0.492188 0.5 3.85736 0.5 9.50218V22.4821C0.5 28.1425 3.86518 31.5076 9.50999 31.5076H22.49C28.1348 31.5076 31.4999 28.1425 31.4999 22.4977V9.50218C31.5155 3.85736 28.1503 0.492188 22.5055 0.492188ZM16.0077 22.0169C12.6891 22.0169 9.99073 19.3186 9.99073 15.9999C9.99073 12.6813 12.6891 9.98292 16.0077 9.98292C19.3264 9.98292 22.0247 12.6813 22.0247 15.9999C22.0247 19.3186 19.3264 22.0169 16.0077 22.0169ZM25.1883 8.05996C25.1108 8.24605 25.0022 8.41664 24.8626 8.57171C24.7076 8.71128 24.537 8.81984 24.3509 8.89738C24.1648 8.97491 23.9632 9.02144 23.7616 9.02144C23.3429 9.02144 22.9552 8.86636 22.6605 8.57171C22.521 8.41664 22.4124 8.24605 22.3349 8.05996C22.2573 7.87387 22.2108 7.67227 22.2108 7.47066C22.2108 7.26906 22.2573 7.06746 22.3349 6.88137C22.4124 6.67977 22.521 6.52469 22.6605 6.36962C23.0172 6.01294 23.56 5.84235 24.0562 5.95091C24.1648 5.96642 24.2578 5.99743 24.3509 6.04395C24.4439 6.07497 24.537 6.12149 24.63 6.18352C24.7076 6.23005 24.7851 6.30759 24.8626 6.36962C25.0022 6.52469 25.1108 6.67977 25.1883 6.88137C25.2658 7.06746 25.3124 7.26906 25.3124 7.47066C25.3124 7.67227 25.2658 7.87387 25.1883 8.05996Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </li>
                                    </ul>
                                    <ul className="flex animate-logo-wall items-center gap-5">
                                        <li><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="41"
                                            height="40"
                                            viewBox="0 0 512 512"
                                            fill="white"
                                        >
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg></li>
                                        <li><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="41"
                                            height="40"
                                            viewBox="0 0 41 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M33.8889 18.6612L28.5339 24.0162H23.1776L18.4914 28.7024V24.0162H12.4664V3.93241H33.8889V18.6612ZM11.1276 1.25491L4.43262 7.94991V32.0487H12.4664V38.7437L19.1614 32.0487H24.5164L36.5676 19.9987V1.25366L11.1276 1.25491ZM27.1951 8.61866H29.8726V16.6524H27.1951V8.61866ZM19.8301 8.61866H22.5089V16.6524H19.8289L19.8301 8.61866Z"
                                                fill="white"
                                            />
                                        </svg></li>
                                        <li><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="41"
                                            height="40"
                                            viewBox="0 0 41 40"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_98_113)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M16.4769 25.1722V13.9486C20.4613 15.8235 23.5472 17.6346 27.1969 19.5873C24.1867 21.2567 20.4613 23.1298 16.4769 25.1722ZM38.682 8.36657C37.9947 7.46105 36.8233 6.75618 35.5762 6.52282C31.9105 5.82672 9.04197 5.82474 5.3783 6.52282C4.37822 6.7103 3.48767 7.16346 2.72267 7.86754C-0.500725 10.8593 0.509332 26.9034 1.28629 29.5023C1.61301 30.6272 2.03538 31.4385 2.5673 31.9711C3.25262 32.6751 4.19093 33.1599 5.26872 33.3773C8.28691 34.0016 23.8361 34.3507 35.5124 33.4711C36.5882 33.2836 37.5405 32.7832 38.2915 32.0492C41.2719 29.0693 41.0687 12.1243 38.682 8.36657Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_98_113">
                                                    <rect
                                                        width="40"
                                                        height="40"
                                                        fill="white"
                                                        transform="translate(0.5)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg></li>
                                        <li><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="41"
                                            height="40"
                                            viewBox="0 0 41 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M32.7021 9.27031C32.449 9.13949 32.2026 8.99608 31.9639 8.84062C31.2695 8.38161 30.6329 7.84074 30.0678 7.22969C28.6537 5.61172 28.1256 3.97031 27.931 2.82109H27.9389C27.7764 1.86719 27.8435 1.25 27.8537 1.25H21.4131V26.1547C21.4131 26.4891 21.4131 26.8195 21.399 27.1461C21.399 27.1867 21.3951 27.2242 21.3928 27.268C21.3928 27.2859 21.3928 27.3047 21.3889 27.3234C21.3889 27.3281 21.3889 27.3328 21.3889 27.3375C21.321 28.2311 21.0345 29.0943 20.5547 29.8512C20.0749 30.6081 19.4165 31.2354 18.6373 31.6781C17.8252 32.1401 16.9067 32.3825 15.9725 32.3812C12.9717 32.3812 10.5396 29.9344 10.5396 26.9125C10.5396 23.8906 12.9717 21.4437 15.9725 21.4437C16.5405 21.4432 17.105 21.5326 17.6451 21.7086L17.6529 15.1508C16.0134 14.939 14.3477 15.0693 12.761 15.5335C11.1743 15.9976 9.70108 16.7856 8.43417 17.8477C7.32406 18.8122 6.39079 19.963 5.67636 21.2484C5.40448 21.7172 4.3787 23.6008 4.25448 26.6578C4.17636 28.393 4.69745 30.1906 4.94589 30.9336V30.9492C5.10214 31.3867 5.70761 32.8797 6.69433 34.1383C7.48998 35.1479 8.43002 36.0347 9.48417 36.7703V36.7547L9.49979 36.7703C12.6178 38.8891 16.0748 38.75 16.0748 38.75C16.6732 38.7258 18.6779 38.75 20.9545 37.6711C23.4795 36.475 24.917 34.693 24.917 34.693C25.8353 33.6282 26.5656 32.4147 27.0764 31.1047C27.6592 29.5727 27.8537 27.7352 27.8537 27.0008V13.7883C27.9318 13.8352 28.9724 14.5234 28.9724 14.5234C28.9724 14.5234 30.4717 15.4844 32.8107 16.1102C34.4889 16.5555 36.7498 16.6492 36.7498 16.6492V10.2555C35.9576 10.3414 34.349 10.0914 32.7021 9.27031Z"
                                                fill="white"
                                            />
                                        </svg></li>
                                        <li><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                        >
                                            <path
                                                d="M22.5055 0.492188H9.50999C3.86518 0.492188 0.5 3.85736 0.5 9.50218V22.4821C0.5 28.1425 3.86518 31.5076 9.50999 31.5076H22.49C28.1348 31.5076 31.4999 28.1425 31.4999 22.4977V9.50218C31.5155 3.85736 28.1503 0.492188 22.5055 0.492188ZM16.0077 22.0169C12.6891 22.0169 9.99073 19.3186 9.99073 15.9999C9.99073 12.6813 12.6891 9.98292 16.0077 9.98292C19.3264 9.98292 22.0247 12.6813 22.0247 15.9999C22.0247 19.3186 19.3264 22.0169 16.0077 22.0169ZM25.1883 8.05996C25.1108 8.24605 25.0022 8.41664 24.8626 8.57171C24.7076 8.71128 24.537 8.81984 24.3509 8.89738C24.1648 8.97491 23.9632 9.02144 23.7616 9.02144C23.3429 9.02144 22.9552 8.86636 22.6605 8.57171C22.521 8.41664 22.4124 8.24605 22.3349 8.05996C22.2573 7.87387 22.2108 7.67227 22.2108 7.47066C22.2108 7.26906 22.2573 7.06746 22.3349 6.88137C22.4124 6.67977 22.521 6.52469 22.6605 6.36962C23.0172 6.01294 23.56 5.84235 24.0562 5.95091C24.1648 5.96642 24.2578 5.99743 24.3509 6.04395C24.4439 6.07497 24.537 6.12149 24.63 6.18352C24.7076 6.23005 24.7851 6.30759 24.8626 6.36962C25.0022 6.52469 25.1108 6.67977 25.1883 6.88137C25.2658 7.06746 25.3124 7.26906 25.3124 7.47066C25.3124 7.67227 25.2658 7.87387 25.1883 8.05996Z"
                                                fill="white"
                                            />
                                        </svg></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span className=" py-1 px-8 bg-[#B2F042] border border-transparent rounded-r-[10px] rounded-t-[10px] font-inter font-bold text-3xl text-black">OR</span>
                        <FollowerPointerCard className="flex items-center justify-center w-11/12">
                            <div className="flex flex-col items-center justify-center h-56 gap-9 rounded-md border bg-black border-[#383838]">
                                <p className="text-center font-fixel font-medium text-xl mt-4">
                                    Allow us to <span className="green-text">crawl</span> your website and recommend influencers for you
                                </p>
                            </div>
                        </FollowerPointerCard>
                    </div>
                    <div className="relative w-full h-[500px] ">
                        <div className="z-1 items-center absolute -inset-0.5 top-1/2 bg-gradient-to-r from-lime-bg via-black to-purple-500 rounded-lg blur-3xl transition duration-1000 w-10/12 h-1/2 animate-bg bg-300% opacity-50 group-hover:opacity-70">
                        </div>
                        <Image src={img}
                            alt="feature 1 : search from any social media"
                            fill={true}
                            style={{
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>



    )

}