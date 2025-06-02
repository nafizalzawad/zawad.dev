import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Zawad's AI assistant. Ask me anything about his background, skills, or projects.",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new message arrives
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // About section
    if (msg.includes('about') || msg.includes('background') || msg.includes('who is nafiz') || msg.includes('who is zawad')) {
      return "Nafiz Al Zawad is a 4th-year CSE student at UITS, currently a part-time Sales & Marketing Specialist at Ontech ICT.";
    }

    // Current role or education
    if (msg.includes('current') || msg.includes('role') || msg.includes('ontech') || msg.includes('student')) {
      return "He's a Sales & Marketing Specialist at Ontech ICT since March 2025, and will begin 7th semester at UITS in July 2025.";
    }

    // Education details
    if (msg.includes('education') || msg.includes('university') || msg.includes('uits') || msg.includes('cse')) {
      return "Nafiz studies CSE at UITS (7th semester from July 2025). He completed projects like TrafficMind (Flask/MySQL) and a football club website.";
    }

    // Professional experience
    if (msg.includes('experience') || msg.includes('work') || msg.includes('job') || msg.includes('doin') || msg.includes('eightcap')) {
      if (msg.includes('doin')) {
        return "At Doin Tech (Jan 2024–Dec 2024), he managed 4,500+ clients for fintech products and was 2nd top performer.";
      }
      if (msg.includes('eightcap')) {
        return "At Eightcap (Feb 2025), he organized Bangladesh’s first Forex Education webinar.";
      }
      if (msg.includes('oyolloo')) {
        return "He briefly trained at Oyolloo in March 2025 but left before onboarding.";
      }
      return "He worked at Doin Tech (Jan 2024–Dec 2024), Eightcap (Feb 2025), and now at Ontech ICT (since Mar 2025).";
    }

    // Technical skills
    if (msg.includes('skills') || msg.includes('technology') || msg.includes('programming')) {
      if (msg.includes('programming') || msg.includes('language')) {
        return "He codes in Python (Flask), PHP, HTML/CSS/JS, and develops blockchain smart contracts.";
      }
      if (msg.includes('database') || msg.includes('mysql')) {
        return "He uses MySQL for schema design and optimization, as seen in TrafficMind.";
      }
      if (msg.includes('blockchain')) {
        return "He built MediChain, a blockchain-based medical records system with smart contracts.";
      }
      return "Skills: Python, Flask, MySQL, PHP, JavaScript, HTML, CSS, Bootstrap, Socket.IO, and blockchain.";
    }

    // Projects section
    if (msg.includes('projects') || msg.includes('portfolio') || msg.includes('trafficmind') || msg.includes('medichain')) {
      if (msg.includes('trafficmind')) {
        return "TrafficMind is a Flask/MySQL vehicle management system with real-time updates via Socket.IO (see GitHub).";
      }
      if (msg.includes('medichain')) {
        return "MediChain is a completed blockchain medical management system; code and docs are on GitHub.";
      }
      if (msg.includes('football')) {
        return "He built a football club website in 2023 using vanilla HTML and CSS.";
      }
      return "Key projects: TrafficMind (Flask/MySQL), MediChain (blockchain), and a football club website (HTML/CSS).";
    }

    // Achievements and awards
    if (msg.includes('achievements') || msg.includes('awards') || msg.includes('fifa') || msg.includes('reading')) {
      if (msg.includes('fifa')) {
        return "He's a FIFA Community Volunteer since 2022 and was invited to the 2022 FIFA World Cup.";
      }
      if (msg.includes('reading') || msg.includes('bishwo')) {
        return "He won Bishwo Shahitto Kendro reading awards in 2015 and 2016.";
      }
      if (msg.includes('top') || msg.includes('performer')) {
        return "At Doin Tech, he was the 2nd top performer in customer service with $20K sales in Q4 2024.";
      }
      return "Achievements: FIFA volunteer since 2022, Bishwo Shahitto Kendro reading awards (2015–2016), and top performer at Doin Tech.";
    }

    // Location and personal details
    if (msg.includes('location') || msg.includes('dhaka') || msg.includes('bangladesh') || msg.includes('where')) {
      return "He lives in Dhaka, Bangladesh, within walking distance of his office.";
    }

    // Interests and personal life
    if (msg.includes('interests') || msg.includes('hobbies') || msg.includes('football') || msg.includes('concert') || msg.includes('kaavish')) {
      if (msg.includes('concert') || msg.includes('kaavish')) {
        return "He attended his first concert, Kaavish at Dhaka Dreams on Jan 24, 2025, and made a POV video 'From Couch to Crowd'.";
      }
      if (msg.includes('football')) {
        return "He loves football journalism and built a club website.";
      }
      return "Interests: football, blockchain, forex, reading, web development, and live music.";
    }

    // Contact and online presence
    if (msg.includes('contact') || msg.includes('portfolio') || msg.includes('github') || msg.includes('linkedin') || msg.includes('website')) {
      return "Portfolio: zawad-dev.vercel.app | GitHub: github.com/nafizalzawad | LinkedIn: linkedin.com/in/nafizalzawad";
    }

    // Soft skills and work style
    if (msg.includes('soft skills') || msg.includes('communication') || msg.includes('leadership') || msg.includes('management')) {
      return "Soft skills: communication, time management, leadership, problem-solving, and adaptability.";
    }

    // Learning style and preferences
    if (msg.includes('learning') || msg.includes('style') || msg.includes('communication style')) {
      return "He prefers concise, structured explanations with examples, step-by-step guides, and real-world analogies.";
    }

    // Current projects and timeline
    if (msg.includes('current projects') || msg.includes('timeline') || msg.includes('2025') || msg.includes('july')) {
      return "MediChain is completed. He's working at Ontech ICT and will start 7th semester at UITS in July 2025.";
    }

    // Greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good')) {
      return "Hello! Ask me about Zawad’s background, skills, projects, or experience.";
    }

    // Thanks
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Let me know if you need more info about Zawad.";
    }

    // Default response
    return "I have concise info on Zawad’s role, experience, projects, education, skills, and achievements. What would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 500 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300",
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          "animate-pulse-glow",
          isOpen && "rotate-180"
        )}
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">AI Assistant</h3>
              <p className="text-xs opacity-90">Ask me anything about Zawad!</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 animate-fade-in",
                  message.isBot ? "justify-start" : "justify-end"
                )}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[70%] p-3 rounded-lg text-sm",
                    message.isBot
                      ? "bg-muted text-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {message.text}
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 animate-fade-in">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Nafiz..."
                className="flex-1 px-3 py-2 text-sm bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                size="icon"
                className="w-10 h-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
