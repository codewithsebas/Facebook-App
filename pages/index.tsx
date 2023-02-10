import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Formik } from "formik";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { BiLoaderAlt } from "react-icons/bi";
import { Tooltip } from "../components/Tooltip";
import { InterfaceLogin } from "../interface/Login.Interface";

export default function Home() {
	const [togglePassword, setTogglePassword] = useState(false);
	const [load, setLoad] = useState(false);
	return (
		<>
			<Head>
				<title>Facebook App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<div className="w-full h-screen max-h-screen flex">
				<div className="w-full bg-white flex flex-col items-start justify-between md:max-w-2xl md:py-10 md:px-10 p-5">
					<div className="flex items-center gap-3">
						<div className="w-16 h-full">
							<Image
								width={100}
								height={100}
                priority
								src="/favicon.svg"
								alt="Logo Facebook"
							/>
							{/* <FaFacebook className="w-full h-full" /> */}
						</div>
						<h1 className="w-full max-w-lg text-4xl font-bold text-blue-500">
							Facebook
						</h1>
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-8">
						<h1 className="w-full max-w-2xl text-4xl font-bold text-black/80">
							Login
						</h1>
						<Formik
							initialValues={{
								email: "",
								password: "",
							}}
							validate={(values) => {
								let error: InterfaceLogin = {
									email: "",
									password: "",
								};
								if (!values.email) {
									error.email = "Your email is required!";
									return error;
								} else if (
									!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
										values.email
									)
								) {
									error.email = "This email is invalid!";
									return error;
								} else if (!values.password) {
									error.password = "Your password is required!";
									return error;
								}
							}}
							onSubmit={(values) => {
								setLoad(true);
								setTimeout(function () {
									window.location.href = "/profile";
								}, 3000);
							}}>
							{({ handleSubmit, errors, values, handleChange }) => (
								<form
									onSubmit={handleSubmit}
									className="w-full max-w-2xl flex flex-col gap-4 rounded-md backdrop-blur-3xl">
									<div className="flex flex-col gap-1 text-xl relative">
										<label
											className="absolute left-3 text-black/40 text-sm bg-white px-2 -top-2 leading-none"
											htmlFor="email">
											Email
										</label>
										<input
											autoFocus
											id="email"
											name="email"
											value={values.email}
											onChange={handleChange}
											className={`text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 
										${errors.email && "border-red-300"} 
											
											${values.email && "text-black border-green-400 shadow-sm"}`}
											type="email"
											placeholder="zuckerberg@gmail.com"
										/>
										{errors.email ? (
											<Tooltip title={errors.email && errors.email} />
										) : null}
									</div>
									<div className="flex flex-col gap-1 text-xl relative">
										<label
											className="absolute left-3 text-black/40 text-sm bg-white px-2 -top-2 leading-none"
											htmlFor="password">
											Password
										</label>
										<input
											id="password"
											name="password"
											value={values.password}
											onChange={handleChange}
											className={`text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 
										${errors.password && "border-red-300"} 
											
											${values.password && "text-black border-green-400 shadow-sm"}`}
											type={togglePassword ? "text" : "password"}
											placeholder=". . . . . . . . . "
										/>
										<div
											className="px-3 w-15 h-11 absolute top-0 right-0 flex items-center justify-center text-black/50 cursor-pointer duration-150 hover:text-black"
											onClick={() => {
												setTogglePassword(!togglePassword);
											}}>
											{togglePassword ? <RxEyeClosed /> : <RxEyeOpen />}
										</div>
										{errors.password ? (
											<Tooltip title={errors.password && errors.password} />
										) : null}
									</div>
									<button
										type="submit"
										className="bg-blue-500 text-white text-lg font-semibold py-2 px-3 rounded-md duration-150 active:bg-blue-600">
										{load ? (
											<div className="w-full flex gap-3 items-center justify-center text-white">
												<BiLoaderAlt className="animate-spin" />
												Processing...
											</div>
										) : (
											"Log In"
										)}
									</button>
								</form>
							)}
						</Formik>
						<div className="w-full flex justify-between items-center">
							<Link
								href="/register"
								className="text-black/80 md:text-lg font-normal hover:underline hover:text-black">
								Create an account
							</Link>
							<Link
								href="/reset"
								className="text-black/80 md:text-lg font-normal hover:underline hover:text-black">
								Forgot your password
							</Link>
						</div>
					</div>
					<div className="w-full">
						<p className="font-extralight text-lg text-black/50 text-center md:text-left">
							Project developed by -
							<a
								href="https://github.com/codewithsebas"
								rel="noreferrer"
								target="_blank"
								aria-label="Github">
								<b className="text-blue-500"> Sebastián Giraldo</b>
							</a>
						</p>
					</div>
				</div>
				<div className="w-full h-full bg-blue-500 md:flex hidden">
					<Image
						width={3000}
						height={3000}
						priority
						className="w-full h-full object-cover"
						src="https://res.cloudinary.com/dovavvnjx/image/upload/v1675722632/pexels-greenwish-10544133_nihbvr.jpg"
						alt="Facebook"
					/>
				</div>
			</div>
		</>
	);
}
