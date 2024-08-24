"use client";
import React, { PropsWithoutRef, SetStateAction, useEffect } from "react";

type PaginationProps = {
  count: number;
  setAction: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ count, setAction }) => {
  const [isActive, setisActive] = React.useState<number>(1);
  const [pageNumber, setPageNumber] = React.useState<(string | number)[]>([]);

  if (!count) return;
  useEffect(() => {
    const pageNumbers = [];
    // Display pages logic with ellipses
    if (count <= 4) {
      for (let i = 1; i <= count; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (isActive <= 3) {
        pageNumbers.push(1, 2, 3, "...", count);
      } else if (isActive >= count - 2) {
        pageNumbers.push(1, "...", count - 3, count - 2, count - 1, count);
      } else {
        pageNumbers.push(
          1,
          "...",
          isActive - 1,
          isActive,
          isActive + 1,
          "...",
          count
        );
      }
    }
    setPageNumber(pageNumbers);
  }, []);

  useEffect(() => {
    const pageNumbers = [];
    // Display pages logic with ellipses
    if (count <= 4) {
      for (let i = 1; i <= count; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (isActive <= 3) {
        pageNumbers.push(1, 2, 3, "...", count);
      } else if (isActive >= count - 2) {
        pageNumbers.push(1, "...", count - 2, count - 1, count);
      } else {
        pageNumbers.push(
          1,
          "...",
          isActive - 1,
          isActive,
          isActive + 1,
          "...",
          count
        );
      }
    }
    setPageNumber(pageNumbers);
  }, [isActive]);

  const handlePage = (page: number) => {
    setisActive(page);
    setAction && setAction(page);
  };
  return (
    <div>
      <div className="flex gap-3 text-[13px] font-semibold text-slate-3 items-center">
        {isActive > 1 ? (
          <button onClick={() => handlePage(isActive - 1)}>Prev</button>
        ) : (
          <button className="disabled cursor-not-allowed text-grey-2 ">
            Prev
          </button>
        )}
        <ul className="flex items-center gap-1">
          {pageNumber.length > 0 &&
            pageNumber.map((val: any, index) =>
              typeof val === "number" ? (
                <li key={index}>
                  <button
                    className={`paginate ${isActive === val && "active"}`}
                    onClick={() => handlePage(val)}
                  >
                    {val}
                  </button>
                </li>
              ) : (
                <li key={index} className="paginate-three-dot">
                  ...
                </li>
              )
            )}
        </ul>
        {isActive < count ? (
          <button onClick={() => handlePage(isActive + 1)}>Next</button>
        ) : (
          <button className="disabled cursor-not-allowed text-grey-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
