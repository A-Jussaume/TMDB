import { useEffect, useState } from "react";


export const usePagination = (currentPage) => {
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    let start = 1;
    let end = 13;
    let pageLimit = 500;
    let arrayPages = [];
    if (currentPage > 6 && currentPage < (pageLimit - 6)) {
      start = currentPage - 6;
      end = currentPage + 6;
    }
    if (currentPage >= (pageLimit - 6)) {
      start = 488;
      end = pageLimit;
    }
    for (let i = start; i <= end; i++) {
      arrayPages.push(i);
    }
    setPagination(arrayPages);

  }, [currentPage])
  return { pagination }
}
