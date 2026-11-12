// Single source of truth for every consumer's color token map — see
// lyra-ui/tailwind-tokens.cjs's own doc comment for why this is a plain
// relative `require` (tailwind.config.js is loaded by Tailwind's own config
// loader, outside Vite, so the `@nicecxone/lyra-ui` alias doesn't apply here).
// Any new prototype built off lyra-ui should do the same rather than
// hand-copying this object — that hand-copying is exactly what caused a
// "selected channel" highlight and 8/10 customer avatar colors to silently
// render with zero CSS in this app (see lyra-ui/PROJECT_SUMMARY.md's
// "Cross-Repo Sync" section for the incident).
const lyraColors = require("./lyra-ui/tailwind-tokens.cjs");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./lyra-ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...lyraColors,
        "cxone-navy": "#2a2d32",
      },
      borderRadius: {
        "lyra-none":  "var(--lyra-radius-none)",
        "lyra-xs":    "var(--lyra-radius-xs)",
        "lyra-sm":    "var(--lyra-radius-sm)",
        "lyra-md":    "var(--lyra-radius-md)",
        "lyra-lg":    "var(--lyra-radius-lg)",
        "lyra-xl":    "var(--lyra-radius-xl)",
        "lyra-round": "var(--lyra-radius-round)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      // Accordion height animation — required now that lyra-ui's `Accordion`
      // is built on @radix-ui/react-accordion. Kept in sync (hand-copied,
      // same as borderRadius/fontFamily above) with the identical block in
      // lyra-ui/tailwind.config.js and lyra-ui/src/tailwind-preset.ts.
      // Without this, Accordion's `data-[state=open]:animate-accordion-down`/
      // `-up` classes exist in the DOM with no matching CSS rule — the
      // accordion still opens/closes correctly, just with the animation
      // silently missing (snaps instead of animating), the same class of
      // bug documented in the "Cross-Repo Sync" incident above.
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "phone-ring": {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "65%": { transform: "rotate(-14deg)" },
          "70%": { transform: "rotate(14deg)" },
          "75%": { transform: "rotate(-10deg)" },
          "80%": { transform: "rotate(10deg)" },
          "85%": { transform: "rotate(0deg)" },
        },
        // Glow only: the red border itself is a real border on an overlay, so it appears with the glow.
        "ring-urgent": {
          "0%, 100%": {
            boxShadow: "0 0 6px 2px color-mix(in srgb, var(--lyra-color-status-critical-strong) 35%, transparent)",
          },
          "50%": {
            boxShadow: "0 0 16px 6px color-mix(in srgb, var(--lyra-color-status-critical-strong) 55%, transparent)",
          },
        },
        // Auto-decline / decline: the tile wipes away from right to left.
        "wipe-left": {
          from: { clipPath: "inset(0 0 0 0)" },
          to: { clipPath: "inset(0 100% 0 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-in-out",
        "accordion-up": "accordion-up 200ms ease-in-out",
        // Incoming call: phone icon shakes like a ringing phone.
        "phone-ring": "phone-ring 2s ease-in-out infinite",
        // Incoming call under 10 seconds: red border and glow together.
        "ring-urgent": "ring-urgent 1.6s ease-in-out infinite",
        "wipe-left": "wipe-left 350ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
