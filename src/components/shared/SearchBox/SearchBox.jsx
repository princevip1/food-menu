import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
    const searchBar = {
        "backgroundColor": "#375272"
    }

    return (
        <div>
            <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-6 top-1 flex items-center pl-2">
                    <svg class="h-5 w-5 fill-slate-300 text-slate-400" viewBox="0 0 20 20"><FiSearch/></svg>
                </span>
                <input style={searchBar} class=" my-5 px-9 py-2  placeholder-slate-400  w-11/12  rounded  sm:text-sm focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 sm:text-sm"  placeholder="Are you hungry? …" type="text" name="search" />
            </label>
            {/* <input style={searchBar} type="text" name="foodName" class="my-2 px-3 py-2  placeholder-slate-400  w-80  rounded  sm:text-sm " placeholder="Are you hungry? …" /> */}
        </div>
    );
};

export default SearchBox;