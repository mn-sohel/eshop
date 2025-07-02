import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductLayout from "../components/commonLayouts/ProductLayout";
import Pagination from "../components/Pagination";
import { Bounce, toast } from "react-toastify";
import PriceRange from "../components/PriceRange";

const ProductListPage = () => {
  let [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

 

  const products = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  // console.log(maxPercent - minPercent)

  return (
    <Container>
      <div className="flex mt-[64px]">
        <div className="w-[355px] bg-[#F4F4F4] rounded-[25px] p-12">
          <PriceRange/>
        </div>
        <div className="w-[80%]">
          <div className="flex gap-1 flex-wrap">
            {currentProducts.map((item, index) => (
              <div className="w-[24%]" key={index}>
                <ProductLayout
                  img={"images/productImage.png"}
                  percentTag={false}
                  category="PHONE"
                  title={item.name}
                  rating="4"
                  totalRating="50"
                  price="999.00"
                  border={true}
                  bg="transparent"
                  stockAmount="505" // stock={stock}
                />
              </div>
            ))}
           
          </div>
           <Pagination
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
        </div>
      </div>
    </Container>
  );
};

export default ProductListPage;
