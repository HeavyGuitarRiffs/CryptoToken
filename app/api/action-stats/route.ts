import { NextRequest, NextResponse } from 'next/server'
import { verifyMessage } from 'viem'
import clientPromise from '@/lib/mongodb'

type ActionStat = {
  type: string
  count: number
}

export async function POST(req: NextRequest) {
  const { address, signature, message } = await req.json()

  if (!address || !signature || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const isValid = await verifyMessage({ address, message, signature })

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db('dashboardApp')
    const collection = db.collection('userActionStats')

    const user = await collection.findOne<{ stats: ActionStat[] }>({ address: address.toLowerCase() })

    if (!user) {
      // Optionally: Insert new user with default stats
      const defaultStats: ActionStat[] = [
        { type: 'Referral Events', count: 0 },
        { type: 'Social Engagements', count: 0 },
        { type: 'On-Chain Activity', count: 0 },
        { type: 'Content Actions', count: 0 },
        { type: 'Reward Claims', count: 0 },
        { type: 'Custom Webhooks', count: 0 },
      ]

      await collection.insertOne({
        address: address.toLowerCase(),
        stats: defaultStats,
        createdAt: new Date(),
        updatedAt: new Date(),
      })

      return NextResponse.json(defaultStats)
    }

    return NextResponse.json(user.stats)
  } catch (error) {
    console.error('❌ Server error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
