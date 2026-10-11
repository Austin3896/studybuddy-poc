import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

// This is the "gate" for every page inside the _authenticated folder.
// Before any of those pages load, beforeLoad checks with the auth server
// whether a user is signed in. If not, they are sent to /auth.
export const Route = createFileRoute("/_authenticated")({
  // The session lives in the browser, so this check must run client-side only.
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      throw redirect({ to: "/auth" });
    }
    // Whatever we return here is available to child pages via useRouteContext().
    return { user: data.user };
  },
  component: () => <Outlet />,
});
