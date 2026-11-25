import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each([
    ["/proposals", "/proposals/"],
    ["/proposals/agriculture", "/proposals/$sectorId"],
    ["/studio", "/studio"],
  ])("matches %s to %s", (path, routeId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(routeId);
  });
});

describe("Proposals", () => {
  it("ships fifteen sectors, each with a Bureaucrat and a Minister brief", async () => {
    const { proposals } = await import("@/lib/proposals");

    expect(proposals).toHaveLength(15);
    for (const p of proposals) {
      expect(p.briefs.map((b) => b.audience)).toEqual(["bureaucrat", "minister"]);
    }
  });
});
