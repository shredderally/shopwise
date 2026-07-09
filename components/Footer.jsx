import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F1410] text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-white text-lg font-bold tracking-wider">SHOPWISE</h2>
          <p className="text-sm">Helping businesses manage their orders.</p>
        </div>

        <div className="flex gap-8 text-sm">
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          <Link href="/help" className="hover:text-white transition">Help</Link>
        </div>

        <div className="text-xs text-gray-600 text-center md:text-right">
          <p>&copy; 2026 ShopWise by Northbound Holdings.</p>
          <div className="flex gap-4 justify-center md:justify-end mt-1">
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
