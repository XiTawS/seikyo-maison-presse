"use client";

/* ─── Mondial Relay ─── */
export function MondialRelayLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="40" rx="4" fill="#E30613"/>
      <text x="100" y="26" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" letterSpacing="0.5">
        MONDIAL RELAY
      </text>
    </svg>
  );
}

/* ─── FDJ ─── */
export function FDJLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="4" fill="#003DA5"/>
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="20">
        FDJ
      </text>
    </svg>
  );
}

/* ─── Compte Nickel ─── */
export function NickelLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="40" rx="4" fill="#00D072"/>
      <text x="80" y="27" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18">
        nickel
      </text>
    </svg>
  );
}