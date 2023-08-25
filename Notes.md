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
       1. **Functional** Component (***Stateless** Component)
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
     - Gunakan self closing tag jika component tidak memiliki children, contoh : <Button />

### B. Props

    - Props / properties dalam react adalah mekanisme yang digunakan untuk mengirim data
    - Data dikirim dari komponen yang lebih tinggi ke komponen yang lebih rendah
    - Properti ini bersifat 'Read Only', artinya tidak dapat diubah oleh komponen yang menerimanya
    - Didefinisikan di komponen utama, seperti `${props.text}`
    - Digunakan seperti atribut <Button text="Login"/>
    - Terdapat special props {props.children}
    - Bisa menggunakan konsep destructuring untuk memberikan nilai default pada sebuah elemen
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

* Semua folder atomic design berada di dalam folder components
