"use client";

import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-8xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Smart Affiliates</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium text-2xl">Where links genarate cash on every click!</p>
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <a href="/merchant-mode">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl cursor-pointer">
                <BugAntIcon className="h-8 w-8 fill-secondary" />
                <p>View In Merchant Mode</p>
              </div>
            </a>
            <a href="/promoter-mode">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl cursor-pointer">
                <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                <p>View In Promoter Mode</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
