"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <div>Lọc theo giá</div>
        {/* <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}>
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select> */}
        <input
          type="text"
          name="min"
          placeholder="0 ₫"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="100 ₫"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
        {/* <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}>
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select> */}
        {/* <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>All Filters</option>
        </select> */}
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}>
          <option>Lọc theo</option>
          <option value="asc price">Giá (Từ thấp đến cao)</option>
          <option value="desc price">Giá (Từ cao đến thấp)</option>
          <option value="asc lastUpdated">Mới nhất</option>
          <option value="desc lastUpdated">Cũ nhất</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
