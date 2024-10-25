// import React from 'react';

function UserProfile ()
{
  return (
    <div className="flex gap-5 justify-between w-full text-base tracking-wide leading-6 whitespace-nowrap max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5440444ed63a3002d717bb55cd001491e557d4a66a0017dbaf78dbf1a0e59cb0?placeholderIfAbsent=true&apiKey=9825bd02a58246fc9d930bec7baef96a" className="object-contain shrink-0 my-auto rounded-none aspect-[1.04] w-[49px]" alt="User avatar" />
      <div className="flex gap-3">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5b5033678c83173f3e2e5685372332ea71c484967e9438720ecc1ba656a6ca?placeholderIfAbsent=true&apiKey=9825bd02a58246fc9d930bec7baef96a" className="object-contain shrink-0 w-14 aspect-square" alt="" />
        <div className="flex flex-col self-start mt-5">
          <div className="flex gap-1 text-white">
            <div className="grow">Admin</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d3b57b9e37dc583e745aef24dad23c05514ad606aa4c82e0b0fec2148028cb?placeholderIfAbsent=true&apiKey=9825bd02a58246fc9d930bec7baef96a" className="object-contain shrink-0 self-start aspect-[1.73] w-[19px]" alt="" />
          </div>
          <div className="self-start text-white text-opacity-60">admin</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
