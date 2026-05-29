import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SafeTap Ghana — Touchless Water for Climate-Resilient Sanitation" },
      {
        name: "description",
        content:
          "Low-cost, touchless smart water dispensing for schools and public facilities across Northern Ghana. Safer hands, healthier children, resilient communities.",
      },
      { name: "author", content: "SafeTap Ghana" },
      {
        property: "og:title",
        content: "SafeTap Ghana — Touchless Water for Climate-Resilient Sanitation",
      },
      {
        property: "og:description",
        content:
          "Low-cost, touchless smart water dispensing for schools and public facilities across Northern Ghana.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://safetap.gh" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SafeTapGhana" },
      {
        name: "keywords",
        content:
          "water sanitation, Ghana, touchless technology, public health, climate resilience, WASH, Northern Ghana",
      },
      { name: "theme-color", content: "#9d7c47" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:title", content: "SafeTap Ghana — Touchless Water for Climate-Resilient Sanitation" },
      { name: "twitter:title", content: "SafeTap Ghana — Touchless Water for Climate-Resilient Sanitation" },
      { name: "description", content: "A touchless smart water dispenser for improved hygiene and sanitation in public facilities." },
      { property: "og:description", content: "A touchless smart water dispenser for improved hygiene and sanitation in public facilities." },
      { name: "twitter:description", content: "A touchless smart water dispenser for improved hygiene and sanitation in public facilities." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1774352a-3bcd-4f5e-8fb3-1eebd04e6b23/id-preview-fa3d31b6--abd10c39-f9a0-4847-88f4-542855a30e3c.lovable.app-1780053206931.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1774352a-3bcd-4f5e-8fb3-1eebd04e6b23/id-preview-fa3d31b6--abd10c39-f9a0-4847-88f4-542855a30e3c.lovable.app-1780053206931.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
