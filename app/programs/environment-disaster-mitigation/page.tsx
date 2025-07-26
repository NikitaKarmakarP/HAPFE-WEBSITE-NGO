import Image from "next/image";
import { CloudRain, Leaf, Shield, Quote } from "lucide-react";

export default function EnvironmentDisasterMitigationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-[28rem] overflow-hidden animate-fade-in">
        <Image
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
          alt="Environment & Disaster Mitigation"
          fill
          className="object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-400/30 flex items-center justify-center rounded-b-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-fade-in-up">Environment & Disaster Mitigation</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up">
          We build resilience and promote sustainable environmental practices to mitigate disaster risks. Our programs focus on climate adaptation, natural resource management, and community preparedness for a safer, greener future.
        </p>
        <div className="flex items-center my-12">
          <div className="flex-grow border-t border-blue-200"></div>
          <span className="mx-4 text-blue-400 font-bold">Key Focus Areas</span>
          <div className="flex-grow border-t border-blue-200"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-xl shadow p-6 text-center group transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <CloudRain className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Climate Adaptation</h3>
            <p className="text-gray-600 text-sm">Helping communities adapt to changing weather patterns and reduce vulnerability.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center group transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
              <Leaf className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Eco-Friendly Practices</h3>
            <p className="text-gray-600 text-sm">Promoting conservation, afforestation, and sustainable resource use.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center group transition-transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
              <Shield className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Disaster Preparedness</h3>
            <p className="text-gray-600 text-sm">Training and equipping communities to respond effectively to natural disasters.</p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="flex items-center my-12">
          <div className="flex-grow border-t border-blue-200"></div>
          <span className="mx-4 text-blue-400 font-bold">Success Story</span>
          <div className="flex-grow border-t border-blue-200"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 animate-fade-in-up">
          <Image
            src="/placeholder-user.jpg"
            alt="Community Member"
            width={96}
            height={96}
            className="rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Quote className="h-6 w-6 text-blue-400" />
              <span className="font-semibold text-blue-700">Sunita Devi, Farmer</span>
            </div>
            <p className="text-gray-700 italic">
              "Disaster preparedness training helped us save lives and protect our crops during the last flood. We feel safer and more confident now."
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex items-center my-12">
          <div className="flex-grow border-t border-blue-200"></div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl p-8 text-center shadow-xl animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Support Safer, Greener Communities</h2>
          <p className="text-lg text-white mb-6">Your help can build resilience and protect more families. Join us or donate today!</p>
          <a href="/donate" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">Donate Now</a>
        </div>
      </div>
    </div>
  );
} 