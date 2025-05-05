
import * as React from "react"

export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    window.addEventListener("resize", checkIsMobile)
    checkIsMobile()

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [breakpoint])

  return isMobile
}
