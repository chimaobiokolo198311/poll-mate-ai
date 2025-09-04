import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function Index() {
  const { user, signOut } = useAuth()

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Polling App</CardTitle>
          <CardDescription>
            Hello, {user?.email}! You're successfully authenticated.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>This is the main application where polling features will be implemented.</p>
          <Button onClick={() => signOut()} variant="outline">
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}