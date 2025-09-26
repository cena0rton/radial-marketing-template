"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {HowItWorksSection} from "./How";

const Features = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg pt-16 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="lg:text-4xl text-3xl tracking-tighter font-medium text-center mb-6 text-neutral-900">
          Everything you need to build{" "}
          <span className="bg-gradient-to-r from-acc via-gray-700 to-acc text-transparent bg-clip-text animate-shimmer">
            great products
          </span>{" "}
          as a team
        </h2>
        <p className="lg:text-lg text-base text-neutral-600 max-w-2xl mx-auto">
          Radial provides all the tools and features your team needs to plan,
          build, and ship exceptional products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 divide-x divide-neutral-200 ">
       <Cardleft />
       
       <TaskAutomationCard />
      </div>
      <CardBottom />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 divide-x divide-neutral-200">
        
       
        <Cardright />
       
        <AIAssistantCard />
      </div>
   
    </div>
  );
};

export default Features;

const liveIssues = [
  {
    id: 1,
    title: "Login page error",
    status: "Open",
    user: "alice",
    time: "Just now",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "UI glitch on dashboard",
    status: "In Progress",
    user: "bob",
    time: "1m ago",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "API latency spike",
    status: "Investigating",
    user: "carol",
    time: "3m ago",
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "Feature request: Export CSV",
    status: "Open",
    user: "dave",
    time: "5m ago",
    color: "bg-green-500",
  },
];

const Cardleft = () => {
  const [visibleIssues, setVisibleIssues] = useState(liveIssues);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIssues((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden border border-neutral-200 transition-all duration-300">
      <h1 className="text-2xl font-medium text-neutral-900 tracking-tight mb-3">
        Smart Issue Tracking
      </h1>
      <p className="text-neutral-600 text-sm mb-6 -mt-1"> Track your issues and bugs... </p>
      <div className="mt-16 rounded-lg bg-white/80 shadow-inner border border-neutral-200 overflow-hidden">
        <div className="flex items-center px-4 py-2 border-b border-neutral-100">
          <span className="font-medium text-neutral-700 text-base">
            Live Issues
          </span>
          <span className="ml-auto text-xs text-neutral-400">
            {visibleIssues.length} active
          </span>
        </div>
        <ul className="divide-y divide-neutral-100">
          {visibleIssues.slice(0, 3).map((issue, idx) => (
            <motion.li
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center px-4 py-3"
            >
              <span className={`w-3 h-3 rounded-full mr-3 ${issue.color}`} />
              <div className="flex-1">
                <div className="font-medium text-neutral-800 text-sm">
                  {issue.title}
                </div>
                <div className="text-xs text-neutral-500">
                  {issue.status} &middot; {issue.user} &middot; {issue.time}
                </div>
              </div>
              <span className="ml-2 px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 text-neutral-600">
                {issue.status}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const analyticsEvents = [
  {
    id: 1,
    title: "Code Fix Deployed",
    user: "alice",
    time: "2m ago",
    iconColor: "bg-green-500",
    description: "Critical bug fix pushed to production",
  },
  {
    id: 2,
    title: "Sprint Completed",
    user: "bob",
    time: "10m ago",
    iconColor: "bg-blue-500",
    description: "Sprint #24 closed with 98% tasks done",
  },
  {
    id: 3,
    title: "New Feature Released",
    user: "carol",
    time: "30m ago",
    iconColor: "bg-purple-500",
    description: "Dark mode feature is now live",
  },
  {
    id: 4,
    title: "Incident Resolved",
    user: "dave",
    time: "1h ago",
    iconColor: "bg-red-500",
    description: "API downtime resolved in 7 minutes",
  },
  {
    id: 5,
    title: "Pull Request Merged",
    user: "eve",
    time: "2h ago",
    iconColor: "bg-yellow-500",
    description: "Major refactor PR merged to main",
  },
];

const Cardright = () => {
  const loopedEvents = [...analyticsEvents, ...analyticsEvents];
  const cardHeight = 80; 
  const cardSpacing = 16; 
  const totalCards = loopedEvents.length;
  const totalHeight = totalCards * cardHeight + (totalCards - 1) * cardSpacing;

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden transition-all duration-300">
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 mb-3">
        Real-time Analytics
      </h1>
      <p className="text-neutral-600 text-sm mb-6 -mt-1"> See what's happening in your team... </p>
      <div className="relative h-56 mt-16 overflow-hidden mask-b-from-90% mask-t-from-90%">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-0, -totalHeight / 2] }}
          transition={{
            duration: analyticsEvents.length * 2,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col space-y-4 absolute top-0 left-0 w-full"
          style={{ willChange: "transform" }}
        >
          {loopedEvents.map((event, idx) => (
            <div
              key={event.id + "-" + idx}
              className="w-[90%] h-20 bg-white rounded-lg flex items-center justify-between mx-auto gap-4 p-4 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full w-3 h-3 ${event.iconColor}`}
                ></div>
                <div>
                  <span className="font-medium text-neutral-900">
                    {event.title}
                  </span>
                  <div className="text-xs text-neutral-500">
                    {event.description}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-neutral-700">
                  by {event.user}
                </span>
                <span className="text-xs text-neutral-400">{event.time}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CardBottom = () => {
  return (
    <div className="flex items-center justify-center h-100 mx-auto  border border-neutral-200 hover:shadow-sm shadow-acc/80 transition-all duration-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="text-center w-full p-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="block text-lg md:text-xl font-medium tracking-tight text-neutral-900"
        >
          "Radial helped me scale X faster than ever before. The real-time analytics <br/>and seamless collaboration features are <span className='text-acc'>game changers</span> for our team."
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-neutral-600 text-sm mt-2"
        >
          - Elon Musk, CEO of Tesla
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center mt-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Elon_Musk%2C_2018_%28cropped%29.jpg"
            alt="Elon Musk"
            className="w-20 h-20 rounded-full border-2 border-neutral-200 object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const chatMessages = [
  {
    id: 1,
    type: "user",
    message: "Hey, can you help me automate the bug triage process?",
    time: "2:34 PM",
    avatar: null
  },
  {
    id: 2,
    type: "assistant",
    message: "Absolutely! I can set up automated bug triage using AI to categorize issues by priority, assign them to the right team members, and even suggest fixes based on similar past issues.",
    time: "2:34 PM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
  },
  {
    id: 3,
    type: "user",
    message: "That sounds perfect! Can you also connect to our Slack and GitHub?",
    time: "2:35 PM",
    avatar: null
  },
  {
    id: 4,
    type: "assistant",
    message: "Yes! I can integrate with Slack for notifications and GitHub for automatic issue creation. Would you like me to set this up now?",
    time: "2:35 PM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
  }
];

const AIAssistantCard = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatMessages.length - 1) {
        setIsTyping(true);
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, 1500);
      } else {
        setTimeout(() => {
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden ">
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">
        AI Assistant
      </h1>
      <p className="text-neutral-600 text-sm mb-6"> Ask me to automate any task... </p>
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 h-80 flex flex-col mask-b-from-90% ">
        <div className="flex items-center px-4 py-3 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-acc rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <div className="font-medium text-neutral-900 text-sm">Radial AI</div>
              <div className="text-xs text-green-500 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollable mask-b-from-70% mask-t-from-70%">
          <AnimatePresence>
            {chatMessages.slice(0, currentMessageIndex + 1).map((msg, idx) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
              >
                {msg.type === 'assistant' && (
                  <img
                    src={msg.avatar || ""}
                    alt="AI Assistant"
                    className="w-6 h-6 rounded-full flex-shrink-0"
                  />
                )}
                <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-first' : ''}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm ${
                    msg.type === 'user' 
                      ? 'bg-acc text-white' 
                      : 'bg-neutral-100 text-neutral-900'
                  }`}>
                    {msg.message}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 px-1">
                    {msg.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start gap-2"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face"
                alt="AI Assistant"
                className="w-6 h-6 rounded-full"
              />
              <div className="bg-neutral-100 px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-4 border-t border-neutral-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me to automate any task..."
              className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-acc/20"
            />
            <button className="p-2 bg-acc text-white rounded-lg hover:bg-acc/90 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const automationTasks = [
  {
    id: 1,
    title: "Auto-assign bugs by priority",
    status: "Active",
    icon: (
      <svg className="w-6 h-6 text-acc" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Automatically categorizes and assigns bugs to team members",
    progress: 100
  },
  {
    id: 2,
    title: "GitHub integration",
    status: "Setting up",
    icon: (
      <svg className="w-6 h-6 text-acc" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    description: "Creates issues and PRs automatically",
    progress: 75
  },
  {
    id: 3,
    title: "Sprint planning",
    status: "Pending",
    icon: (
      <svg className="w-6 h-6 text-acc" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    description: "AI-powered sprint capacity planning",
    progress: 0
  }
];

const TaskAutomationCard = () => {
  const [activeTasks, setActiveTasks] = useState(automationTasks);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTasks(prev => {
        return prev.map(task => {
          if (task.status === "Setting up" && task.progress < 100) {
            return { ...task, progress: Math.min(task.progress + 5, 100) };
          }
          return task;
        });
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-50 p-8 relative overflow-hidden border border-neutral-200  transition-all duration-300">
      <h1 className="text-2xl font-medium tracking-tight text-neutral-900 mb-3">
        Task Automation
      </h1>
      <p className="text-neutral-600 text-sm mb-6 -mt-1"> Automate your tasks with AI... </p>
      <div className="mt-8 gap-4 h-52 grid grid-cols-3 divide-x relative divide-neutral-200">
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: "90%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute h-[2px] left-2 w-8 top-1/2 -translate-y-1/2 right- bg-linear-to-r from-neutral-200 to-acc animate-shimmer"></motion.div>
        
        {activeTasks.map((task) => (
          <>
          <div key={task.id} className="bg-white p-4 border z-10 relative text-base border-neutral-200 shadow-sm">
            {task.title}
            <div className="absolute z-0 h-full w-full inset-0 opacity-70 mask-radial-from-50% bg-[radial-gradient(circle_at_1px_1px,rgb(229_229_229)_1px,transparent_0)] bg-[length:10px_10px]" />
          </div>
          
           </>
           
        ))}
        
      </div>
      <p className="bg-linear-to-r from-acc via-neutral-100 to-acc text-transparent bg-clip-text animate-shimmer text-sm max-w-sm mt-4 text-left">Save Bussiness Minutes. Let AI Handle tasks so you can focus on up Scaling your Business.</p>
    </div>
  );
};
