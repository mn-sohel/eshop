import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import ProductLayout from "../components/commonLayouts/ProductLayout";
import Pagination from "../components/Pagination";
import { Bounce, toast } from "react-toastify";
import PriceRange from "../components/PriceRange";
import ProductListSidebarContent from "../components/ProductListSidebarContent";
import CustomCheckBox from "../components/CustomCheckBox";

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
      <div className="flex mt-16 gap-x-[50px]">
        <div className="w-[355px] relative">
          <div className="bg-[#F4F4F4] rounded-[25px] p-12 sticky top-0">
            <ProductListSidebarContent>
              <div className="relative after:absolute after:bottom-[-40px] after:left-0 after:w-full after:h-[1px] after:content[''] after:bg-[#B7B7B7]">
                <CustomCheckBox text="Computers & Tablets" />
                <CustomCheckBox text="Mobile & Accessories" />
                <CustomCheckBox text="TV & Home Theater" />
                <CustomCheckBox text="Audio & Headphones" />
                <CustomCheckBox text="Cameras & Camcorders" />
                <CustomCheckBox text="Gaming Equipment" />
                <CustomCheckBox text="Home Appliances" />
              </div>
            </ProductListSidebarContent>
            <ProductListSidebarContent title="Brands">
              <div className="relative after:absolute after:bottom-[-40px] after:left-0 after:w-full after:h-[1px] after:content[''] after:bg-[#B7B7B7]">
                <CustomCheckBox text="Apple" />
                <CustomCheckBox text="Samsung" />
                <CustomCheckBox text="ASUS" />
                <CustomCheckBox text="Dell" />
                <CustomCheckBox text="Lenovo" />
                <CustomCheckBox text="HP" />
                <CustomCheckBox text="Panasonic" />
              </div>
            </ProductListSidebarContent>
            <PriceRange />
          </div>
        </div>
        <div className="w-[80%] relative">
          <h2 className="font-['Poppins'] font-semibold text-[36px] mb-[30px]">
            Products
          </h2>
            <div className="bg-red-400 flex justify-end">dfdfdf</div>
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
          <div className="flex justify-center">
            <Pagination
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductListPage;
