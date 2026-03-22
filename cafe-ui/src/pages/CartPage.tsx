import { useAtomValue, useSetAtom } from 'jotai';
import { cartAtom, cartTotalAtom } from '../store';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const cartItems = useAtomValue(cartAtom);
  const setCart = useSetAtom(cartAtom);
  const total = useAtomValue(cartTotalAtom);
  const navigate = useNavigate();

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: Math.max(0, newQty) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemove = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-surface-raised rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl text-text-muted">🛒</span>
        </div>
        <h2 className="font-display text-3xl mb-4">Your cart is empty</h2>
        <p className="text-text-muted mb-8 max-w-sm">
          Looks like you haven't added any artisanal coffees or pastries yet.
        </p>
        <Button onClick={() => navigate('/menu')}>Explore Menu</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary p-6 pt-24 max-w-5xl mx-auto w-full">
      <h1 className="font-display text-4xl mb-8">Review Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7 space-y-4">
          <AnimatePresence>
            {cartItems.map(item => (
              <motion.div
                key={item.cartItemId}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="flex items-center p-4 gap-4" hoverEffect={false}>
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-mono text-text-muted text-sm mt-1">₹{item.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="text-text-muted hover:text-error transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                    
                    <div className="flex items-center bg-background rounded-full border border-surface-raised overflow-hidden">
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-surface-raised transition-colors text-text-muted"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-mono font-medium text-sm">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-surface-raised transition-colors text-text-muted"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="md:col-span-5 relative">
          <div className="sticky top-28">
            <Card className="p-6 bg-surface-raised/50 border-transparent">
              <h3 className="font-display text-2xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 font-mono text-sm mb-6 border-b border-surface-raised pb-6">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Delivery Fee</span>
                  <span>₹40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Taxes & Fees (5%)</span>
                  <span>₹{Math.round(total * 0.05)}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8 font-mono text-lg font-bold">
                <span>Total</span>
                <span>₹{total + 40 + Math.round(total * 0.05)}</span>
              </div>

              <Button 
                variant="primary" 
                className="w-full flex justify-between uppercase tracking-widest text-sm"
                onClick={() => navigate('/checkout')}
              >
                <span>Checkout</span>
                <ArrowRight size={18} />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
