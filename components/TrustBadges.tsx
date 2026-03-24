import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, label: 'Secure Payment' },
    { icon: Truck, label: 'Free Shipping' },
    { icon: RotateCcw, label: 'Easy Returns' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {badges.map((badge, index) => (
        <div key={index} className="bg-[#F5F5F5] p-4 rounded-xl flex flex-col items-center justify-center text-center">
          <badge.icon className="w-6 h-6 mb-2" />
          <span className="text-xs font-medium leading-tight">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
