// components/ReferralCard.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReferralCardProps {
  name: string
  reward: string
  date: string
  status: "pending" | "earned"
  referralLink: string
}

export const ReferralCard = ({ name, reward, date, status, referralLink }: ReferralCardProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
  }

  return (
    <Card className={cn(
      "bg-black text-white border border-gray-800 shadow-lg rounded-xl",
      "hover:shadow-neon transition-shadow duration-300"
    )}>
      <CardHeader>
        <CardTitle className="text-neon-green">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-gray-300">Reward: <span className="text-neon-pink">{reward}</span></p>
        <p className="text-sm text-gray-400">Referred on: {date}</p>
        <Badge variant="outline" className={status === "earned" ? "border-neon-green text-neon-green" : "border-yellow-400 text-yellow-300"}>
          {status.toUpperCase()}
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <p className="text-xs text-gray-500 truncate">{referralLink}</p>
        <Button variant="ghost" size="icon" onClick={handleCopy}>
          <Copy className="w-4 h-4 text-neon-blue" />
        </Button>
      </CardFooter>
    </Card>
  )
}
