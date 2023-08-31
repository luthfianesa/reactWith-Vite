import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    // Using Nested Components
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body title="New Watch!">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
          sapiente!
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body title="New Watch!">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
          sapiente!
        </CardProduct.Body>
        <CardProduct.Footer />
      </CardProduct>
    </div>
    // ---Without Nested Components
    // <div className="flex justify-center py-5">
    //   <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
    //     <a href="#">
    //       <img src="/images/golden-watch.jpg" alt="Golden Watch" className="p-8 rounded-t-lg"></img>
    //     </a>
    //     <div className="px-5 pb-5">
    //       <a href="">
    //         <h5 className="text-xl font-semibold tracking-tight text-white">New Watch!</h5>
    //         <p className="text-m text-white">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae iusto obcaecati error sequi, placeat dolore odit blanditiis magnam illum sunt, labore esse debitis. Repellat dolorum animi voluptatum illum! Enim, omnis?
    //         </p>
    //       </a>
    //     </div>
    //     <div className="flex items-center justify-between px-5 pb-5">
    //       <span className="text-xl font-bold text-white">Rp 1.000.000</span>
    //       <Button classname="bg-blue-600">Add to cart</Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductsPage;
