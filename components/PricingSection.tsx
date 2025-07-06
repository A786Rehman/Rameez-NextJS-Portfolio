"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PricingSection() {
  const featuresList = [
    { text: "Responsive Design", plans: ["Basic", "Standard", "Premium"] },
    { text: "Basic SEO", plans: ["Basic", "Standard", "Premium"] },
    { text: "3 Pages Website", plans: ["Basic", "Standard", "Premium"] },
    { text: "SEO Optimization", plans: ["Standard", "Premium"] },
    { text: "5 Pages Website", plans: ["Standard", "Premium"] },
    { text: "Contact Form", plans: ["Standard", "Premium"] },
    { text: "Everything in Standard", plans: ["Premium"] },
    { text: "E-commerce Setup", plans: ["Premium"] },
    { text: "10 Pages Website", plans: ["Premium"] },
    { text: "Custom Design", plans: ["Premium"] },
    { text: "24/7 Support", plans: ["Premium"] },
  ];

  const pricingPlans = [
    { name: "Basic", price: "$15", popular: false },
    { name: "Standard", price: "$50", popular: true },
    { name: "Premium", price: "$80", popular: false },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Best Pricing For Your Projects</h2>
        <p className="mb-12 text-gray-300 max-w-xl mx-auto">
          Choose a plan that suits your needs and budget. No hidden fees, just clear pricing.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map(({ name, price, popular }, index) => (
            <div
              key={name}
              data-aos="fade-up"
              data-aos-delay={index * 200} // 0ms, 200ms, 400ms
              className={`rounded-xl p-8 shadow-lg transform transition-transform duration-300 cursor-pointer flex flex-col
                ${
                  popular
                    ? "bg-blue-600 scale-105 shadow-blue-500/50 hover:scale-110 hover:shadow-2xl hover:shadow-blue-700/70"
                    : "bg-gray-800 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/70"
                }
              `}
              style={{ minHeight: "520px", width: "100%" }}
            >
              {popular && (
                <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{name}</h3>
              <p className="text-5xl font-extrabold mb-6">{price}</p>

              <ul className="mb-8 text-left space-y-2 flex-grow">
                {featuresList.map(({ text, plans }) => {
                  const included = plans.includes(name);
                  return (
                    <li key={text} className="flex items-center">
                      <span
                        className={`mr-2 font-bold ${
                          included ? "text-green-400" : "text-red-500"
                        }`}
                      >
                        {included ? "✔" : "✘"}
                      </span>
                      {text}
                    </li>
                  );
                })}
              </ul>

              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-200 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
