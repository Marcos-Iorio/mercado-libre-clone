import ReactPaginate from "react-paginate";

interface PaginateProps {
  pageCount: number;
  initialPage: number;
  onChange: ({ selected }: { selected: number }) => void;
  onClick: ({
    isNext,
    isPrevious,
  }: {
    isNext: boolean;
    isPrevious: boolean;
  }) => void;
}

const Paginate = ({
  pageCount,
  initialPage,
  onChange,
  onClick,
}: PaginateProps) => {
  return (
    <div className="pb-12">
      <ReactPaginate
        initialPage={initialPage}
        breakLabel="de"
        nextLabel="Siguiente >"
        marginPagesDisplayed={1}
        onPageChange={onChange}
        onClick={onClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel="< Anterior"
        breakClassName="text-black/[.45] font-['Proxima Nova Rg'] font-md "
        containerClassName="flex flex-row w-full h-full justify-center items-center gap-5"
        previousClassName="text-[#3483fa] font-['Proxima Nova Rg'] hover:bg-black/[.04] p-2 hover:rounded-sm transition-colors duration-400 ease-in-out"
        nextClassName="text-[#3483fa] font-['Proxima Nova Rg'] hover:bg-black/[.04] p-2 hover:rounded-sm transition-colors duration-400 ease-in-out"
        activeLinkClassName="flex-1 rounded-sm bg-black/[.04] text-black/[.45] font-bold font-['Proxima Nova Rg'] p-2 w-full"
        pageLinkClassName="text-black/[.45] font-['Proxima Nova Rg'] font-md"
        disabledClassName="hidden"
      />
    </div>
  );
};

export default Paginate;
