'use client'

import React, { useEffect, useState } from 'react'
import { useAccount, useSignMessage, useDisconnect } from 'wagmi'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import ReferralStats from '@/components/ReferralStats'
import WalletStatus from '@/components/WalletStatus'
import TokenBalance from '@/components/TokenBalance'
import BadgesDisplay from '@/components/BadgesDisplay'

ChartJS.register(BarElement, CategoryScale, LinearScale)

interface ActionStat {
  type: string
  count: number
}

const DashboardPage = () => {
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const { signMessageAsync } = useSignMessage()

  const [isFetching, setIsFetching] = useState(false)
  const [view, setView] = useState<'chart' | 'cards'>('chart')
  const [actionStats, setActionStats] = useState<ActionStat[]>([])

  useEffect(() => {
    if (!isConnected || !address) return

    const fetchStats = async () => {
      setIsFetching(true)
      try {
        // You could store this in sessionStorage or fetch a challenge from the server
        const message = `Authenticate to access your dashboard: ${address}`
        const signature = await signMessageAsync({ message })

        const res = await fetch('/api/action-stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ address, signature, message }),
        })

        if (!res.ok) throw new Error('Failed to fetch stats')

        const data = await res.json()
        setActionStats(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsFetching(false)
      }
    }

    fetchStats()
  }, [isConnected, address, signMessageAsync])

  const chartData = {
    labels: actionStats.map((item) => item.type),
    datasets: [
      {
        label: 'Tracked Actions',
        data: actionStats.map((item) => item.count),
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
      },
    ],
  }

  return (
    <div className="dashboard-container max-w-6xl mx-auto p-6 space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
        {isConnected ? (
          <Button variant="outline" onClick={() => disconnect()}>
            Disconnect Wallet
          </Button>
        ) : (
          <Button variant="outline" disabled>
            Connect Wallet First
          </Button>
        )}
      </div>

      {isFetching ? (
        <p className="text-sm text-muted-foreground">Loading your dashboard data...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold">Your Referrals</h3>
              <ReferralStats />
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">Your Wallet</h3>
              <WalletStatus />
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">Your Token Balance</h3>
              <TokenBalance />
            </Card>

            <Card>
              <h3 className="text-xl font-semibold">Your Badges</h3>
              <BadgesDisplay />
            </Card>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Tracked Actions Overview</h3>
              <div>
                <Button
                  variant={view === 'chart' ? 'default' : 'outline'}
                  className="mr-2"
                  onClick={() => setView('chart')}
                >
                  Chart View
                </Button>
                <Button
                  variant={view === 'cards' ? 'default' : 'outline'}
                  onClick={() => setView('cards')}
                >
                  Card View
                </Button>
              </div>
            </div>

            {view === 'chart' ? (
              <Bar data={chartData} className="bg-white p-4 rounded shadow" />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {actionStats.map((item) => (
                  <div key={item.type} className="bg-white p-4 shadow rounded border">
                    <h2 className="text-lg font-semibold">{item.type}</h2>
                    <p className="text-2xl text-green-700 font-bold">{item.count}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default DashboardPage
