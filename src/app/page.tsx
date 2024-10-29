// import Image from "next/image";
import { ArrowLeft, ChevronRight, Smartphone, Landmark, CreditCard } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white text-black flex flex-col">
        {/* Main Content */}
        <main className="flex-grow p-4">
          <div className="flex items-center mb-6">
            <ArrowLeft className="w-6 h-6 mr-4" />
            <h1 className="text-xl font-semibold">Top Up LRTJPay</h1>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">Top Up Methods</h2>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Smartphone className="w-6 h-6" />, title: 'JakOne Mobile', description: 'No administration fees via the JakOne Mobile Mobile App' },
              { icon: 'ATM', title: 'ATM Bank DKI', description: 'Top up Martipay from nearest Bank DKI ATM' },
              { icon: <Landmark className="w-6 h-6" />, title: 'Other Bank', description: 'Transfer anytime from your favourite Indonesia bank' },
              { icon: <CreditCard className="w-6 h-6" />, title: 'Debit Card', description: 'Top up online using your debit card' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 text-white">
                    {typeof item.icon === 'string' ? item.icon : item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
