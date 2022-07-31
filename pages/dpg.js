import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { SiPostgresql, SiAmazondynamodb, SiMongodb } from "react-icons/si";

export default function DPG() {
  const [file, setFile] = useState(null);
  const [tempURL, setTempURL] = useState("");
  const [onFileReadError, setOnFileReadError] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    // Temporarily set the file data as a react state.
    setFile(acceptedFiles[0]);
    // Set the temporary URL to the file data.
    const fileURI = URL.createObjectURL(acceptedFiles[0]);
    setTempURL(fileURI);
  }, []);

  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '*',
    minSize: 0,
    maxSize: 1048576 * 100,
  });

  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="text-center px-2 my-auto pt-12 md:pt-0">
          <h1 className="text-6xl font-bold">Encrypt Your Customers' Sensetive Data</h1>
          <h3 className="text-3xl font-semibold">With <span className="text-yellow-500">No Change</span> to Your Applications</h3>
        </div>
        <div className="my-auto mx-auto">
          <img src="/68999-file-encryption.gif" />
        </div>
      </div>

      <section className=" bg-gray-50 py-20 mt-20 lg:mt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Welcome to XYZ Hospital
          </h1>

          <p className="mt-3 text-2xl">
            Fill out your personal information to schedule an appointment.
          </p>
        </div>


        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <div className=" flex flex-col sm:flex-row gap-6 mt-8">
            <div className=" flex flex-col flex-1 px-2 py-3">
              <label className="block mb-2 text font-medium text-gray-900">First Name</label>
              <input
                type="text"
                placeholder="Enter patient name"
                className=" focus:outline-none rounded-md text-black border-2 border-blue-600  px-2 py-3"
                // value={initialValue}
                // onChange={handleChange}
                name="firstName"
              ></input>
            </div>
            <div className=" flex flex-col flex-1 px-2 py-3">
              <label className="block mb-2 text font-medium text-gray-900">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className=" focus:outline-none rounded-md text-black border-2 border-blue-600  px-2 py-3"
                // onChange={handleChange}
                name="lastName"
              ></input>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-6 mt-8">
            <div className=" flex flex-col flex-1 px-2 py-3">
              <label className="block mb-2 text font-medium text-gray-900">Date of Birth</label>
              <input type="date" id="start" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
                min="1900-01-01" max="2022-12-31"
                name="dob" />
            </div>
            <div className=" flex flex-col flex-1 px-2 py-3">
              <label className="block mb-2 text font-medium text-gray-900">Social Security Number</label>
              <input
                type="number"
                placeholder="Enter Social Security Number"
                className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
                // onChange={handleChange}
                name="ssn"
              ></input>
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-6 mt-8">
            <div className=" flex flex-col flex-1 px-2 py-3">
              <label className="block mb-2 text font-medium text-gray-900">Date of Appointment</label>
              <input type="date" id="start" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
                min="2022-03-20" max="2022-12-31"
                name="date_of_appointment" />
            </div>
            <div className=" flex flex-col flex-1 px-2 py-3">
              <label className="block mb-2 text font-medium text-gray-900">Insurance ID</label>
              <input
                type="number"
                placeholder="Enter Social Security Number"
                className=" focus:outline-none flex-1 px-2 rounded-md text-black border-2 border-blue-600"
                // onChange={handleChange}
                name="insurance_id"
              ></input>
            </div>
          </div>

          <div {...getRootProps()} className="mt-8">
            <label className="block mb-2 text font-medium px-2 py-3 text-gray-900">Upload Insurance Card</label>
            <div className="flex justify-center items-center w-full" >
              <input id="dropzone-file" type="file" className="hidden"
                {...getInputProps()}
              />
              <div for="dropzone-file" className="flex flex-col justify-center items-center w-full lg:px-64 md:px-32 px-10 h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  {!file ? (
                    <>
                      <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      {isDragActive ? (
                        <>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drop your files <span className='font-semibold'>here 📥</span></p>
                        </>
                      ) : (
                        <>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">any file type (MAX. 100 MB)</p>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <img className='w-20' src={tempURL} />
                      <p className='text-sm text-gray-500 dark:text-gray-400'>{file.name} | (Size - {(file.size / 1048576).toFixed(2)} MB)</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 buttons in a rowthat say submit to the 3 databases */}
        <p className="text-xl font-semibold text-center mt-8 mb-2">Submit to</p>
        <div className="flex justify-center items-center  gap-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">Dynamo DB <SiAmazondynamodb className="ml-2 inline" /></button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">PostgreSQL <SiPostgresql className="ml-2 inline" /></button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl">Mongo DB <SiMongodb className="ml-2 inline" /></button>
        </div>
      </section>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>

  )
}