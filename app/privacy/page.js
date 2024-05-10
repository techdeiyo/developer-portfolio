// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Privacy
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="container">
        <h1 className="text-3xl">Privacy Policy for Sanjana’s Portfolio Website</h1>
        <p className="mt-10">
          <strong className="mt-4 text-lg">Introduction</strong>
          <br /><br />
          Welcome to Sanjana’s Portfolio! This privacy policy explains how we handle your personal information when you visit our website. By using our site, you agree to the terms outlined below.
          <strong className="mt-4 text-lg">Data Collection</strong>
          <br /><br />

        </p>
      </div>
    </div>
  );
};

export default page;