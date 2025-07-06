import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby8g5KGV7DT_nZPBoL6lUxhJbSQ7ubYuuKHjFmVa3dZx_ybHXDH_XTeHjKeWTU_19To/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of tech enthusiasts receiving my weekly newsletter. Get exclusive insights on 
            coding projects, career advancement tips, and personal reflections from the trenches of software development.
          </p>

          <Card className="max-w-md mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Free Weekly Updates</CardTitle>
              <CardDescription>
                No spam, unsubscribe anytime. Just valuable content delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="text-primary font-medium mb-2">✓ Thanks for subscribing!</div>
                  <p className="text-sm text-muted-foreground">Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? (
                      "Subscribing..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Subscribe for Free
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>What you'll get:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <span className="pill-tag">🚀 Project Deep-dives</span>
              <span className="pill-tag">💼 Career Insights</span>
              <span className="pill-tag">🔧 Tech Tips</span>
              <span className="pill-tag">📝 Personal Stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
