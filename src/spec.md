# Specification

## Summary
**Goal:** Deliver a responsive single-page ASD screening flow (M-CHAT-R) with an underwater, child-friendly UI that guides users from intro to results without page reloads.

**Planned changes:**
- Build a single-page, in-app navigated flow with sections: Hero → Disclaimer & Demographics → Questionnaire (one question at a time) → Results Dashboard → Footer (FAQ accordion + About).
- Apply consistent visual styling: underwater/kid-friendly professional theme, specified color palette, and load the specified heading/body fonts.
- Implement Hero with the exact headline/subheadline, a static underwater kids illustration asset, and a rounded CTA button labeled exactly “Cek Risiko Sekarang” that jumps to the input section.
- Implement Disclaimer & Input card with the exact disclaimer text and only two inputs: “Usia (Bulan)” dropdown and “Jenis Kelamin” radios (no name field), plus a “Lanjut” button with clear validation.
- Implement Questionnaire UI: top gradient-blue progress bar, question card showing only one question at a time, large “YA” (green) and “TIDAK” (red) answer buttons, and Back/Next controls with required-answer gating.
- Implement deterministic M-CHAT-R scoring to compute a total score and display a Results Dashboard with Low/Medium/High visual states, using the specified icon concepts and exact guidance copy.
- Add Footer with “Tentang Kami” and “FAQ” anchors; implement FAQ as an accordion containing the four provided Q&A entries; render About headline/body text exactly as provided.
- Ensure privacy behavior: keep age/gender and answers in-memory only (no persistent storage) and provide a way to restart/reset the screening session.
- Add generated illustration asset(s) under `frontend/public/assets/generated` and render in the Hero section.

**User-visible outcome:** Users can complete an ASD screening flow on mobile or desktop—enter age/gender, answer M-CHAT-R questions one-by-one, view a low/medium/high risk result with guidance, read About/FAQ, and restart to clear all session data—without any full page reloads.
