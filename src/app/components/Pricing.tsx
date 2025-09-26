"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams and individuals",
    price: 9,
    period: "/per seat",
    className: null,
    features: [
      "Up to 3 users",
      "Unlimited projects",
      "Basic issue tracking",
      "Community support",
    ],
    button: {
      label: "Get Started",
      style: "bg-neutral-800 text-white hover:bg-neutral-700",
    },
  },
  {
    name: "Pro",
    description: "For fast growing teams",
    price: 12,
    period: "/per seat",
    className: null,
    features: [
      "Everything in Free",
      "Unlimited users",
      "Advanced project management",
      "Priority email support",
      "Integrations & API access",
    ],
    button: {
      label: "Start Pro",
      style: "bg-acc text-white hover:bg-acc/80",
    },
  },
  {
    name: "Enterprise",
    description: "For large organizations and teams",
    price: 250,
    className: "font-medium text-3xl tracking-tight",
    period: "/per seat",
    features: [
      "Everything in Pro",
      "Custom onboarding",
      "Dedicated account manager",
      "SAML/SSO & advanced security",
      "24/7 premium support",
      "Dedicated account manager",
      "SAML/SSO & advanced security",
      "24/7 premium support",
    ],
    button: {
      label: "Contact Sales",
      style: "bg-neutral-800 text-white hover:bg-neutral-700 ",
    },
  },
];

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  const [hovered, setHovered] = useState<number | null>(1);

  return (
    <div>
      <div className="text-center my-16">
        <h2 className="lg:text-4xl text-3xl tracking-tighter font-medium text-center mb-6 text-neutral-900">
          Find the{" "}
          <span className="bg-linear-to-r from-acc via-gray-700  to-acc text-transparent bg-clip-text animate-shimmer">
            right plan
          </span>{" "}
          for your team
        </h2>
        <p className="lg:text-lg text-base text-neutral-600 max-w-2xl mx-auto">
          Simple, transparent pricing for every team
        </p>
        <div className="flex items-center border-1 border-acc/20 justify-center gap-4 px-4 py-2 rounded-lg mx-auto w-fit mt-8 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.02)_0,rgba(0,0,0,0.1)_0.5px,transparent_0.5px,transparent_2px)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
          <button
            onClick={() => {
              setMonthly(true);
              setHovered(1);
            }}
            className={`relative px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
              monthly
                ? "text-acc border border-acc"
                : "text-neutral-600 border border-transparent"
            }`}
            
            type="button"
          >
            {hovered === 1 && (
              <motion.span
                layoutId="hovered-span"
                initial={{ opacity: 0.95 }}
                animate={{ opacity: 0.95 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 z-0 rounded-lg bg-blue-100"
                style={{ pointerEvents: "none" }}
              />
            )}
            <span className="relative z-10">Monthly</span>
          </button>
          <button
            onClick={() => {
              setMonthly(false);
              setHovered(2);
            }}
            className={`relative px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
              !monthly
                ? "text-acc border border-acc"
                : "text-neutral-600 border border-transparent"
            }`}
           
            type="button"
          >
            {hovered === 2 && (
              <motion.span
                layoutId="hovered-span"
                initial={{ opacity: 0.95 }}
                animate={{ opacity: 0.95 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 z-0 rounded-lg bg-blue-100"
                style={{ pointerEvents: "none" }}
              />
            )}
            <span className="relative z-10">Yearly (Save 20%)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y lg:grid-cols-3 md:grid-cols-2 lg:divide-x divide-neutral-200 gap-2 border-t border-neutral-200">
        {pricingPlans.map((plan, idx) => (
          <div
            key={plan.name}
            className="bg-white p-8 flex flex-col items-start relative overflow-hidden"
          >
            {/* Repeating circle pattern background */}
            <div className="absolute inset-0 opacity-70 mask-radial-from-50% bg-[radial-gradient(circle_at_1px_1px,rgb(229_229_229)_1px,transparent_0)] bg-[length:10px_10px]" />
            <div className="relative z-10">
              <h2 className="text-2xl font-medium mb-2 text-neutral-900">
                {plan.name}
              </h2>
              <p className="text-sm text-neutral-500 mb-4">
                {plan.description}
              </p>
              <div className="flex items-end mb-6 divide-y divide-acc/20 ">
                <span className="text-4xl font-bold text-neutral-900">
                  ${monthly
                    ? plan.price
                    : Math.floor(plan.price * 12 * 0.8)}
                </span>
                {plan.period && (
                  <span className="ml-2 text-neutral-500 text-base">
                    {plan.period}
                  </span>
                )}
              </div>
              <div className="flex items-start justify-end mx-auto border-b border-neutral-200 mb-10">
                <button
                  className={`flex-1 px-6 py-2 mb-8 mx-auto rounded-lg font-medium transition-colors duration-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] ${plan.button.style}`}
                  type="button"
                >
                  {plan.button.label}
                </button>
              </div>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-neutral-700 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-acc mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;