// lib/utils.ts

import { toast } from "sonner" // Import the toast from the sonner library

/**
 * Shortens an Ethereum address for display, e.g. 0x1234...abcd
 */
export function shortenAddress(address: string, length = 4): string {
  return `${address.slice(0, length + 2)}...${address.slice(-length)}`
}

/**
 * Formats a token amount based on decimals
 */
export function formatTokenAmount(amount: number | bigint, decimals = 18): string {
  const formatted = Number(amount) / 10 ** decimals
  return formatted.toFixed(2)
}

/**
 * Formats a date into MM/DD/YYYY or similar
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

/**
 * Copies text to clipboard and shows a toast message
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard!") // Use the success variant from Sonner
    return true
  } catch (error: unknown) { // Use unknown to ensure type safety
    if (error instanceof Error) {
      console.error("Clipboard copy error:", error) // Log the error for debugging
      toast.error(`Failed to copy to clipboard: ${error.message}`) // Show error message in the toast
    } else {
      console.error("Clipboard copy unknown error:", error)
      toast.error("Failed to copy to clipboard.")
    }
    return false
  }
}

/**
 * Simple delay utility (in ms)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
