"use client"
import { useFormik } from 'formik'
import * as Yup from "yup";
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Form() {

  const formik = useFormik({
    initialValues: {
    webLink: "",
    userName: "",
    urlProfile: ""
    },
    validationSchema: Yup.object({
      webLink: Yup.string()
      .required("The URL is required.")
      .matches(
        /^(http:\/\/|https:\/\/|www\.).*/,
      "It must start with 'http://,' 'https://,' or 'www.'"
      ) .test('len', 'It must be longer than its prefix.', function(val) {
        if (val.startsWith('www.')) {
          return val.length > 5;
        } else if (val.startsWith('http://')) {
          return val.length > 8;
        } else if (val.startsWith('https://')) {
          return val.length > 9;
        }
        return true;
      }),
      userName: Yup.string()
      .min(3, "Your name must contain more than 3 characters.")
      .max(15, "Your name must contain less than 15 characters.")
      .required("Your name is required.")
    }),

  })

  const router = useRouter()

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        userName: formik.values.userName,
        webLink: formik.values.webLink,
        urlProfile: formik.values.urlProfile
      }),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      router.push(`/done?params=${data.code}`)
      
    } else {
      console.error("Error creating task:", res.statusText);
    }
    console.log(res)

  }




  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="w-full max-w-xs">

      <Link href='/' className='flex justify-around w-[25%] mb-6'>
  <Image src="/back.svg" alt='back' width={20} height={0}/> 
  <p className='text-ooink'>Back</p>
</Link>
<h1 className="text-4xl mb-8 text-white text-left font-bold">New OOINK Code</h1>

<form onSubmit={handleSubmit}>
  <label htmlFor="link" className="text-white mb-2 font-light flex">Link for share<p className='text-red-600 ml-2'>*</p></label>
  <div className="mb-4">
    <input value={formik.values.webLink} onBlur={formik.handleBlur} onChange={formik.handleChange}  type="text" id="webLink" placeholder="http://" className="py-4 px-4 rounded-lg focus:outline-none w-full text-white bg-zinc-800"/>
    {formik.touched.webLink && formik.errors.webLink ? (
      <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
      role="alert">
      <p className="font-bold">Error: </p>
      <p>{formik.errors.webLink}</p>
      </div>
    ) : null}
  </div>
  <label htmlFor="username" className="text-white mb-2 font-light flex">Your name<p className='text-red-600 ml-2'>*</p></label>
  <div className="mb-4">
    <input value={formik.values.userName} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="userName" placeholder="Your name" className="py-4 px-4 rounded-lg focus:outline-none w-full text-white bg-zinc-800"/>
    {formik.touched.userName && formik.errors.userName ? (
      <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
      role="alert">
      <p className="font-bold">Error: </p>
      <p>{formik.errors.userName}</p>
      </div>
    ) : null}
  </div>
  
  { (formik.touched.urlProfile && formik.errors.urlProfile) || (formik.touched.webLink && formik.errors.webLink) || (formik.touched.userName && formik.errors.userName) || (!formik.values.webLink.length || !formik.values.userName) ? (
    <div>
       <div className=" bg-slate-900 py-4 mt-8 px-4 rounded-lg text-white flex items-center justify-center w-full">
    Generate code
    <Image src="/upload-disabled.svg" alt='upload' width={20} height={0} className='ml-2'/>
  </div>
    </div>
  ) : (
    <button  type="submit" className=" bg-ooink py-4 mt-8 px-4 rounded-lg text-black flex items-center justify-center w-full">
    <span>Generate code</span>
    <Image src="/Subtract.svg" alt='upload' width={20} height={0} className='ml-2'/>
  </button>
  )}

</form>
</div>
    </div>
  )
}

export default Form