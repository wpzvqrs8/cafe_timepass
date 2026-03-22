import { useState } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { cartTotalAtom, cartAtom } from '../store';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Check, ShieldCheck, MapPin, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CheckoutPage() {
  const total = useAtomValue(cartTotalAtom);
  const setCart = useSetAtom(cartAtom);
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const finalTotal = total + 40 + Math.round(total * 0.05);

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate payment process
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      // Clear cart
      setCart([]);
      setTimeout(() => {
        // Redir to random order ID
        const fakeOrderId = 'AG-' + Math.floor(1000 + Math.random() * 9000);
        navigate(`/order/${fakeOrderId}`);
      }, 2500);
    }, 2000);
  };

  if (total === 0 && !success && !isProcessing) {
    navigate('/cart');
    return null;
  }

  if (success) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-32 h-32 bg-success/20 text-success rounded-full flex items-center justify-center mb-8"
        >
          <Check size={64} strokeWidth={3} />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl mb-4"
        >
          Payment Successful
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-lg max-w-md"
        >
          Your order is confirmed! 🎉 We'll have it ready in 25 minutes. Redirecting you to tracking...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary p-6 pt-24 max-w-3xl mx-auto w-full">
      <h1 className="font-display text-4xl mb-8">Checkout</h1>
      
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 font-display text-xl mb-4">
            <MapPin className="text-primary" /> Delivery Address
          </div>
          <p className="text-text-muted font-mono mb-4 text-sm">
            John Doe<br/>
            123 Artisanal Crossroad, Suite 4B<br/>
            Mumbai, MH 400050
          </p>
          <button className="text-primary text-sm font-medium hover:underline">Change address</button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 font-display text-xl mb-4">
            <Clock className="text-primary" /> Delivery Time
          </div>
          <div className="flex gap-4">
            <div className="border-2 border-primary bg-primary/10 rounded-xl p-4 flex-1 cursor-pointer">
              <span className="block font-medium mb-1">ASAP</span>
              <span className="text-sm text-text-muted">25-30 min</span>
            </div>
            <div className="border border-surface-raised rounded-xl p-4 flex-1 cursor-pointer hover:border-text-muted transition-colors opacity-70">
              <span className="block font-medium mb-1">Schedule</span>
              <span className="text-sm text-text-muted">Choose time</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 font-display text-xl mb-6">
            <CreditCard className="text-primary" /> Payment Method
          </div>
          
          <div className="space-y-3">
            <div className="border-2 border-primary bg-primary/10 rounded-xl p-4 flex items-center justify-between cursor-pointer">
              <span className="font-medium">UPI (GPay, PhonePe)</span>
              <span className="w-5 h-5 rounded-full border-4 border-primary bg-background"></span>
            </div>
            <div className="border border-surface-raised rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-text-muted transition-colors">
              <span className="font-medium">Credit / Debit Card</span>
              <span className="w-5 h-5 rounded-full border-2 border-text-muted/50 bg-background"></span>
            </div>
          </div>
        </Card>

        <div className="pt-6">
          <div className="flex items-center gap-2 justify-center mb-6 text-sm text-text-muted">
            <ShieldCheck size={16} className="text-success" /> 
            <span>Secured by Razorpay • No hidden charges</span>
          </div>
          <Button 
            className="w-full h-16 text-lg tracking-widest flex items-center justify-center gap-3"
            onClick={handlePay}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                PROCESSING...
              </span>
            ) : (
              `PAY ₹${finalTotal}`
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
