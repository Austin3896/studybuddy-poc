<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Auth: Lovable Cloud email/password via `@/integrations/supabase/client`. Protected pages live under `src/routes/_authenticated/`; the pathless `route.tsx` gate (`ssr: false`, `supabase.auth.getUser()`, redirect to `/auth`) is the only auth guard — child routes add no auth code.
