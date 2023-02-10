import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { BiLoaderAlt } from "react-icons/bi";
import { Formik } from "formik";
import { Tooltip } from "../components/Tooltip";
import { InterfaceRegister } from "../interface/Register.Interface";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Register() {
	const [togglePassword, setTogglePassword] = useState(false);
	const [load, setLoad] = useState(false);

	return (
		<>
			<Head>
				<title>Facebook App - Register</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<div className="w-full h-screen max-h-screen flex">
				<div className="w-full bg-white flex flex-col items-start justify-between md:py-10 md:px-10 p-5 md:max-w-2xl">
					<div className="flex items-center gap-3">
						<div className="w-16 h-full">
							<Image
								width={100}
								height={100}
								priority
								src="/favicon.svg"
								alt="Logo Facebook"
							/>
						</div>
						<h1 className="w-full max-w-lg text-4xl font-bold text-blue-500">
							Facebook
						</h1>
					</div>
					<div className="w-full flex flex-col justify-center items-center gap-12">
						<h1 className="w-full max-w-3xl text-4xl font-bold text-black/80">
							Create an account
						</h1>
						<Formik
							initialValues={{
								name: "",
								last: "",
								email: "",
								gender: "",
								password: "",
								confirm: "",
							}}
							validate={(values) => {
								let error: InterfaceRegister = {
									name: "",
									last: "",
									email: "",
									password: "",
									confirm: "",
								};
								if (!values.name) {
									error.name = "Your name is required!";
									return error;
								} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
									error.name = "Only letters and spaces!";
									return error;
								} else if (!values.last) {
									error.last = "Your last name is required!";
									return error;
								} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.last)) {
									error.last = "Only letters and spaces!";
									return error;
								} else if (!values.email) {
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
								} else if (
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
										values.password
									)
								) {
									error.password = "This password is invalid!";
									return error;
								} else if (values.password.length < 10) {
									error.password = "Please more than 10 digits!";
									return error;
								} else if (values.password.length > 15) {
									error.password = "Please less than 15 digits!";
									return error;
								} else if (!values.confirm) {
									error.confirm = "Confirm your password!";
									return error;
								} else if (
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
										values.confirm
									)
								) {
									error.confirm = "This password is invalid!";
									return error;
								} else if (!(values.password === values.confirm)) {
									error.confirm = "Passwords are not the same!";
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
									className="w-full max-w-3xl flex flex-col gap-5 rounded-md backdrop-blur-3xl">
									<div className="w-full flex flex-col gap-4 items-center md:flex-row">
										<div className="w-full flex flex-col gap-1 text-xl relative">
											<label
												className="absolute left-3 text-black/40 text-sm bg-white px-2 -top-2 leading-none"
												htmlFor="name">
												Name
											</label>
											<input
												autoFocus
												id="name"
												name="name"
												value={values.name}
												onChange={handleChange}
												className={`text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 ${
													errors.name && "border-red-300"
												} ${
													values.name && "text-black border-green-400 shadow-sm"
												}`}
												type="text"
												placeholder="Mark"
											/>
											{errors.name ? (
												<Tooltip title={errors.name && errors.name} />
											) : null}
										</div>
										<div className="w-full flex flex-col gap-1 text-xl relative">
											<label
												className="absolute left-3 text-black/40 text-sm bg-white px-2 -top-2 leading-none"
												htmlFor="last">
												Last name
											</label>
											<input
												id="last"
												name="last"
												value={values.last}
												onChange={handleChange}
												className={`text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 ${
													errors.last && "border-red-300"
												} first-letter:${
													values.last && "text-black border-green-400 shadow-sm"
												}`}
												type="text"
												placeholder="Zuckerberg"
											/>
											{errors.last ? (
												<Tooltip title={errors.last && errors.last} />
											) : null}
										</div>
									</div>

									<div className="w-full flex flex-col gap-1 text-xl relative">
										<label
											className="absolute left-3 text-black/40 text-sm bg-white px-2 -top-2 leading-none"
											htmlFor="email">
											Email
										</label>
										<input
											id="email"
											name="email"
											value={values.email}
											onChange={handleChange}
											className={`w-full text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 
											${errors.email && "border-red-300"} 
											
											${values.email && "text-black border-green-400 shadow-sm"}`}
											type="email"
											placeholder="zuckerberg@gmail.com"
										/>
										{errors.email ? (
											<Tooltip title={errors.email && errors.email} />
										) : null}
									</div>

									<div className="w-full flex flex-col gap-1 text-xl relative">
										<label
											className="absolute left-3 text-black/40 text-sm bg-white px-2 -top-2 leading-none z-10"
											htmlFor="password">
											Password
										</label>
										<div className="w-full flex gap-4">
											<div className="w-full relative">
												<input
													id="password"
													name="password"
													value={values.password}
													onChange={handleChange}
													className={`w-full text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 ${
														errors.confirm && "border-red-300"
													}
												${
													values.password &&
													values.confirm &&
													"text-black border-green-400 shadow-sm"
												}`}
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
											<div className="w-full relative">
												<input
													id="password"
													name="confirm"
													value={values.confirm}
													onChange={handleChange}
													className={`w-full text-lg py-2 px-3 rounded-md outline-none duration-150 border placeholder:text-black/20 hover:border-black/20 focus:border-blue-500/80 ${
														errors.confirm && "border-red-300"
													} ${
														values.password &&
														values.confirm &&
														"text-black border-green-400 shadow-sm"
													}`}
													type={togglePassword ? "text" : "password"}
													placeholder=". . . . . . . . ."
												/>
												<div
													className="px-3 w-15 h-11 absolute top-0 right-0 flex items-center justify-center text-black/50 cursor-pointer duration-150 hover:text-black"
													onClick={() => {
														setTogglePassword(!togglePassword);
													}}>
													{togglePassword ? <RxEyeClosed /> : <RxEyeOpen />}
												</div>
												{errors.confirm ? (
													<Tooltip title={errors.confirm && errors.confirm} />
												) : null}
											</div>
											{errors.confirm ? (
												<Tooltip title={errors.confirm && errors.confirm} />
											) : null}
										</div>
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
											"Create account!"
										)}
									</button>
									<div className="flex justify-start">
										<Link
											href="/"
											className="text-black/80 text-lg font-normal hover:underline hover:text-black">
											Log in to your account
										</Link>
									</div>
								</form>
							)}
						</Formik>
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
						src="https://res.cloudinary.com/dovavvnjx/image/upload/v1675722667/pexels-photo-6162932_xjtavi.jpg"
						alt="Facebook"
					/>
				</div>
			</div>
		</>
	);
}
