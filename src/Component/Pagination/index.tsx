import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import FeaturedData from '../../Module/Home/FeaturedData';
import '../../MyCSS.css';
interface IPaginationProps {
  className?: string;
  productArray: {
    productImage?: string;
    productName?: string;
  }[];
}
const Pagination = (props: IPaginationProps) => {
  const { className, productArray } = props;
  const itemsPerPage = 2;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productArray.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productArray.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % productArray.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={className}>
      <div className="Featured">
        {currentItems?.map((iteam) => {
          return (
            <div>
              <FeaturedData
                productName={iteam.productName}
                image={iteam.productImage}
              />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => {
          handlePageClick(event);
        }}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="ReactPaginate"
      />
    </div>
  );
};

export default Pagination;
