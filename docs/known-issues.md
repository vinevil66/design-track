# Known issues — Settings page

Items identified during the Day 6 deep implementation pass that are not covered by the Figma design (`node-id=4-16`) and were not part of the Day 6 decision list. Implemented with a sensible default; flagged here for design/product follow-up.

## Save button enabled-state visual
Figma only shows the `button/disabled` (lavender `#cdcaff`) variant. No enabled-state styling is designed. Implemented using the existing solid `--color-text-primary` button style (same as the rest of the app's `Button` component) since Save is always enabled per Day 6 decision #2. If a distinct "enabled" treatment is wanted, it needs a new design reference.

## Save confirmation UX
"Changes saved ✓" is implemented as static inline text next to the button, visible for 3 seconds (Day 6 decision #3). No design exists for this — text styling, position, and timing are my defaults. No `aria-live` region was added, so screen reader users won't be notified of the save. Should revisit if accessibility coverage needs to improve.

## Unsaved-changes warning
Uses the native `window.confirm()` dialog (Day 6 decision #7) as a stopgap. This is not styled, doesn't match the app's visual language, and isn't accessible-by-design beyond what the browser provides natively. A custom modal would be a more polished and consistent solution but wasn't directly requested.

## Loading / empty states
No design exists for:
- Initial load of account data (the Figma frame assumes `name`/`email` are already populated).
- Empty Name/Email values are handled with placeholder text (Day 6 decision #5), but there's no skeleton/spinner for an async fetch before data arrives.

## Security panel
Still a placeholder ("Security settings are coming soon.") per Day 6 decision #6. No content has been designed for this panel.

## Sidenav item gap
The Figma frame specifies a 4px gap between sidenav items; the implementation uses the existing `--spacing-sm` token (8px), since no `--spacing-xs` token exists in the current scale and adding one wasn't part of the Day 6 decisions. Visually close but not pixel-exact.

## Responsive breakpoint choice
640px was chosen as the stack breakpoint (Day 6 decision #8) since the design has no responsive frames to reference. No tablet-width (641–1023px) treatment is designed either — the layout just stays in its two-column form until 640px, then stacks.
