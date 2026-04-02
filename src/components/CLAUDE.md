# src/components rules

- Every component uses `useLang()` → `t.<section>.<key>` for all visible text. No hardcoded strings.
- Components take no props — they read from `useLang()` and `src/lib/data.ts` directly.
- Animations use Framer Motion: `initial={{ opacity: 0, y: 20 }}` + `whileInView` + `viewport={{ once: true }}`.
- Accent color token: `text-accent` / `border-accent` (`#C4A35A`). Never hardcode the hex.
- Dark mode: use `bg-background` / `text-foreground` CSS var tokens, not `dark:` prefixed classes.
- New section checklist: create component → add translation keys (both EN+ES) → add to `page.tsx` → add nav anchor if needed.
- Before editing multiple components, invoke `frontend-design:frontend-design` skill.
