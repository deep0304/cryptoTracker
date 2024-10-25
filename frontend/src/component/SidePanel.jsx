import React from 'react';
import SearchHistory from './SearchHistory';
import SuspiciousTransactions from './SuspiciousTransaction';

function SidePanel ( { setInputValue } )
{  // Accept setInputValue as a prop
  return (
    <div className="flex flex-col px-9 pt-20 pb-36 mx-auto w-full border border-solid bg-neutral-800 border-neutral-800 max-md:px-5 max-md:pb-24 max-md:mt-5">
      <div className="flex gap-4 self-start text-2xl text-white whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c64389c3cfc1392cffa17e935771611fa72a31b7ad01c1475cd0965fc36092?placeholderIfAbsent=true&apiKey=9825bd02a58246fc9d930bec7baef96a" className="object-contain shrink-0 w-9 aspect-[1.09]" alt="" />
        <h2 className="self-start basis-auto">Dashboard</h2>
      </div>
      <div className="flex overflow-hidden flex-col px-4 pt-4 pb-48 mt-9 rounded-lg bg-neutral-800 font-[number:var(--sds-typography-body-font-weight-regular)] min-h-[740px] text-[length:var(--sds-typography-body-size-medium)] max-md:pb-24">
        <SearchHistory onSelectSearch={ ( query ) => setInputValue( query ) } />  {/* Pass setInputValue to SearchHistory */ }
        <SuspiciousTransactions risk={ 35 } />
        <SuspiciousTransactions risk={ 12 } />
      </div>
    </div>
  );
}

export default SidePanel;
