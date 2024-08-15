/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
          'llg' : '1440px',
          'dlg' : '1700px',
      },

      backgroundImage : {
        'homeBanner' : 'url("https://res.cloudinary.com/dqydgc2ky/video/upload/v1722576785/8333185-hd_1080_1080_30fps_aiir4n.mp4")',
        
        'FooterBg' : 'url("https://res.cloudinary.com/dqydgc2ky/image/upload/v1705329154/keegan-houser--Q_t4SCN8c4-unsplash_wjbmhg.jpg)'
      }
    },
  },
  plugins: [],
}