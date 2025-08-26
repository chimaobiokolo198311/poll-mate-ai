import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Polling App</h1>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
            )}
            <Button variant="outline" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Welcome to Polling App</CardTitle>
              <p className="text-muted-foreground">
                Create and participate in polls with your community
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-8">
                You're successfully authenticated! Ready to start building amazing polling features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Create Polls</h3>
                    <p className="text-sm text-muted-foreground">
                      Design custom polls with multiple choice options
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Vote & Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Participate in polls and view real-time results
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
