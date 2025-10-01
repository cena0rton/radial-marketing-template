"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Radial and how does it work?",
      answer: "Radial is an AI-powered project management platform that helps teams streamline their workflows through intelligent automation, real-time collaboration, and seamless integrations with your favorite tools like GitHub, Slack, and Jira."
    },
    {
      question: "How does the AI automation feature work?",
      answer: "Our AI learns from your team's patterns and automatically assigns tasks, categorizes bugs, suggests fixes, and optimizes workflows. It integrates with your existing tools to create a unified, intelligent workspace."
    },
    {
      question: "Can I integrate Radial with my existing tools?",
      answer: "Yes! Radial offers 50+ integrations including GitHub, Slack, Jira, Notion, and many more. Our one-click setup makes it easy to connect all your tools and sync data in real-time."
    },
    {
      question: "Is my data secure with Radial?",
      answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored securely and never shared with third parties."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via chat, email, and phone. Our team of experts is always ready to help you get the most out of Radial, from setup to advanced customization."
    },
    {
      question: "Can I try Radial before purchasing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also book a personalized demo with our team to see Radial in action."
    },
    {
      question: "How does pricing work for larger teams?",
      answer: "Our pricing scales with your team size. We offer flexible plans for teams of all sizes, with volume discounts for larger organizations. Contact our sales team for custom enterprise pricing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about Radial. Can&apos;t find the answer you&apos;re looking for? 
            <br />
            Please chat with our friendly team.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-neutral-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:text-acc transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <motion.svg
                  className="w-5 h-5 text-neutral-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-acc/10 to-blue-500/10 rounded-xl p-8 border border-acc/20">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our support team is here to help you get the most out of Radial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-acc text-white rounded-lg font-medium hover:bg-acc/90 transition-colors duration-200 shadow-sm">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;