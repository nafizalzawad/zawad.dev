import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch("https://script.google.com/macros/s/YOUR_NEW_ENDPOINT/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email, firstName }),
      });

      const text = await response.text();
      if (response.ok && text === "Success") {
        setIsSubmitted(true);
        setEmail('');
        setFirstName('');
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
            Join thousands of tech enthusiasts receiving my weekly newsletter.
          </p>

          <Card className="max-w-md mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Free Weekly Updates</CardTitle>
              <CardDescription>
                By subscribing, you agree to receive email updates from me. No spam, unsubscribe anytime.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="text-primary font-medium mb-2">✓ Thanks for subscribing!</div>
                  <p className="text-sm text-muted-foreground">Check your email to confirm your subscription.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? "Subscribing..." : <><Send className="h-4 w-4 mr-2" /> Subscribe for Free</>}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
