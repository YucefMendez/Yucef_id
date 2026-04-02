# src/lib rules

- `data.ts` and `translations.ts` are ALWAYS edited together in the same task.
- `data.ts` — metadata only: tags, dates, URLs, GitHub links, status flags. No visible text.
- `translations.ts` — ALL visible text, EN + ES. Every key must have both language entries.
- Never add visible text to `data.ts`. Never add metadata to `translations.ts`.
- After any change here: toggle language in browser to verify both EN and ES render correctly.
