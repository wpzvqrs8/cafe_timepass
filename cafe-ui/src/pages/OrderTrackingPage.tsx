import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { MapPin, Coffee, CheckCircle, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OrderTrackingPage() {
  const { id } = useParams();
  const [timeLeft, setTimeLeft] = useState(24 * 60 + 12); // 24m 12s in seconds
  const [step, setStep] = useState(1);

  // Fake countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fake step progression
  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 5000); // 5 sec -> preparing
    const t2 = setTimeout(() => setStep(3), 15000); // 15 sec -> out for delivery
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  const steps = [
    { id: 1, name: 'Order Received', icon: CheckCircle, time: '2:12 PM' },
    { id: 2, name: 'Being Prepared', icon: Coffee, time: '2:14 PM' },
    { id: 3, name: 'Out for Delivery', icon: Package, time: 'Est. 2:25 PM' },
    { id: 4, name: 'Delivered', icon: MapPin, time: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary p-6 pt-24 max-w-2xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-mono text-xl tracking-widest text-text-muted">Order #{id}</h1>
        <Link to="/" className="text-primary hover:underline text-sm font-medium">Back to Home</Link>
      </div>

      <Card className="p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <h2 className="font-display text-4xl mb-2 text-center relative z-10">Arriving in</h2>
        <div className="font-mono text-6xl md:text-7xl font-bold text-center mb-10 tracking-tighter text-primary relative z-10 drop-shadow-sm">
          {mins}:{secs.toString().padStart(2, '0')}
        </div>

        <div className="space-y-8 relative z-10">
          {steps.map((s, idx) => {
            const isActive = step === s.id;
            const isPast = step > s.id;
            
            const Icon = s.icon;

            return (
              <div key={s.id} className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <motion.div 
                    initial={false}
                    animate={{ 
                      backgroundColor: isPast ? 'var(--color-primary)' : isActive ? 'var(--color-primary)' : 'var(--color-surface-raised)',
                      borderColor: isActive ? 'var(--color-accent)' : 'transparent',
                      scale: isActive ? 1.2 : 1
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${isActive ? 'shadow-[0_0_15px_rgba(200,118,58,0.5)] text-background' : isPast ? 'text-background' : 'text-text-muted'}`}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </motion.div>
                  {idx !== steps.length - 1 && (
                    <div className={`w-0.5 h-12 mt-2 rounded-full ${isPast ? 'bg-primary/50' : 'bg-surface-raised'}`}></div>
                  )}
                </div>
                
                <div className="pt-2 flex-1">
                  <h3 className={`text-lg font-medium ${(isActive || isPast) ? 'text-text-primary' : 'text-text-muted'}`}>
                    {s.name}
                  </h3>
                  <p className="text-sm font-mono text-text-muted opacity-80 mt-1">{s.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
      
      <div className="bg-surface-raised/50 border border-surface-raised rounded-2xl p-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-surface rounded-full flex flex-shrink-0"></div>
        <div>
          <h4 className="font-semibold text-lg">Rohan D.</h4>
          <p className="text-text-muted text-sm">Your delivery partner • ⭐ 4.9</p>
        </div>
      </div>
    </div>
  );
}
