export default function Pricing() {
  const plans = [
    { name: 'Basic', price: 'GHS 50', desc: 'Track your daily orders in one place.' },
    { name: 'Pro', price: 'GHS 120', desc: 'All Basic features + monthly sales reports.' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-[#D4A24C] mb-4">{plan.price}/mo</p>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              <button className="w-full bg-[#0F1410] text-white py-2 rounded font-medium hover:bg-black">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
