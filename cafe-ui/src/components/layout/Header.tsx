import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';
import { useAtomValue } from 'jotai';
import { cartCountAtom } from '../../store';

export default function Header() {
  const location = useLocation();
  const isTransparent = location.pathname === '/';
  const cartCount = useAtomValue(cartCountAtom);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 px-6 py-4 flex items-center justify-between',
        isTransparent ? 'bg-transparent' : 'bg-background/80 backdrop-blur-md border-b border-surface-raised'
      )}
    >
      <Link to="/" className="font-display font-bold text-xl tracking-wide flex items-center gap-2">
        <Coffee className="text-primary w-7 h-7" strokeWidth={2.5} /> ANTIGRABOTY
      </Link>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-text-primary hover:text-primary transition-colors">
          <Search size={22} />
        </button>
        <Link to="/cart" className="relative p-2 text-text-primary hover:text-primary transition-colors">
          <ShoppingBag size={22} />
          {cartCount > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-[10px] text-white flex items-center justify-center font-bold"
            >
              {cartCount}
            </motion.span>
          )}
        </Link>
        <button className="hidden sm:flex items-center gap-2 p-2 px-4 rounded-full bg-surface-raised hover:bg-surface transition-colors ml-2">
          <User size={18} />
          <span className="text-sm font-medium">Sign in</span>
        </button>
      </div>
    </motion.header>
  );
}
