# ReactJs

## Apa itu React JS ?

- React JS adalah sebuah library untuk membuat UI (User Interface) / antar muka sebuah aplikasi.
- React diciptakan oleh Jordan Walke
- React digunakan untuk membangun komponen yang reusable, dengan menggunakan fungsi javascript yang mengembalikan nilai berupa HTML yang ditulis dalam sebuah syntax spesial bernama JSX
  <br>

## Kenapa React ?

- React populer karena ekosistem pendukungnya
- Di bawah ini Link ekosistem react :
  - github.com/enaqx/awesome-react
  - ifelse.io/2018/07/04/a-guide-to-the-react-ecosystem/
    <br>

## Kenapa React disebut _Library_ bukan _Framework_

- Karena ada banyak pilihan untuk melakukan sesuatu dan kita harus memilih tools (package) dan membuat design system yang tepat untuk project
  <br>

## Instalasi React

1. npx create-react-app folderName
   - Cara ini instalasi ini sudah usang
   - Kurang bagus dari segi performance
     <br>
2. Install menggunakan framework :
   - Next Js
   - Gatsby Js
   - Remix Js
     <br>
3. Install menggunakan Vite Js
   1. npm create vite@latest my-react-app -- --template react
   2. cd my-react-app/
   3. npm install
      <br>
4. Install Tailwind (Optional)
   1. npm install -D tailwindcss postcss autoprefixer
   2. npx tailwindcss init -p
   3. configure template paths :
      - replace this in tailwind.config.js
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
   4. Add Tailwind directives to ./src/index.css
      - @tailwind base;
        @tailwind components;
        @tailwind utilities;

## Component & Props

### A. Component

- Dalam konsep react adalah memecah UI menjadi bagian - bagian lebih kecil untuk meningkatkan reusability
- Terdapat 2 cara untuk membuat react component :
  1. **Functional** Component (**Stateless** Component)
  2. **Class** Component (**Stateful** Component) <- Cara ini sudah usang
     ```
       class Button extends React.Component {
        render() {
        return (
        <button class="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
        Buy now
        </button>
        );
        }
       }
     ```
- Gunakan self closing tag jika component tidak memiliki children, contoh : `<Button />`

### B. Props

- Props / properties dalam react adalah mekanisme yang digunakan untuk mengirim data
- Data dikirim dari komponen yang lebih tinggi ke komponen yang lebih rendah
- Properti ini bersifat 'Read Only', artinya tidak dapat diubah oleh komponen yang menerimanya
- Didefinisikan di komponen utama, seperti `${props.text}`
- Digunakan seperti atribut `<Button text="Login"/>`
- Terdapat special props {props.children}
- Bisa menggunakan konsep destructuring untuk memberikan nilai default pada sebuah elemen dan mengirimkan data

  ```
   const { children, variant='bg-black' } = props; <-- Diletakkan sebelum return fungsi
   <button>{children}</button> <- {children} diletakkan di dalam sebuah elemen
  ```

  <br>

## Atomic Design

- Atomic Design adalah sebuah desain metodologi diciptakan oleh Brad Frost
- Terdiri dari 5 Tahapan, yaitu :
  Sub Atomic -> Typography, Shadows, Color Palette & Spacing (Margin, Padding)
  1.  Atoms / Elements -> Elemen seperti button
  2.  Molecules / Elements -> Minimal 2 Bagian seperti : input dan label
  3.  Organisms / Fragments -> Terdiri dari label email dan inputnya, label password dan inputnya serta button
  4.  Templates / Layout -> Komponen terdiri dari beberapa elemen dan bisa digunakan berulang - ulang (Reusability)
  5.  Pages -> Halaman web yang terdiri dari beberapa templates

* Semua folder atomic design berada di dalam folder components kecuali pages, pages diletakkan di dalam folder 'src'
  <br>

## React Router

- React router adalah library javascript untuk melakukan routing pada aplikasi react.
- Cara install melalui terminal, npm install react-router-dom
- Cara pakai di dalam file main.jsx :

  - import { createBrowserRouter, RouterProvider } from "react-router-dom";
  - Buat sebuah variabel bernama 'router' berisi fungsi createBrowserRouter yang di dalamnya terdapat sebuah array of object berisi path dan element
  - ```
        const router = createBrowserRouter([
        {
        path: "/",
        element: <h1>Hello World</h1>
        },
        {
        path: "/login",
        element: <LoginPage />
        },
        {
        path: "/register",
        element: <RegisterPage />
        },
        ])
    ```

  - ```
       Di dalam <React.StrictMode> masukkan <RouterProvider router={router} />
    ```
  - Error Handling, ketika memuat route yang salah :
    - Buat file errorPage di dalam folder pages
    - import { useRouteError } from "react-router-dom"
    - Di dalam return berisi html yang menampilkan pesan error :
    ```
        <h1>Oops!</h1>
        <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
        <p>{error.statusText || error.message}</p>
        Di dalam file main.jsx buat object di path:"/"
        errorElement: <ErrorPage />
    ```

  ### Client Site Routing

  - Adalah suatu cara dalam mengarahkan traffic / lalu lintas di dalam aplikasi web melalui sisi klien (client-side).
  - Jadi, tidak mengandalkan server dalam berpindah halaman
  - Teknik ini biasanya diterapkan pada SPA (Single Page Application) dimana sebagian besar konten dimuat saat pertama kali halaman dimuat
  - Client site routing membantu **mengelola perubahan tampilan dan navigasi tanpa harus berkomunikasi dengan server**
  - Kelebihan utama adalah pengalaman pengguna yang responsif dan halus karena perubahan tampilan tidak memerlukan pembongkaran dan pembuatan ulang halaman.
  - Kekurangannya, ada beberapa tantangan dalam hal SEO dan pengelolaan browser history

## Conditional Rendering

- Adalah ketika kita ingin menampilkan sesuatu yang berbeda dalam satu elemen
- Contohnya adalah dalam login page "Don't have an account? Register" dan dalam register page "Already have an account? Login"
- Cara conditional rendering :
  1.  Menggunakan Ternary :
  - Ternary direkomendasikan jika hanya ada 2 kondisi
  - ```
      {title === "Login" ? "Don't have an account?" : "Already have an account"}
    ```
  2.  Menggunakan operator &&
  - ```
        {type === "Login" && (
         <Link to="/register">Register</Link>
        )}
    ```
- Bisa membuat 2 komponen dalam satu file tetapi harus hanya 1 export default
  <br>

## Nested Component

- Adalah sebuah komponen di dalam komponen, digunakan ketika ingin membuat komponen tanpa membuat file baru
- Caranya adalah :

  1.  Buat komponen baru di dalam folder fragments
  2.  Isi props di dalam parameter fungsi komponen tersebut
  3.  Buat destructuring objek
  4.  Lalu buat nested komponen di bawah komponen utama tersebut contohnya Header, Body & Footer
  5.  Kita bisa memanggil nested komponen tersebut dengan cara => komponenUtama.nestedComponent = nestedComponent
  6.  Yang diexport default tetap 1 yaitu komponen utama

  ```
      import Button from "../Elements/Button";

      const CardProduct = (props) => {
        const { children } = props;
        return (
          <div className="flex justify-center py-5">
            <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">{children}</div>
          </div>
         );
       };

      const Header = (props) => {
        const { image } = props;
        return (
          <a href="#">
            <img src={image} alt="Golden Watch" className="p-8 rounded-t-lg"></img>
          </a>
         );
       };

      const Body = (props) => {
        const { children, title } = props;
        return (
          <div className="px-5 pb-5">
            <a href="">
              <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
              <p className="text-m text-white">{children}</p>
            </a>
           </div>
          );
         };

      const Footer = () => {
        return (
          <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp 1.000.000</span>
            <Button classname="bg-blue-600">Add to cart</Button>
          </div>
         );
       };

       CardProduct.Header = Header;
       CardProduct.Body = Body;
       CardProduct.Footer = Footer;

       export default CardProduct;
  ```

  <br>

## Rendering Lists

- Digunakan untuk mensederhanakan kode ketika ingin menampilkan sesuatu contohnya seperti sebuah produk
- Buat sebuah variabel yang berisi array of object
  ```
     const products = [
       {
         id: 1,
         name: "G-5501",
         price: "Rp 1.200.000",
         image: "/images/shoes-1.jpg",
         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
         sapiente!`,
       },
       {
         id: 2,
         name: "G-5502",
         price: "Rp 2.200.000",
         image: "/images/shoes-1.jpg",
         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur vitae, ducimus sequi est deleniti accusantium perspiciatis laboriosam voluptates modi earum ea architecto rem neque similique reprehenderit non, possimus
         sapiente!`,
        },
       ];
  ```
- Lalu memanggilnya dengan map

  ```
      const ProductsPage = () => {
        return (
          // Using Nested Components
          <div className="flex justify-center py-5">
            {products.map((product) => (
              <CardProduct>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} />
              </CardProduct>
            ))}
           </div>
         );
       };
       export default ProductsPage;

  ```

- Jika menggunkanan list, harus ada key agar tidak timbur error di console
- ```
     {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
  ```

  <br>

  ## Event Handler

  - Dalam react, event handler adalah sebuah fungsi yang digunakan untuk mengatur dan merespon event - event yang terjadi karena interaksi user atau aksi lain dalam aplikasi react
  - Contoh event handler seperti : button clicks, form submission, mouse movements, keyboard inputs so on
  - Event handler sangat essensial dalam membangun UI yang interaktif dan dinamis
  - Ketika suatu event terjadi, react memanggil fungsi event handler terkait, memungkinkan kita untuk melakukan aksi tertentu atau memperbarui state komponen sebagai response pada event tersebut
  - Event didefinisikan di dalam parent component, lalu dikirim sebagai props agar bisa digunakan pada child component
  - Contoh mengambil input data pada form login

    ```
         // Pada file index.jsx di dalam folder Button
            const Button = (props) => {
              const { children, classname = "bg-black", onClick = () => {}, type = "button" } = props;
              return (
                <div>
                  <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type={type} onClick={() => onClick()}>
                    {children}
                  </button>
                </div>
              );
             };

             export default Button;

         // Pada file FormLogin.jsx
            const FormLogin = () => {
              const handleLogin = (event) => {
                event.preventDefault();
                window.location.href="/products"
                console.log(event.target.email.value);
                console.log(event.target.password.value);
                console.log("login");
              };
              return (
                <form onSubmit={handleLogin}>
                  <InputForm label="Email" type="email" name="email" id="email" placeholder="example@gmail.com" />
                    <InputForm label="Password" type="password" name="password" id="password" placeholder="******" />
                    <Button classname="bg-blue-600 w-full" type="submit">
                     Login
                    </Button>
                </form>
              );
            };

            export default FormLogin;
    ```

- Gunakan .preventDefault() untuk mencegah website melakukan default action
- Gunakan window.href.location("/halamanYangDituju") untuk mengarahkan setelah event selesai
- **Pastikan hanya ada 1 parent dalam satu file komponen**
- **Parent harus diwrap menggunakan ```empty tag <></> atau <fragment> </fragment>```**

