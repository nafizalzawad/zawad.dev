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
      text: "Hi! I'm Nafiz's AI assistant. Ask me anything—I'll keep it concise and precise.",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.trim().toLowerCase();

    // Direct contact/link requests
    if (msg.includes('linkedin')) {
      return 'LinkedIn: https://www.linkedin.com/in/nafizalzawad';
    }
    if (msg.includes('github') || msg.includes('repo') || msg.includes('repository')) {
      return 'GitHub: https://github.com/nafizalzawad';
    }

    // Greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(msg)) {
      return "Hello! Ask me about Nafiz’s background, skills, projects, or experience.";
    }
    // Thanks
    if (msg.includes('thank')) {
      return "You're welcome! Anything else about Nafiz?";
    }

    // About Nafiz
    if (msg.match(/\b(who is nafiz|about nafiz|background)\b/)) {
      return "Nafiz Al Zawad is a 4th-year CSE student at UITS and part-time Sales & Marketing Specialist at Ontech ICT.";
    }

    // Current role/education
    if (msg.match(/\b(current role|what do you do|ontech ict|student at uits)\b/)) {
      return "Since Mar 2025, he's a Sales & Marketing Specialist at Ontech ICT; 7th semester at UITS starts July 2025.";
    }

    // Education details
    if (msg.match(/\b(education|university|uits|cse)\b/)) {
      return "Studying CSE at UITS (7th semester from July 2025). Completed projects: TrafficMind (Flask/MySQL) and a football club site.";
    }

    // Professional experience
    if (msg.match(/\b(experience|work history|jobs|doin tech|eightcap|oyolloo)\b/)) {
      if (msg.includes('doin')) {
        return "Doin Tech (Jan 2024–Dec 2024): managed 4,500+ clients, 2nd top performer, $20K sales in Q4 2024.";
      }
      if (msg.includes('eightcap')) {
        return "Eightcap (Feb 2025): organized Bangladesh’s first Forex Education webinar.";
      }
      if (msg.includes('oyolloo')) {
        return "Oyolloo (Mar 2025): brief trainee, left before onboarding.";
      }
      return "Worked at Doin Tech (Jan 2024–Dec 2024), Eightcap (Feb 2025), now Ontech ICT (since Mar 2025).";
    }

    // Technical skills
    if (msg.match(/\b(skills|technology|programming|tech stack)\b/)) {
      if (msg.includes('programming') || msg.includes('language')) {
        return "Languages: Python (Flask), PHP, HTML/CSS/JS; also blockchain smart contracts.";
      }
      if (msg.includes('database') || msg.includes('mysql')) {
        return "Database: MySQL—schema design, ER diagrams, optimization (used in TrafficMind).";
      }
      if (msg.includes('blockchain')) {
        return "Blockchain: built MediChain—a medical records DApp with smart contracts.";
      }
      return "Skills: Python, Flask, MySQL, PHP, JavaScript, HTML, CSS, Bootstrap, Socket.IO, blockchain.";
    }

    // Projects
    if (msg.match(/\b(projects|portfolio|trafficmind|medichain|football site)\b/)) {
      if (msg.includes('trafficmind')) {
        return "TrafficMind: Flask/MySQL vehicle management system with real-time updates via Socket.IO (see GitHub).";
      }
      if (msg.includes('medichain')) {
        return "MediChain: completed blockchain medical management system—code and docs on GitHub.";
      }
      if (msg.includes('football')) {
        return "Built a football club website in 2023 using vanilla HTML/CSS.";
      }
      return "Key projects: TrafficMind, MediChain, and a 2023 football club site.";
    }

    // Achievements/awards
    if (msg.match(/\b(achievements|awards|fifa|reading|top performer)\b/)) {
      if (msg.includes('fifa')) {
        return "FIFA Community Volunteer since 2022; invited to 2022 FIFA World Cup.";
      }
      if (msg.includes('reading') || msg.includes('bishwo')) {
        return "Won Bishwo Shahitto Kendro reading awards in 2015 and 2016.";
      }
      if (msg.match(/\b(top performer|sales)\b/)) {
        return "At Doin Tech, 2nd top performer; $20K in Q4 2024 sales.";
      }
      return "Achievements: FIFA volunteer, Bishwo Shahitto Kendro awards, and top performer at Doin Tech.";
    }

    // Location/personal
    if (msg.match(/\b(location|where|dhaka|bangladesh)\b/)) {
      return "Based in Dhaka, Bangladesh—walking distance to his office.";
    }

    // Interests/personal life
    if (msg.match(/\b(interests|hobbies|football|concert|kaavish)\b/)) {
      if (msg.includes('concert') || msg.includes('kaavish')) {
        return "Attended first concert—Kaavish at Dhaka Dreams on Jan 24, 2025; made a POV video 'From Couch to Crowd'.";
      }
      if (msg.includes('football')) {
        return "Passionate about football—writes articles and built a club website.";
      }
      return "Interests: football, blockchain, forex, reading, web development, and live music.";
    }

    // Soft skills
    if (msg.match(/\b(soft skills|communication|leadership|management|problem-solving)\b/)) {
      return "Soft skills: communication, time management, leadership, problem-solving, and adaptability.";
    }

    // Learning style
    if (msg.match(/\b(learning style|how do you learn|education style)\b/)) {
      return "Prefers concise, structured explanations with examples, step-by-step guides, and real-world analogies.";
    }

    // Current timeline
    if (msg.match(/\b(current projects|timeline|2025|july 2025)\b/)) {
      return "MediChain is complete. Working at Ontech ICT; 7th semester at UITS begins July 2025.";
    }

    // Catch-all: if no recognized keyword
    return "I’m not sure, but you can check LinkedIn or GitHub for more info:\n" +
           "LinkedIn: https://www.linkedin.com/in/nafizalzawad\n" +
           "GitHub: https://github.com/nafizalzawad";
  };

  const handleSendMessage = () => {
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

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 400 + Math.random() * 400);
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
              <p className="text-xs opacity-90">Concise, precise answers about Nafiz.</p>
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
