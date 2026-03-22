import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2000" 
            alt="Coffee brewing" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl md:text-7xl mb-6 max-w-2xl leading-tight"
          >
            Every sip, <br/> crafted for you.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-text-muted text-lg md:text-xl mb-10"
          >
            Artisanal coffee & comfort food · 25–40 min delivery
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/menu" className="bg-primary hover:bg-primary-warm text-background font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-lg flex items-center justify-center">
              Order Now →
            </Link>
            <Link to="/menu" className="bg-surface/50 backdrop-blur-md border border-text-muted/30 hover:bg-surface text-text-primary font-medium px-8 py-4 rounded-full transition-colors duration-300 text-lg flex items-center justify-center">
              View Menu
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 text-center z-10 hidden md:block">
          <p className="text-sm font-mono text-text-muted tracking-widest uppercase">
            ★ 4.8 rating   •   1,200+ orders this month   •   Free delivery over ₹399
          </p>
        </div>
      </section>

      {/* Why Antigraboty Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-7 bg-surface-raised rounded-3xl overflow-hidden relative group cursor-pointer h-80 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent p-10 flex flex-col justify-end">
              <h3 className="font-display text-3xl mb-2">Obsessed with quality</h3>
              <p className="text-text-muted">Locally roasted beans, carefully selected origins.</p>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6 h-full">
            <div className="flex-1 bg-surface-raised rounded-3xl p-8 relative overflow-hidden group cursor-pointer">
              <img 
                src="https://picsum.photos/id/63/800/600" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="font-display text-2xl mb-2 text-white">25 min delivery</h3>
                <p className="text-text-muted text-sm text-gray-300">Hot coffee stays hot.</p>
              </div>
            </div>
            <div className="flex-1 bg-primary text-background rounded-3xl p-8 relative overflow-hidden group cursor-pointer">
              <img 
                src="https://picsum.photos/id/252/800/600" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay"
              />
              <div className="relative z-10 flex flex-col justify-end h-full transition-transform hover:scale-[1.02]">
                <h3 className="font-display text-2xl mb-2 text-white drop-shadow-md">Made fresh, always.</h3>
                <p className="text-sm font-medium text-white/90 drop-shadow-sm">Pastries baked this morning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
