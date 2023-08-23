# ReactJs

## Apa itu React JS ?

- React JS adalah sebuah library untuk membuat UI (User Interface) / antar muka sebuah aplikasi. <br>
- React diciptakan oleh Jordan Walke
- React digunakan untuk membangun komponen yang reusable, dengan menggunakan fungsi javascript yang mengembalikan nilai berupa HTML yang ditulis dalam sebuah syntax spesial bernama JSX

## Kenapa React ?

- React populer karena ekosistem pendukungnya
- Di bawah ini Link ekosistem react :
  - github.com/enaqx/awesome-react
  - ifelse.io/2018/07/04/a-guide-to-the-react-ecosystem/

## Kenapa React disebut _Library_ bukan _Framework_

- Karena ada banyak pilihan untuk melakukan sesuatu dan kita harus memilih tools (package) dan membuat design system yang tepat untuk project

## Instalasi React

1. npx create-react-app folderName
   - Cara ini instalasi ini sudah usang
   - Kurang bagus dari segi performance <br>
2. Install menggunakan framework :
   - Next Js
   - Gatsby Js
   - Remix Js <br>
3. Install menggunakan Vite Js
   1. npm create vite@latest my-react-app -- --template react
   2. cd my-react-app/
   3. npm install <br>
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
