import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "G-5501",
    price: 1200000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
    sapiente!`,
  },
  {
    id: 2,
    name: "G-5502",
    price: 2200000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
    sapiente!`,
  },
  {
    id: 3,
    name: "G-5503",
    price: 2500000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
    sapiente!`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  // const handleAddToCart = (id) => {
  //   setCart([
  //     ...cart,
  //     {
  //       id,
  //       qty: 1,
  //     },
  //   ]);
  // };

  return (
    // Using Nested Components
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div> */}
      {/* <div className="flex w-100 justify-center">
        <Counter />
      </div> */}
    </Fragment>
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
