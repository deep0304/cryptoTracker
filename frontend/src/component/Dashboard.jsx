import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TransactionGraph from './TransactionGraph';
import TransactionTable from './TransactionTable';
import AnomalyDashboard from './AnomalyDashboard';
import UserProfile from "./UserProfile";
import SidePanel from "./SidePanel";

function Dashboard ()
{
  const [ transactionData, setTransactionData ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( false );
  const [ showGraph, setShowGraph ] = useState( true );
  const [ error, setError ] = useState( "" );
  const [ searchInputValue, setSearchInputValue ] = useState( '' );
  const [ activeView, setActiveView ] = useState( 'transactions' );
  const [ isDropdownOpen, setIsDropdownOpen ] = useState( false );
  const [ selectedChain, setSelectedChain ] = useState( '' );
  const [ searchType, setSearchType ] = useState( 'address' ); // 'address' or 'hash'

  const toggleView = () =>
  {
    setShowGraph( ( prevShowGraph ) => !prevShowGraph );
  };

  const chains = [ 'tezos', 'bitcoin', 'ethereum' ];

  return (
    <div className="flex overflow-hidden flex-col min-h-screen border border-black border-solid bg-neutral-800">
      {/* Header with UserProfile */ }
      <header className="px-16 pt-12 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="relative">
              <button
                onClick={ () => setIsDropdownOpen( !isDropdownOpen ) }
                className="w-48 text-left px-4 py-2 bg-neutral-700 text-white rounded"
              >
                { selectedChain || 'Select Chain' }
              </button>

              { isDropdownOpen && (
                <div className="absolute w-48 bg-neutral-700 mt-1 rounded shadow-lg z-50">
                  { chains.map( ( chain ) => (
                    <button
                      key={ chain }
                      onClick={ () =>
                      {
                        setSelectedChain( chain );
                        setIsDropdownOpen( false );
                      } }
                      className="block w-full px-4 py-2 text-white hover:bg-neutral-600 text-left"
                    >
                      { chain }
                    </button>
                  ) ) }
                </div>
              ) }
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <UserProfile />
          </div>
        </div>
      </header>

      <main className="flex-1 z-10 mt-0 max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 h-full max-md:flex-col">
          <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <SidePanel setInputValue={ setSearchInputValue } />
          </aside>

          <section className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-8 w-full max-md:mt-10 max-md:max-w-full">
              {/* Error Display */ }
              { error && (
                <div className="mb-4 p-4 bg-red-500 text-white rounded-lg">
                  { error }
                </div>
              ) }

              { selectedChain && (
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4">
                    <button
                      onClick={ () => setActiveView( 'transactions' ) }
                      className={ `px-4 py-2 rounded ${ activeView === 'transactions'
                          ? 'bg-blue-500 text-white'
                          : 'bg-neutral-700 text-gray-300'
                        }` }
                    >
                      Transactions
                    </button>
                    <button
                      onClick={ () => setActiveView( 'anomalies' ) }
                      className={ `px-4 py-2 rounded ${ activeView === 'anomalies'
                          ? 'bg-blue-500 text-white'
                          : 'bg-neutral-700 text-gray-300'
                        }` }
                    >
                      Anomaly Detection
                    </button>
                  </div>
                </div>
              ) }

              { selectedChain && activeView === 'transactions' && (
                <>
                  {/* Search Type Selection */ }
                  <div className="mb-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={ () => setSearchType( 'address' ) }
                        className={ `px-4 py-2 rounded ${ searchType === 'address'
                            ? 'bg-blue-500 text-white'
                            : 'bg-neutral-700 text-gray-300'
                          }` }
                      >
                        By Wallet Address
                      </button>
                      <button
                        onClick={ () => setSearchType( 'hash' ) }
                        className={ `px-4 py-2 rounded ${ searchType === 'hash'
                            ? 'bg-blue-500 text-white'
                            : 'bg-neutral-700 text-gray-300'
                          }` }
                      >
                        By Transaction Hash
                      </button>
                    </div>
                  </div>

                  <SearchBar
                    setTransactionData={ setTransactionData }
                    setIsLoading={ setIsLoading }
                    setError={ setError }
                    inputValue={ searchInputValue }
                    setInputValue={ setSearchInputValue }
                    searchType={ searchType }
                  />

                  { isLoading ? (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                  ) : (
                    <div className="bg-neutral-900 rounded-lg p-6">
                      { transactionData.length === 0 ? (
                        <div className="text-center text-gray-400 py-12">
                          <p className="text-lg">No transactions to display</p>
                          <p className="text-sm mt-2">
                            Search for a { searchType === 'address' ? 'wallet address' : 'transaction hash' } to begin
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <button
                            onClick={ toggleView }
                            className="mb-4 px-4 w-24 py-2 bg-blue-500 text-white rounded"
                          >
                            { showGraph ? "Show Table" : "Show Graph" }
                          </button>
                          { showGraph ? (
                            <TransactionGraph transactions={ transactionData } />
                          ) : (
                            <TransactionTable transactions={ transactionData } />
                          ) }
                        </div>
                      ) }
                    </div>
                  ) }
                </>
              ) }

              { selectedChain && activeView === 'anomalies' && <AnomalyDashboard /> }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
