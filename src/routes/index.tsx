import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import type { ReactElement } from "react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.png";
import chatLogo from "@/assets/chat-logo.png";
import movVideo from "@/assets/Withemoticon_safari.mov";
import webmVideo from "@/assets/Withemoticon.webm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shankara — Your Business Deserves to Be Online" },
      { name: "description", content: "Shankara designs and ships interactive websites with honest pricing, a one-year warranty, and a 10-day delivery promise." },
      { property: "og:title", content: "Shankara — Web Design Studio, Chennai" },
      { property: "og:description", content: "Websites that work as hard as you do. Launch, Grow, and Scale packages." },
    ],
  }),
  component: Index,
});

/* ─────────────────────────────────────────────
   PACKAGES DATA — 9 packages across 3 sections
   ───────────────────────────────────────────── */
interface PackageLevel {
  level: number;
  name: string;
  tagline: string;
  price: number;
  limitation: string;
  includes: string[];
  notIncluded: string[];
}

interface SectionData {
  id: SectionId;
  section: string;
  subtitle: string;
  icon: string;
  levels: PackageLevel[];
  featuredLevel: number;
}

type PackagesMap = Record<SectionId, SectionData>;

const PACKAGES: PackagesMap = {
  dp: {
    id: "dp",
    section: "Online Presence",
    subtitle: "Your business, visible online",
    icon: "🌐",
    levels: [
      {
        level: 1,
        name: "Website + Hosting",
        tagline: "For start-up companies",
        price: 3500,
        limitation: "3-page custom website · Shared hosting · SSL included · Domain setup",
        includes: [
          "Custom 3-page website built for your business",
          "Managed shared hosting",
          "SSL certificate + domain connection",
          "Basic contact form",
          "Mobile responsive design",
          "1 revision cycle per month",
        ],
        notIncluded: ["CRM", "AI Chatbot", "Lead tracking"],
      },
      {
        level: 2,
        name: "Website + CRM",
        tagline: "For established companies",
        price: 8500,
        limitation: "Everything in L1 · CRM up to 500 contacts · Lead pipeline · Monthly reports",
        includes: [
          "Everything in Level 1",
          "CRM setup — manage up to 500 contacts",
          "Lead tracking and pipeline view",
          "Reports and basic dashboards",
          "Automated follow-up reminders",
          "2 revision cycles per month",
        ],
        notIncluded: ["AI Chatbot", "24/7 query handling"],
      },
      {
        level: 3,
        name: "Website + CRM + AI Chat",
        tagline: "For companies scaling with AI",
        price: 12500,
        limitation: "Everything in L2 · 1 AI chatbot · Up to 1,000 queries/month · CRM-linked",
        includes: [
          "Everything in Level 2",
          "Embedded AI chatbot on your website",
          "Handles up to 1,000 customer queries/month",
          "Integrates with your CRM automatically",
          "Custom chat persona matching your brand",
          "Monthly chatbot performance report",
          "3 revision cycles per month",
        ],
        notIncluded: [],
      },
    ],
    featuredLevel: 3,
  },
  fc: {
    id: "fc",
    section: "Fully Online",
    subtitle: "Run your operations from anywhere",
    icon: "☁️",
    levels: [
      {
        level: 1,
        name: "Cloud Infrastructure",
        tagline: "For businesses going digital-first",
        price: 15000,
        limitation: "Cloud hosting · 99.9% uptime SLA · Daily backups (7-day retention) · Single region",
        includes: [
          "Full cloud-hosted website infrastructure",
          "99.9% uptime SLA guaranteed",
          "Daily automated backups — 7 day retention",
          "Auto-scaling on traffic spikes",
          "CDN integration for fast load times",
          "Monthly uptime + performance report",
        ],
        notIncluded: ["Mobile app", "AI operations", "Workflow automation"],
      },
      {
        level: 2,
        name: "Cloud + Mobile App",
        tagline: "For businesses managing ops on the go",
        price: 18000,
        limitation: "Everything in L1 · Android mobile app · Orders + inventory module · Real-time sync",
        includes: [
          "Everything in Level 1",
          "Android mobile app for business operations",
          "Orders and inventory management module",
          "Team management via mobile",
          "Real-time sync between app and website",
          "Push notification support",
        ],
        notIncluded: ["AI-driven insights", "Workflow automation", "AI support agent"],
      },
      {
        level: 3,
        name: "Cloud + App + AI Operations",
        tagline: "For businesses automating intelligently",
        price: 22000,
        limitation: "Everything in L2 · 3 AI automations · 1 AI support agent · Insights dashboard",
        includes: [
          "Everything in Level 2",
          "AI-driven business insights dashboard",
          "Up to 3 custom workflow automations",
          "AI support agent for your staff",
          "Anomaly detection and alerts",
          "Monthly automation performance review",
        ],
        notIncluded: [],
      },
    ],
    featuredLevel: 1,
  },
  dm: {
    id: "dm",
    section: "Online Marketing",
    subtitle: "Grow your audience, consistently",
    icon: "📣",
    levels: [
      {
        level: 1,
        name: "Content Posting",
        tagline: "Start with a strong online presence",
        price: 7500,
        limitation: "8 posts/month · 2 blogs · AI-generated visuals · Brand kit · Content calendar",
        includes: [
          "8 AI-generated social media posts per month",
          "2 long-form blog articles per month",
          "Branded visual creatives",
          "Monthly content calendar planned in advance",
          "Posts published on 1 platform",
          "Basic performance overview",
        ],
        notIncluded: ["DM management", "Comment replies", "Story management", "Ad campaigns"],
      },
      {
        level: 2,
        name: "Content + Community",
        tagline: "Stay present, build relationships",
        price: 9500,
        limitation: "Everything in L1 · DMs managed · Comments replied · Stories created · 2 platforms",
        includes: [
          "Everything in Level 1",
          "Direct messages (DMs) managed and replied to",
          "Comments monitored and responded to",
          "Stories created and published weekly",
          "Chat/inbox management",
          "Posting across 2 platforms",
          "Weekly engagement summary",
        ],
        notIncluded: ["Paid ad campaigns", "ROI reporting"],
      },
      {
        level: 3,
        name: "Content + Community + Ads",
        tagline: "Reach new customers, drive results",
        price: 14500,
        limitation: "Everything in L2 · 1 ad platform · Up to ₹5,000 ad budget managed · ROI report/month",
        includes: [
          "Everything in Level 2",
          "Paid ad campaign setup and management",
          "1 platform: Google, Meta, or Instagram (you choose)",
          "Ad budget management up to ₹5,000/month",
          "Targeting and audience optimisation",
          "Monthly ROI and performance report",
        ],
        notIncluded: [],
      },
    ],
    featuredLevel: 2,
  },
};

type SectionId = "dp" | "fc" | "dm";
type ViewState = "main" | "detail" | "chat" | "confirmation";

interface SelectedPackage {
  sectionId: SectionId;
  sectionName: string;
  level: number;
  packageName: string;
  price: number;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatData {
  companyName: string;
  companyDescription: string;
  displayContent: string;
  brandColors: string[];
  whatsappNumber: string;
  packages: SelectedPackage[];
}

const processCards = [
  { title: "One-Year Warranty", items: ["One-year warranty on all website functionalities.", "Any issues after launch resolved at no additional cost during the warranty period."], icon: "shield" },
  { title: "Advance Payment", items: ["50% upfront payment required to initiate the project.", "Remaining balance paid on or before the website goes live."], icon: "wallet" },
  { title: "Content Submission", items: ["You provide logo, text, product photos, and videos for your website."], icon: "upload" },
  { title: "Layout Selection", items: ["Choose a layout before we begin.", "Provide a reference website, or our experts share template options."], icon: "layout" },
  { title: "Website Delivery", items: ["Your website will be ready within 10 working days."], icon: "rocket" },
  { title: "Source Files", items: ["Complete source files provided once your website goes live."], icon: "code" },
];

function Icon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const map: Record<string, ReactElement> = {
    shield: <svg {...common}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/></svg>,
    wallet: <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 12h2"/></svg>,
    upload: <svg {...common}><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 20h14"/></svg>,
    layout: <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>,
    rocket: <svg {...common}><path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M5 17c-1 2-1 4-1 4s2 0 4-1"/><path d="M19 5c1 4-1 9-5 13"/></svg>,
    code: <svg {...common}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></svg>,
  };
  return map[name];
}

/* ─────────────────────────────────────────────
   Helper: format price in Indian numbering
   ───────────────────────────────────────────── */
function fmtPrice(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

/* ─────────────────────────────────────────────
   Checkmark icon component
   ───────────────────────────────────────────── */
function Check() {
  return (
    <span className="feat-check">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

/* ─────────────────────────────────────────────
   Staircase pricing card
   ───────────────────────────────────────────── */
function PricingCard({
  sectionId,
  sectionName,
  levelData,
  level,
  featuredLevel,
  onViewDetails,
}: {
  sectionId: SectionId;
  sectionName: string;
  levelData: (typeof PACKAGES)[SectionId]["levels"][0];
  level: number;
  featuredLevel: number;
  onViewDetails: (sectionId: SectionId, sectionName: string, level: number) => void;
}) {
  const totalPad = level === 1 ? 30 : level === 2 ? 60 : 90;
  const halfPad = totalPad / 2;
  const marginX = level === 1 ? 60 : level === 2 ? 30 : 0;
  const isFeatured = level === featuredLevel;
  const displayIncludes = levelData.includes.slice(0, 3);
  const remaining = levelData.includes.length - 3;

  return (
    <div
      className={`sc-card${isFeatured ? " sc-card-featured" : ""}`}
      style={{ "--sc-pad-top": halfPad + "px", "--sc-pad-bottom": halfPad + "px", "--sc-margin-x": marginX + "px" } as React.CSSProperties}
    >
      {isFeatured && <span className="sc-badge">Most Online</span>}
      <span className="sc-level">Level {level}</span>
      <h3 className="sc-name">{levelData.name}</h3>
      <p className="sc-tagline">{levelData.tagline}</p>
      <div className="sc-price">
        {fmtPrice(levelData.price)}
        <span className="sc-price-period">/mo</span>
      </div>
      <p className="sc-limitation">{levelData.limitation}</p>
      <div className="sc-divider" />
      <ul className="sc-feats">
        {displayIncludes.map((f) => (
          <li key={f}><Check />{f}</li>
        ))}
        {remaining > 0 && <li className="sc-more">+ {remaining} more</li>}
      </ul>
      <button
        className="sc-cta"
        onClick={() => onViewDetails(sectionId, sectionName, level)}
      >
        View Full Details
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section block — 3 staircase cards
   ───────────────────────────────────────────── */
function SectionBlock({
  section,
  onViewDetails,
}: {
  section: (typeof PACKAGES)[SectionId];
  onViewDetails: (sectionId: SectionId, sectionName: string, level: number) => void;
}) {
  return (
    <div className="sc-section">
      <Reveal>
        <span className="sc-section-badge">{section.icon} {section.section}</span>
        <h3 className="sc-section-title">{section.subtitle}</h3>
        <p className="sc-section-note">
          Each level includes everything in the one before it — pick the level that fits where you are now.
        </p>
      </Reveal>
      <div className="sc-row">
        {section.levels.map((lv) => (
          <Reveal key={lv.level}>
            <PricingCard
              sectionId={section.id as SectionId}
              sectionName={section.section}
              levelData={lv}
              level={lv.level}
              featuredLevel={section.featuredLevel}
              onViewDetails={onViewDetails}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Detail Page
   ───────────────────────────────────────────── */
function getAddonMotivationalLine(sectionId: SectionId, level: number): string {
  const lines: Record<string, Record<number, string>> = {
    dp: {
      1: "A new website works best when people know it exists.",
      2: "Your CRM fills faster when leads come from social.",
      3: "Your AI chatbot needs visitors — marketing brings them.",
    },
    fc: {
      1: "A solid cloud foundation deserves a strong online presence.",
      2: "Your app users start as followers — keep your social active.",
      3: "AI operations + consistent marketing — the complete stack.",
    },
  };
  return lines[sectionId]?.[level] ?? "";
}

function getAddonHeading(sectionId: SectionId, level: number): string {
  const h: Record<string, Record<number, string>> = {
    dp: {
      1: "Start strong — your website deserves an audience",
      2: "Your CRM works better when leads come in consistently",
      3: "Your AI chatbot needs visitors. Marketing brings them.",
    },
    fc: {
      1: "A great cloud setup needs great visibility online",
      2: "Your mobile app users start as social media followers",
      3: "AI operations + AI marketing — the full picture",
    },
  };
  return h[sectionId]?.[level] ?? "";
}

function DetailPage({
  sectionId,
  sectionName,
  level,
  packages,
  onBack,
  onAddAddon,
  onStartChat,
  addonSelected,
}: {
  sectionId: SectionId;
  sectionName: string;
  level: number;
  packages: typeof PACKAGES;
  onBack: () => void;
  onAddAddon: (sectionId: SectionId, level: number) => void;
  onStartChat: () => void;
  addonSelected: boolean;
}) {
  const section = packages[sectionId];
  if (!section) return null;
  const lv = section.levels.find((l) => l.level === level);
  if (!lv) return null;

  const showAddon = sectionId === "dp" || sectionId === "fc";
  const dmLevel = level;
  const dmPkg = packages.dm.levels.find((l: PackageLevel) => l.level === dmLevel);
  const addonLine = getAddonMotivationalLine(sectionId, level);
  const addonHeading = getAddonHeading(sectionId, level);

  // Resolve "Everything in Level X" to actual accumulated features
  function getEffectiveIncludes(targetLevel: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <= targetLevel; i++) {
      const lvl = section.levels.find((l) => l.level === i);
      if (lvl) {
        lvl.includes.forEach((f) => {
          if (!f.startsWith("Everything in Level") && !result.includes(f)) {
            result.push(f);
          }
        });
      }
    }
    return result;
  }

  // All unique real features across all levels (excluding "Everything in Level X")
  const allRealFeatures = section.levels.flatMap((l) =>
    l.includes.filter((f) => !f.startsWith("Everything in Level"))
  );
  const uniqueFeatures = [...new Set(allRealFeatures)];

  // Effective includes for each level (what they actually get, inherited + own)
  const levelEffectiveIncludes = new Map(
    section.levels.map((l) => [l.level, getEffectiveIncludes(l.level)])
  );

  // Ordered levels with selected first
  const orderedLevels = [
    lv,
    ...section.levels.filter((l) => l.level !== level),
  ];

  return (
    <div className="detail-page">
      <div className="detail-inner">
        <button className="detail-back" onClick={onBack}>
          ← Back to all services
        </button>

        <span className="sc-section-badge" style={{ marginBottom: "1rem" }}>
          {section.icon} {section.section}
        </span>
        <h1 className="detail-heading">
          Level {lv.level} — {lv.name}
        </h1>
        <p className="sc-tagline" style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
          {lv.tagline}
        </p>

        <div className="detail-price-block">
          <div className="sc-price" style={{ fontSize: "clamp(2.6rem,4vw,3.6rem)" }}>
            {fmtPrice(lv.price)}
            <span className="sc-price-period">/mo</span>
          </div>
          {level > 1 && (
            <p className="detail-price-note">This includes everything in the levels below</p>
          )}
        </div>

        <div className="detail-section">
          <h3 className="detail-section-title">What's included</h3>
          <ul className="detail-feats">
            {(levelEffectiveIncludes.get(level) ?? lv.includes.filter((f) => !f.startsWith("Everything in Level"))).map((f) => (
              <li key={f}><Check />{f}</li>
            ))}
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="detail-divider" />
        <div className="detail-compare">
          <h3 className="detail-section-title">Compare all levels</h3>
          <div className="detail-compare-table">
            <div className="detail-compare-header">
              <div className="detail-compare-cell detail-compare-label">Feature</div>
              {orderedLevels.map((l) => (
                  <div
                    key={l.level}
                    className={`detail-compare-cell detail-compare-col-head${l.level === level ? " detail-compare-active" : ""}`}
                  >
                    L{l.level}{l.level === level ? " · Selected" : ""}
                  </div>
                ))}
              </div>
            {uniqueFeatures.map((feat) => (
              <div key={feat} className="detail-compare-row">
                <div className="detail-compare-cell detail-compare-label">{feat}</div>
                {orderedLevels.map((l) => {
                  const effective = levelEffectiveIncludes.get(l.level) ?? [];
                  const has = effective.includes(feat);
                  return (
                    <div
                      key={l.level}
                      className={`detail-compare-cell${l.level === level ? " detail-compare-active" : ""}`}
                    >
                      {has ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        <span className="detail-compare-no">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Price row */}
            <div className="detail-compare-row detail-compare-price-row">
              <div className="detail-compare-cell detail-compare-label">Price</div>
              {orderedLevels.map((l) => (
                <div
                  key={l.level}
                  className={`detail-compare-cell${l.level === level ? " detail-compare-active" : ""}`}
                >
                  <strong>{fmtPrice(l.price)}</strong>
                  <span className="sc-price-period">/mo</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showAddon && dmPkg && (
          <>
            <div className="detail-divider" />
            <div className="detail-addon">
              <span className="detail-addon-icon">📣</span>
              <h3 className="detail-addon-title">{addonHeading}</h3>
              <p className="detail-addon-desc">
                Adding <strong>Online Marketing Level {dmLevel}</strong> for just{" "}
                <strong>{fmtPrice(dmPkg.price)}/mo</strong> gets you started with{" "}
                {dmPkg.includes.slice(0, 3).join(", ")}.
              </p>
              <p className="detail-addon-line">{addonLine}</p>
              <div className="detail-addon-cost">
                <span className="detail-addon-cost-label">First month:</span>
                <span className="detail-addon-cost-value">
                  {fmtPrice(lv.price + dmPkg.price)}
                </span>
                <span className="sc-price-period"> ({fmtPrice(lv.price)} + {fmtPrice(dmPkg.price)})</span>
              </div>
              <button
                className={`btn-outline detail-addon-btn${addonSelected ? " detail-addon-btn-active" : ""}`}
                onClick={() => onAddAddon(sectionId, level)}
              >
                {addonSelected ? "✓ Online Marketing Added" : "Add Online Marketing — good strategy"}
              </button>
            </div>
          </>
        )}

        <div className="detail-divider" />
        <div className="detail-chat-cta">
          <button className="btn-fill detail-chat-btn" onClick={onStartChat}>
            Set up free demo{addonSelected ? " (2 services)" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Chat Overlay
   ───────────────────────────────────────────── */
const CHAT_SYSTEM_PROMPT_PREFIX = `You are the friendly onboarding assistant for Shankara, a digital services company.

Your job is to warmly collect the following information in a natural, friendly conversation:
1. Company name and a short description of what they do (service, product, or both)
2. What they want displayed or highlighted on their website/platform — services, products, team, photos, etc.
3. Brand colors — ask them to pick 1 to 3 colors. If they say color names, convert to hex in your head.
4. Their WhatsApp phone number (Indian format preferred, e.g. +91 XXXXXXXXXX)

Rules:
- Start by congratulating them warmly on choosing their packages
- Ask one question at a time. Never ask two things together
- Be conversational and encouraging — this is a small/new business
- When they give colors, confirm them back in plain language (e.g. "Got it — navy blue, white, and a warm gold")
- After collecting the phone number, confirm all details back to them in a friendly summary
- End with: "We'll reach out on WhatsApp within 48 hours with your free demo. You're in good hands 🙌"
- Do NOT ask for payment, email, or any other details
- If they seem unsure about colors, suggest: "Many businesses go with a deep blue and white — clean and trustworthy. Or if your brand is warmer, terracotta and cream works beautifully."

Tone: warm, human, confident but not pushy. Like a knowledgeable friend helping them get started.`;

function ChatOverlay({
  selectedPackages,
  onClose,
  onSubmit,
  chatData,
  setChatData,
}: {
  selectedPackages: SelectedPackage[];
  onClose: () => void;
  onSubmit: (data: ChatData) => void;
  chatData: ChatData;
  setChatData: React.Dispatch<React.SetStateAction<ChatData>>;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hey there! 🎉 Congrats on choosing ${selectedPackages.map((p) => p.packageName).join(" + ")} — that's a great call for where your business is headed. I just need a few quick details so we can put together your free demo. Let's start simple: what's your company called, and what do you do?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [chatStage, setChatStage] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(
    (userMsg: string) => {
      if (!userMsg.trim()) return;

      const newMessages: ChatMessage[] = [
        ...messages,
        { role: "user", content: userMsg.trim() },
      ];
      setMessages(newMessages);
      setInput("");

      // Track collected data based on chat stage
      const updatedData = { ...chatData };
      if (chatStage === 0) {
        // First response: company name + description
        const parts = userMsg.trim().split(/[,.]/);
        updatedData.companyName = parts[0].trim();
        updatedData.companyDescription = userMsg.trim();
        setChatData(updatedData);
        setChatStage(1);

        const reply: ChatMessage = {
          role: "assistant",
          content:
            "That's awesome! Thanks, " +
            parts[0].trim() +
            ". Now — what would you like to showcase on your website? Services, products, team photos, or maybe something else? Give me a rough idea of what content you'd like displayed.",
        };
        setMessages([...newMessages, reply]);
      } else if (chatStage === 1) {
        updatedData.displayContent = userMsg.trim();
        setChatData(updatedData);
        setChatStage(2);

        const reply: ChatMessage = {
          role: "assistant",
          content:
            "Perfect! Now let's talk about your brand look. Do you have 1 to 3 brand colors in mind? If you're not sure, many businesses go with a deep blue and white — clean and trustworthy. Or if your brand is warmer, terracotta and cream works beautifully.",
        };
        setMessages([...newMessages, reply]);
      } else if (chatStage === 2) {
        const colors = userMsg
          .trim()
          .split(/[,/&]+/)
          .map((c) => c.trim())
          .filter(Boolean);
        updatedData.brandColors = colors;
        setChatData(updatedData);
        setChatStage(3);

        const reply: ChatMessage = {
          role: "assistant",
          content:
            "Got it — " +
            colors.join(", ") +
            ". Sounds like a great palette! One last thing: what's your WhatsApp number so we can reach out with your free demo? Indian format works best, e.g. +91 XXXXXXXXXX.",
        };
        setMessages([...newMessages, reply]);
      } else if (chatStage === 3) {
        updatedData.whatsappNumber = userMsg.trim();
        setChatData(updatedData);
        setChatStage(4);

        const packageSummary = selectedPackages
          .map((p) => `${p.packageName} (${fmtPrice(p.price)}/mo)`)
          .join(", ");

        const reply: ChatMessage = {
          role: "assistant",
          content: `Here's a quick summary of everything we've got:

🏢 **Company:** ${updatedData.companyName}
📋 **What they do:** ${updatedData.companyDescription}
🖥️ **Content to showcase:** ${updatedData.displayContent}
🎨 **Brand colors:** ${updatedData.brandColors.join(", ")}
📞 **WhatsApp:** ${updatedData.whatsappNumber}
📦 **Packages selected:** ${packageSummary}

We'll reach out on WhatsApp within 48 hours with your free demo. You're in good hands 🙌`,
        };
        setMessages([...newMessages, reply]);
      }
    },
    [messages, chatStage, chatData, selectedPackages, setChatData],
  );

  const handleSubmit = () => {
    onSubmit(chatData);
  };

  const isComplete = chatStage >= 4;

  return (
    <div className="chat-overlay">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-left">
            <img src={chatLogo} alt="Shankara" className="chat-logo-img" />
            <div>
              <div className="chat-logo-text">Shankara</div>
              <div className="chat-subheading">Let's get started</div>
            </div>
          </div>
          <button className="chat-close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="chat-packages-bar">
          {selectedPackages.map((p, i) => (
            <span key={i} className="chat-package-pill">{p.packageName}</span>
          ))}
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble chat-${msg.role}`}>
              {msg.content}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {!isComplete ? (
          <div className="chat-input-bar">
            <input
              className="chat-input"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage(input);
              }}
            />
            <button className="chat-send" onClick={() => sendMessage(input)} disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="chat-submit-bar">
            <button
              className="btn-fill"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Saving..." : "Save & Submit"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Confirmation Screen
   ───────────────────────────────────────────── */
function ConfirmationScreen({
  chatData,
  onClose,
}: {
  chatData: ChatData;
  onClose: () => void;
}) {
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-card">
        <div className="confirmation-check">✅</div>
        <h2 className="confirmation-title">You're all set, {chatData.companyName}!</h2>
        <p className="confirmation-sub">Here's a summary of what you've chosen:</p>
        <div className="confirmation-pills">
          {chatData.packages.map((p, i) => (
            <span key={i} className="chat-package-pill">{p.packageName}</span>
          ))}
        </div>
        <p className="confirmation-message">
          We'll WhatsApp you at <strong>{chatData.whatsappNumber}</strong> within 48 hours
          with your free demo and next steps.
        </p>
        <p className="confirmation-thanks">Thank you for choosing Shankara.</p>
        <button className="btn-fill" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Index Component
   ───────────────────────────────────────────── */
function Index() {
  const [isApple, setIsApple] = useState(false);
  const [view, setView] = useState<ViewState>("main");
  const [detailSectionId, setDetailSectionId] = useState<SectionId>("dp");
  const [detailSectionName, setDetailSectionName] = useState("");
  const [detailLevel, setDetailLevel] = useState(1);
  const [selectedPackages, setSelectedPackages] = useState<SelectedPackage[]>([]);
  const [addonSelected, setAddonSelected] = useState(false);
  const [chatData, setChatData] = useState<ChatData>({
    companyName: "",
    companyDescription: "",
    displayContent: "",
    brandColors: [],
    whatsappNumber: "",
    packages: [],
  });

  useEffect(() => {
    setIsApple(/iPad|iPhone|iPod|Macintosh|Mac OS/.test(navigator.userAgent));
  }, []);

  const openDetail = useCallback(
    (sectionId: SectionId, sectionName: string, level: number) => {
      setDetailSectionId(sectionId);
      setDetailSectionName(sectionName);
      setDetailLevel(level);
      setAddonSelected(false);
      setView("detail");
      window.scrollTo(0, 0);
    },
    [],
  );

  const handleAddAddon = useCallback(
    (sectionId: SectionId, level: number) => {
      setAddonSelected((prev) => !prev);
      if (!addonSelected) {
        const sectionObj = PACKAGES[sectionId as SectionId];
        const lv = sectionObj.levels.find((l) => l.level === level);
        const dmLv = PACKAGES.dm.levels.find((l: PackageLevel) => l.level === level);
        if (lv && dmLv) {
          setSelectedPackages([
            {
              sectionId: sectionId,
              sectionName: sectionObj.section,
              level,
              packageName: lv.name,
              price: lv.price,
            },
            {
              sectionId: "dm",
              sectionName: "Online Marketing",
              level,
              packageName: dmLv.name,
              price: dmLv.price,
            },
          ]);
        }
      } else {
        setSelectedPackages([]);
      }
    },
    [addonSelected],
  );

  const openChat = useCallback(() => {
    if (selectedPackages.length === 0) {
      const section = PACKAGES[detailSectionId as SectionId];
      const lv = section.levels.find((l) => l.level === detailLevel);
      if (lv) {
        setSelectedPackages([
          {
            sectionId: detailSectionId as SectionId,
            sectionName: section.section,
            level: detailLevel,
            packageName: lv.name,
            price: lv.price,
          },
        ]);
      }
    }
    setView("chat");
    setChatData((prev) => ({ ...prev, packages: selectedPackages }));
  }, [detailSectionId, detailLevel, selectedPackages]);

  const handleChatSubmit = useCallback(
    (data: ChatData) => {
      setChatData(data);
      setView("confirmation");
    },
    [],
  );

  const handleCloseConfirmation = useCallback(() => {
    setView("main");
    setSelectedPackages([]);
    setAddonSelected(false);
    setChatData({
      companyName: "",
      companyDescription: "",
      displayContent: "",
      brandColors: [],
      whatsappNumber: "",
      packages: [],
    });
    window.scrollTo(0, 0);
  }, []);

  const openChatFloating = useCallback(() => {
    setSelectedPackages([]);
    setChatData({
      companyName: "",
      companyDescription: "",
      displayContent: "",
      brandColors: [],
      whatsappNumber: "",
      packages: [],
    });
    setView("chat");
  }, []);

  const sections = [PACKAGES.dp, PACKAGES.fc, PACKAGES.dm];

  return (
    <div id="top">
      <Nav />

      {view === "detail" && (
        <DetailPage
          sectionId={detailSectionId}
          sectionName={detailSectionName}
          level={detailLevel}
          packages={PACKAGES as unknown as typeof PACKAGES}
          onBack={() => {
            setView("main");
            window.scrollTo(0, 0);
          }}
          onAddAddon={handleAddAddon}
          onStartChat={openChat}
          addonSelected={addonSelected}
        />
      )}

      {view === "chat" && (
        <ChatOverlay
          selectedPackages={selectedPackages}
          onClose={() => setView("main")}
          onSubmit={handleChatSubmit}
          chatData={chatData}
          setChatData={setChatData}
        />
      )}

      {view === "confirmation" && (
        <ConfirmationScreen
          chatData={chatData}
          onClose={handleCloseConfirmation}
        />
      )}

      {/* Floating chat button — visible on main & detail pages */}
      {view !== "chat" && view !== "confirmation" && (
        <div className="float-chat-wrap">
          <div className="float-chat-callout">Ask Shankara for a free demo ✨</div>
          <button className="float-chat-btn" onClick={openChatFloating} aria-label="Ask Shankara">
            <img src={chatLogo} alt="Shankara" className="float-chat-logo" />
          </button>
        </div>
      )}

      {view === "main" && (
        <>
          {/* HERO */}
          <header className="hero hero-wrap">
            <div className="hero-inner">
              <div className="hero-media animate-rise" style={{ animationDelay: ".2s" }}>
                {isApple ? (
                  <video src={movVideo} autoPlay loop muted playsInline />
                ) : (
                  <video src={webmVideo} autoPlay loop muted playsInline />
                )}
              </div>
              <div className="hero-content">
                <h1 className="animate-rise" style={{ animationDelay: ".35s" }}>
                  Your business
                  <em>deserves to be online.</em>
                </h1>
                <p className="hero-body animate-rise" style={{ animationDelay: ".5s" }}>
                  Shankara designs and ships interactive websites that work as hard as you do — with honest pricing, a one-year warranty, and a 10-day delivery promise.
                </p>
                <div className="flex flex-wrap gap-3 mb-10 animate-rise justify-center" style={{ animationDelay: ".65s" }}>
                  <a href="#packages" className="btn-fill">See packages →</a>
                  <a href="#process" className="btn-outline">How we work</a>
                </div>
                <div className="flex flex-wrap gap-2 animate-rise justify-center" style={{ animationDelay: ".8s" }}>
                  <span className="pill">Websites that work as hard as you do</span>
                  <span className="pill">10-day delivery</span>
                  <span className="pill">One-year warranty</span>
                  <span className="pill">Honest pricing</span>
                </div>
              </div>
            </div>
          </header>

          {/* PRICING — 3 sections, 3 staircase cards each */}
          <section id="packages" className="price-section">
            <Reveal>
              <span className="section-tag">Pricing</span>
              <h2 className="section-headline">Simple pricing for every stage.</h2>
              <p className="section-sub mx-auto">Choose the plan that fits your business. No hidden fees, no surprises.</p>
            </Reveal>

            {sections.map((sec) => (
              <SectionBlock
                key={sec.id}
                section={sec as unknown as (typeof PACKAGES)[SectionId]}
                onViewDetails={openDetail}
              />
            ))}

            <div className="text-center mt-8">
              <Reveal>
                  <p className="text-sm" style={{ color: "var(--text-muted, #8aa0b0)" }}>
                    Not sure which level fits? <button onClick={openChatFloating} style={{ color: "var(--brand)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Ask Shankara</button> for a free recommendation.
                  </p>
              </Reveal>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="px-[5%] py-24 bg-white">
            <Reveal>
              <span className="section-tag">How we work</span>
              <h2 className="section-headline">A simple, predictable process.</h2>
              <p className="section-sub mb-14">Clear expectations from the first message to launch day. Here's exactly how we work with you.</p>
            </Reveal>
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
              {processCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="pcard h-full">
                    <div className="pcard-icon"><Icon name={c.icon} /></div>
                    <h3>{c.title}</h3>
                    <ul>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="text-center px-[5%] py-24 bg-white">
            <Reveal>
              <span className="section-tag">Get started</span>
              <h2 className="section-headline mx-auto" style={{ maxWidth: 540 }}>Ready to take your business online?</h2>
              <p className="section-sub mx-auto mb-10">Tell us about your business and we'll recommend the right package — no obligation, no hard sell, just honest advice.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-wa">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 .002 11.86C0 5.32 5.335.001 11.892.001A11.821 11.821 0 0 1 23.787 11.88c-.003 6.54-5.339 11.86-11.893 11.86a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982z"/></svg>
                  WhatsApp Us
                </a>
                <a href="mailto:hello@shankara.in" className="btn-outline">Send an Email</a>
                <button
                  className="btn-outline"
                  onClick={openChatFloating}
                >
                  Ask Shankara for a free demo
                </button>
              </div>
            </Reveal>
          </section>

          <footer className="site-footer">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <img src={logo} alt="Shankara" className="w-9 h-6 object-contain opacity-80" />
              <span className="font-heading text-xl font-semibold" style={{ color: "rgba(255,255,255,.85)" }}>Shankara</span>
            </div>
            <p className="text-sm font-light mb-5">Websites that work as hard as you do.</p>
            <div className="flex justify-center gap-8 mb-5">
              <a href="#top" className="footer-link">Home</a>
              <a href="#process" className="footer-link">Process</a>
              <a href="#packages" className="footer-link">Packages</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,.25)" }}>© 2026 Shankara Web Studio. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}
