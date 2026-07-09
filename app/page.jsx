import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section Placeholder */}
      <section className="flex-grow flex items-center justify-center py-20 text-center px-6">
        <div>
          <h1 className="text-5xl font-bold text-[#0F1410] mb-4">Manage Your Orders with Ease</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            The complete digital ledger for modern traders in West Africa. 
            Stop losing money on missed WhatsApp orders.
          </p>
        </div>
      </section>

      {/* Components we built */}
      <Pricing />
      <Footer />
    </main>
  );
}

