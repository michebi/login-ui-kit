import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          'background-primary-default': 'var(--core-colours-neutrals-white)',
          'background-secondary-default': 'var(--core-colours-neutrals-white)',
          'background-secondary-disabled': 'var(--core-colours-neutrals-050)',
          'background-secondary-hover': 'var(--core-colours-neutrals-050)',
          'border-brand': 'var(--core-colours-blue-500)',
          'border-default': 'var(--core-colours-neutrals-050)',
          'border-disabled': 'var(--core-colours-neutrals-100)',
          'border-focus': 'var(--core-colours-blue-200)',
          'border-hover': 'var(--core-colours-neutrals-100)',
          'border-negative': 'var(--core-colours-red-600)',
          'core-colours-blue-050': '#f0f9ff',
          'core-colours-blue-100': '#e0f2fe',
          'core-colours-blue-200': '#bae6fd',
          'core-colours-blue-300': '#7cd3fd',
          'core-colours-blue-400': '#37bef9',
          'core-colours-blue-500': '#0da6ea',
          'core-colours-blue-600': '#0185c8',
          'core-colours-blue-700': '#026aa2',
          'core-colours-blue-800': '#065986',
          'core-colours-blue-900': '#0c4a6e',
          'core-colours-blue-950': '#082f49',
          'core-colours-neutrals-050': '#e3e3e3',
          'core-colours-neutrals-100': '#d6d7d6',
          'core-colours-neutrals-200': '#bfc0bf',
          'core-colours-neutrals-300': '#9e9f9d',
          'core-colours-neutrals-400': '#767674',
          'core-colours-neutrals-500': '#5c5d5b',
          'core-colours-neutrals-600': '#4b4b49',
          'core-colours-neutrals-700': '#3e3d3d',
          'core-colours-neutrals-800': '#343332',
          'core-colours-neutrals-900': '#2c2b2b',
          'core-colours-neutrals-950': '#171717',
          'core-colours-neutrals-black': '#000000',
          'core-colours-neutrals-white': '#ffffff',
          'core-colours-red-050': '#fef2f2',
          'core-colours-red-100': '#fde3e4',
          'core-colours-red-200': '#fdcbcd',
          'core-colours-red-300': '#f99094',
          'core-colours-red-400': '#f57479',
          'core-colours-red-500': '#ec474d',
          'core-colours-red-600': '#d82a31',
          'core-colours-red-700': '#b61f25',
          'core-colours-red-800': '#961e23',
          'core-colours-red-900': '#7d1f23',
          'core-colours-red-950': '#440b0d',
          'font-brand': 'var(--core-colours-blue-500)',
          'font-disabled': 'var(--core-colours-neutrals-300)',
          'font-negative': 'var(--core-colours-red-600)',
          'font-placeholder': 'var(--core-colours-neutrals-200)',
          'font-primary': 'var(--core-colours-neutrals-950)',
          'font-secondary': 'var(--core-colours-neutrals-400)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

