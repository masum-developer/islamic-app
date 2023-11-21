import React from 'react';

const page = () => {
    return (
        <div className="flex h-screen">
              <div className="w-[25%] rounded-xl">
                <div className="bg-green-400 rounded-t-xl h-12">
                  <h2>Categories</h2>
                </div>
                <div className="bg-white h-screen pt-5">
                  <input className='border-2 rounded-md py-2 px-5 ms-4 hover:border-green-600' type="text" placeholder="Search Categories" />
                </div>
              </div>
              <div className="w-[3%] bg-[#E2E2E2]"></div>
              <div className="w-[70%] bg-white">
                <h2>Dua</h2>
              </div>
              <div className="w-[2%] bg-[#E2E2E2]"></div>
            </div>
    );
};

export default page;