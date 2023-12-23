import ReactPaginate from "react-paginate";

const Pagination = ({ setParams, pageCount }) => {
  const handlePageClick = ({ selected }) => {
    setParams((prev) => ({ ...prev, number: selected + 1 }));
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className=" text-black font-medium text-xl w-10 h-10 flex justify-center items-center">
            &raquo;
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <span className=" text-black font-medium text-xl w-10 h-10 flex justify-center items-center">
            &laquo;
          </span>
        }
        containerClassName="flex items-center justify-center my-8 gap-4"
        pageClassName="block w-10 h-10 flex items-center justify-center rounded-md font-medium"
        activeClassName="bg-orange text-white"
      />
    </>
  );
};

export default Pagination;
