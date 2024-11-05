/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        'older-mobile': { 'raw': '(max-device-width: 320px) and (device-aspect-ratio: 40/71)' }, // For older/smaller phones with specific aspect ratio
        'mobile': { 'max': '767px' },                       // Targets most smartphones and small devices
        'tablet': { 'min': '768px', 'max': '1023px' },      // Targets tablets and small laptops up to 1024px
        'large-tablet': { 'min': '1024px', 'max': '1279px' }, // Wider tablets and small laptops (overlaps lg)
        'desktop': { 'min': '1280px' },                     // Desktop screens and large devices from 1280px up
      },
      
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}