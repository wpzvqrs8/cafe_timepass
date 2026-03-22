import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuItems } from '../data';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSetAtom } from 'jotai';
import { cartAtom } from '../store';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const setCart = useSetAtom(cartAtom);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.categoryId === activeCategory);

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, cartItemId: Math.random().toString(), quantity: 1, customizations: {} }];
    });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary pt-24 pb-32">
      {/* Sticky Header / Category Chips */}
      <div className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-surface-raised py-4 px-6 overflow-x-auto no-scrollbar shadow-sm">
        <div className="flex items-center gap-3 min-w-max">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat.id ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <span className="relative z-10">{cat.name}</span>
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-surface border border-primary/30 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="p-6 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col hoverEffect">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {item.isNew && <Badge variant="primary">NEW</Badge>}
                      {item.isPopular && <Badge variant="success">POPULAR</Badge>}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
                      {item.isVeg !== undefined && (
                        <Badge variant={item.isVeg ? 'veg' : 'nonveg'} className="mt-1 whitespace-nowrap">
                          {item.isVeg ? 'VEG' : 'NON-VEG'}
                        </Badge>
                      )}
                    </div>
                    <p className="text-text-muted text-sm line-clamp-2 mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex flex-col">
                        <span className="font-mono font-bold text-lg">₹{item.price}</span>
                        {item.originalPrice && (
                          <span className="font-mono text-xs text-text-muted line-through">₹{item.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" onClick={() => addToCart(item)}>
                        + Add
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
