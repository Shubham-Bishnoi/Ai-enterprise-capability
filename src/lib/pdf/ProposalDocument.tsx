// Client-only: imported lazily by ./download so @react-pdf never reaches SSR.
import { Fragment, type ReactNode } from "react";
import { Document, Font, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { AudienceBrief, Proposal } from "@/lib/proposals/types";

export type Edition = { kind: "full" } | { kind: "brief"; audience: string };

const C = {
  ink: "#1d1d1f",
  ink2: "#6e6e73",
  ink3: "#86868b",
  paper2: "#f5f5f7",
  hairline: "#d2d2d7",
  blue: "#0071e3",
  blueOnDark: "#2997ff",
  night: "#000000",
};

let fontsReady = false;
function registerFonts() {
  if (fontsReady) return;
  const base = `${window.location.origin}/fonts`;
  Font.register({
    family: "Inter",
    fonts: [
      { src: `${base}/Inter-Regular.ttf`, fontWeight: 400 },
      { src: `${base}/Inter-Medium.ttf`, fontWeight: 500 },
      { src: `${base}/Inter-SemiBold.ttf`, fontWeight: 600 },
      { src: `${base}/Inter-Bold.ttf`, fontWeight: 700 },
    ],
  });
  Font.registerHyphenationCallback((word) => [word]);
  fontsReady = true;
}

const s = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10.5,
    color: C.ink,
    lineHeight: 1.5,
    paddingTop: 64,
    paddingBottom: 64,
    paddingHorizontal: 56,
  },
  header: {
    position: "absolute",
    top: 28,
    left: 56,
    right: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: C.ink3,
    borderBottomWidth: 0.5,
    borderBottomColor: C.hairline,
    paddingBottom: 6,
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 56,
    right: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: C.ink3,
  },

  cover: {
    backgroundColor: C.night,
    color: "#ffffff",
    padding: 56,
    fontFamily: "Inter",
    justifyContent: "space-between",
  },
  wordmark: { fontSize: 13, fontWeight: 600, color: "#ffffff" },
  coverEyebrow: { fontSize: 13, fontWeight: 600, color: C.blueOnDark, marginBottom: 14 },
  coverTitle: {
    fontSize: 44,
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: -0.8,
    marginBottom: 16,
  },
  coverTagline: { fontSize: 16, color: "#a1a1a6", lineHeight: 1.35, maxWidth: 420 },
  coverStat: { fontSize: 40, fontWeight: 700, letterSpacing: -0.6 },
  coverStatLabel: { fontSize: 11, color: "#a1a1a6", marginTop: 2, maxWidth: 300 },
  coverMetaLabel: { fontSize: 8, color: "#86868b", marginBottom: 3 },
  coverMetaValue: { fontSize: 11, color: "#f5f5f7" },

  eyebrow: { fontSize: 10, fontWeight: 600, color: C.blue, marginBottom: 4 },
  h1: { fontSize: 24, fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.15, marginBottom: 10 },
  h2: { fontSize: 16, fontWeight: 600, letterSpacing: -0.2, marginBottom: 6, marginTop: 16 },
  h3: { fontSize: 11.5, fontWeight: 600, marginBottom: 3 },
  lead: { fontSize: 13, color: C.ink2, lineHeight: 1.45, marginBottom: 14 },
  muted: { color: C.ink2 },
  small: { fontSize: 8.5, color: C.ink3 },
  section: { marginBottom: 22 },

  bulletRow: { flexDirection: "row", marginBottom: 3 },
  bulletDot: { width: 12, color: C.blue },
  bulletText: { flex: 1 },

  callout: { backgroundColor: C.paper2, borderRadius: 10, padding: 14, marginBottom: 14 },
  calloutLabel: { fontSize: 9, fontWeight: 600, color: C.blue, marginBottom: 4 },
  calloutText: { fontSize: 12, fontWeight: 600, lineHeight: 1.4 },

  // Explicit rows, not flexWrap: react-pdf mis-measures wrapped rows of tiles.
  gridRow: { flexDirection: "row", marginBottom: 10 },
  gridGap: { width: 10 },
  tile: { flex: 1, backgroundColor: C.paper2, borderRadius: 10, padding: 12 },
  tileGhost: { flex: 1 },
  statValue: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: -0.3,
    lineHeight: 1.2,
    marginBottom: 2,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: C.hairline,
    paddingVertical: 7,
  },
  rowHead: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: C.ink,
    paddingBottom: 5,
  },

  layer: {
    flexDirection: "row",
    backgroundColor: C.paper2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  layerName: { width: 130, fontWeight: 600, fontSize: 10 },
  layerItems: { flex: 1, fontSize: 9.5, color: C.ink2 },
});

const EDITION_LABEL = (p: Proposal, e: Edition) =>
  e.kind === "full" ? "Complete proposal" : (briefFor(p, e.audience)?.label ?? "Proposal");

export function briefFor(p: Proposal, audience: string): AudienceBrief | undefined {
  return p.briefs.find((b) => b.audience === audience);
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((t, i) => (
        <View key={i} style={s.bulletRow} wrap={false}>
          <Text style={s.bulletDot}>•</Text>
          <Text style={s.bulletText}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

function TileGrid<T>({
  items,
  cols,
  render,
}: {
  items: T[];
  cols: number;
  render: (item: T) => ReactNode;
}) {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += cols) rows.push(items.slice(i, i + cols));
  return (
    <View>
      {rows.map((row, r) => (
        <View key={r} style={s.gridRow} wrap={false}>
          {Array.from({ length: cols }, (_, c) => {
            const item = row[c];
            return (
              <Fragment key={c}>
                {c > 0 && <View style={s.gridGap} />}
                {item === undefined ? (
                  <View style={s.tileGhost} />
                ) : (
                  <View style={s.tile}>{render(item)}</View>
                )}
              </Fragment>
            );
          })}
        </View>
      ))}
    </View>
  );
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <View minPresenceAhead={170} wrap={false}>
      <Text style={s.eyebrow}>{eyebrow}</Text>
      <Text style={s.h1}>{title}</Text>
    </View>
  );
}

function Chrome({ proposal, edition }: { proposal: Proposal; edition: Edition }) {
  return (
    <>
      <View style={s.header} fixed>
        <Text>Evolve AI · {proposal.sector}</Text>
        <Text>{EDITION_LABEL(proposal, edition)}</Text>
      </View>
      <View style={s.footer} fixed>
        <Text>Budgets are indicative. Statistics cite public sources.</Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>
    </>
  );
}

function Cover({ proposal, edition }: { proposal: Proposal; edition: Edition }) {
  const brief = edition.kind === "brief" ? briefFor(proposal, edition.audience) : undefined;
  const date = new Date(proposal.generatedAt ?? Date.now()).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Page size="A4" style={s.cover}>
      <Text style={s.wordmark}>evolve.ai</Text>
      <View>
        <Text style={s.coverEyebrow}>
          {EDITION_LABEL(proposal, edition)} · {proposal.sector}
        </Text>
        <Text style={s.coverTitle}>{brief?.headline || proposal.title}</Text>
        <Text style={s.coverTagline}>{proposal.tagline}</Text>
      </View>
      <View>
        <Text style={s.coverStat}>{proposal.heroStat.value}</Text>
        <Text style={s.coverStatLabel}>{proposal.heroStat.label}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 36,
            borderTopWidth: 0.5,
            borderTopColor: "#424245",
            paddingTop: 14,
          }}
        >
          <View style={{ flex: 2, paddingRight: 16 }}>
            <Text style={s.coverMetaLabel}>Prepared for</Text>
            <Text style={s.coverMetaValue}>
              {brief?.addressee ?? "Government of India and State Governments"}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.coverMetaLabel}>Date</Text>
            <Text style={s.coverMetaValue}>{date}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.coverMetaLabel}>Prepared by</Text>
            <Text style={s.coverMetaValue}>Evolve AI</Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

function BriefBlock({ brief }: { brief: AudienceBrief }) {
  return (
    <View>
      <Heading eyebrow={`${brief.label} · for ${brief.addressee}`} title={brief.headline} />
      <View style={s.callout} wrap={false}>
        <Text style={s.calloutLabel}>The ask</Text>
        <Text style={s.calloutText}>{brief.ask}</Text>
      </View>
      <Text style={s.h2}>Key points</Text>
      <Bullets items={brief.keyPoints} />
      {brief.sections.map((sec) => (
        <View key={sec.heading} style={{ marginTop: 6 }}>
          <Text style={s.h2} minPresenceAhead={60}>
            {sec.heading}
          </Text>
          <Text style={{ marginBottom: 6 }}>{sec.body}</Text>
          {sec.bullets && sec.bullets.length > 0 && <Bullets items={sec.bullets} />}
        </View>
      ))}
      <View wrap={false}>
        <Text style={s.h2}>Next steps</Text>
        {brief.nextSteps.map((step, i) => (
          <View key={i} style={s.bulletRow}>
            <Text style={{ width: 18, color: C.blue, fontWeight: 600 }}>{i + 1}.</Text>
            <Text style={s.bulletText}>{step}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Context({ p }: { p: Proposal }) {
  return (
    <View style={s.section}>
      <Heading eyebrow="The challenge" title="Where India stands today." />
      <TileGrid
        items={p.context.stats}
        cols={2}
        render={(st) => (
          <>
            <Text style={s.statValue}>{st.value}</Text>
            <Text>{st.label}</Text>
            {st.source ? (
              <Text style={[s.small, { marginTop: 3 }]}>Source: {st.source}</Text>
            ) : null}
          </>
        )}
      />
      <Text style={s.h2}>What holds outcomes back</Text>
      <Bullets items={p.context.challenges} />
    </View>
  );
}

function Policy({ p }: { p: Proposal }) {
  return (
    <View style={s.section}>
      <Heading eyebrow="Policy alignment" title="Built on missions already in motion." />
      {p.policyAlignment.map((sc) => (
        <View key={sc.name} style={s.row} wrap={false}>
          <View style={{ width: 170, paddingRight: 10 }}>
            <Text style={{ fontWeight: 600 }}>{sc.name}</Text>
            <Text style={s.small}>{sc.ministry}</Text>
          </View>
          <Text style={{ flex: 1, color: C.ink2 }}>{sc.note}</Text>
        </View>
      ))}
    </View>
  );
}

function Solutions({ p, condensed }: { p: Proposal; condensed?: boolean }) {
  return (
    <View style={s.section}>
      <Heading eyebrow="Solutions" title={`${p.solutions.length} AI products. One outcome.`} />
      <TileGrid
        items={p.solutions}
        cols={2}
        render={(so) => (
          <>
            <Text style={s.h3}>{so.name}</Text>
            {!condensed && <Text style={{ color: C.ink2, marginBottom: 4 }}>{so.description}</Text>}
            <Text style={{ color: C.blue, fontSize: 9.5, fontWeight: 500 }}>{so.impact}</Text>
          </>
        )}
      />
    </View>
  );
}

function System({ p, condensed }: { p: Proposal; condensed?: boolean }) {
  const cs = p.centralSystem;
  return (
    <View style={s.section}>
      <Heading eyebrow="The centralized system" title={cs.name} />
      <Text style={s.lead}>{cs.description}</Text>
      {cs.layers.map((l) => (
        <View key={l.name} style={s.layer} wrap={false}>
          <Text style={s.layerName}>{l.name}</Text>
          <Text style={s.layerItems}>{l.items.join("  ·  ")}</Text>
        </View>
      ))}
      {!condensed && (
        <View style={{ flexDirection: "row", marginTop: 10 }} wrap={false}>
          <View style={{ flex: 1, paddingRight: 12 }}>
            <Text style={s.h3}>Data sources</Text>
            <Bullets items={cs.dataSources} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.h3}>Integrates with</Text>
            <Bullets items={cs.integrations} />
          </View>
        </View>
      )}
    </View>
  );
}

function Roadmap({ p, condensed }: { p: Proposal; condensed?: boolean }) {
  return (
    <View style={s.section}>
      <Heading eyebrow="Roadmap" title="From pilot to every district." />
      {p.roadmap.map((ph) => (
        <View key={ph.phase} style={s.row} wrap={false}>
          <View style={{ width: 150, paddingRight: 10 }}>
            <Text style={{ fontWeight: 600 }}>{ph.phase}</Text>
            <Text style={{ color: C.blue, fontSize: 9.5 }}>{ph.duration}</Text>
          </View>
          <View style={{ flex: 1 }}>
            {condensed ? (
              <Text style={{ color: C.ink2 }}>{ph.milestones.slice(0, 2).join(" · ")}</Text>
            ) : (
              <Bullets items={ph.milestones} />
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

function BudgetBlock({ p }: { p: Proposal }) {
  return (
    <View style={s.section} wrap={false}>
      <Heading eyebrow="Investment" title={p.budget.total} />
      <View style={s.rowHead}>
        <Text style={{ flex: 1, fontWeight: 600 }}>Head</Text>
        <Text style={{ width: 90, fontWeight: 600, textAlign: "right" }}>Amount</Text>
      </View>
      {p.budget.items.map((b) => (
        <View key={b.head} style={s.row}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text>{b.head}</Text>
            {b.note ? <Text style={s.small}>{b.note}</Text> : null}
          </View>
          <Text style={{ width: 90, textAlign: "right", fontWeight: 600 }}>{b.amount}</Text>
        </View>
      ))}
      {p.budget.note ? <Text style={[s.small, { marginTop: 6 }]}>{p.budget.note}</Text> : null}
    </View>
  );
}

function Kpis({ p }: { p: Proposal }) {
  return (
    <View style={s.section}>
      <Heading eyebrow="Outcomes" title="What we will measure." />
      <TileGrid
        items={p.kpis}
        cols={3}
        render={(k) => (
          <>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: C.blue,
                marginBottom: 3,
                lineHeight: 1.25,
              }}
            >
              {k.target}
            </Text>
            <Text style={{ fontSize: 9.5 }}>{k.metric}</Text>
          </>
        )}
      />
    </View>
  );
}

function Risks({ p }: { p: Proposal }) {
  return (
    <View style={s.section}>
      <Heading eyebrow="Risks" title="Anticipated. Mitigated." />
      {p.risks.map((r) => (
        <View key={r.risk} style={s.row} wrap={false}>
          <Text style={{ width: 170, paddingRight: 10, fontWeight: 600 }}>{r.risk}</Text>
          <Text style={{ flex: 1, color: C.ink2 }}>{r.mitigation}</Text>
        </View>
      ))}
    </View>
  );
}

function Summary({ p }: { p: Proposal }) {
  return (
    <View style={s.section}>
      <Heading eyebrow={p.sector} title={p.title} />
      <Text style={s.lead}>{p.summary}</Text>
    </View>
  );
}

export function ProposalDocument({
  proposal: p,
  edition,
}: {
  proposal: Proposal;
  edition: Edition;
}) {
  registerFonts();
  const brief = edition.kind === "brief" ? briefFor(p, edition.audience) : undefined;
  // Ministers get the condensed supporting detail; every other audience gets it in full.
  const condensed = edition.kind === "brief" && edition.audience === "minister";

  return (
    <Document
      title={`${p.sector} — ${EDITION_LABEL(p, edition)} — Evolve AI`}
      author="Evolve AI"
      subject={p.tagline}
    >
      <Cover proposal={p} edition={edition} />

      {brief ? (
        <Page size="A4" style={s.page}>
          <Chrome proposal={p} edition={edition} />
          <BriefBlock brief={brief} />
        </Page>
      ) : null}

      <Page size="A4" style={s.page}>
        <Chrome proposal={p} edition={edition} />
        {!brief && <Summary p={p} />}
        {brief && (
          <View style={s.section}>
            <Text style={s.eyebrow}>Supporting detail</Text>
            <Text style={s.lead}>{p.summary}</Text>
          </View>
        )}
        <Context p={p} />
        {!condensed && <Policy p={p} />}
        <Solutions p={p} condensed={condensed} />
        <System p={p} condensed={condensed} />
        <Roadmap p={p} condensed={condensed} />
        <BudgetBlock p={p} />
        <Kpis p={p} />
        {!condensed && <Risks p={p} />}
      </Page>

      {edition.kind === "full" &&
        p.briefs.map((b) => (
          <Page key={b.audience} size="A4" style={s.page}>
            <Chrome proposal={p} edition={edition} />
            <BriefBlock brief={b} />
          </Page>
        ))}
    </Document>
  );
}
