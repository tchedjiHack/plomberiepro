// // app/components/ThemeToggle.tsx
// 'use client';

// import { Sun, Moon } from 'lucide-react';
// export default function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
//       aria-label="Changer le thème"
//     >
//       {theme === 'light' ? (
//         <Moon className="w-5 h-5" />
//       ) : (
//         <Sun className="w-5 h-5" />
//       )}
//     </button>
//   );
// }