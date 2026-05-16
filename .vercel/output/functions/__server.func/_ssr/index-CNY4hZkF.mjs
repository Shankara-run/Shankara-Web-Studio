import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const logo = "/assets/logo-tLXqiqQl.png";
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: `nav-shell ${scrolled ? "scrolled" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5 no-underline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Shankara", className: "nav-brand-logo w-11 h-7 object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-brand font-heading text-xl font-semibold tracking-wide", children: "Shankara" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex items-center gap-9 list-none m-0 p-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#process", className: "nav-link", children: "Process" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#packages", className: "nav-link", children: "Packages" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "nav-link nav-pill", children: "Enquire Now" }) })
    ] })
  ] });
}
function Reveal({ children, delay = 0, className = "" }) {
  const ref = reactExports.useRef(null);
  const [vis, setVis] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style = { transitionDelay: `${delay}ms` };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${vis ? "vis" : ""} ${className}`, style, children });
}
const movVideo = "/assets/Withemoticon_safari-jASFRd89.mov";
const webmVideo = "/assets/Withemoticon-Dkl0XQ4O.webm";
const processCards = [{
  title: "One-Year Warranty",
  items: ["One-year warranty on all website functionalities.", "Any issues after launch resolved at no additional cost during the warranty period."],
  icon: "shield"
}, {
  title: "Advance Payment",
  items: ["50% upfront payment required to initiate the project.", "Remaining balance paid on or before the website goes live."],
  icon: "wallet"
}, {
  title: "Content Submission",
  items: ["You provide logo, text, product photos, and videos for your website."],
  icon: "upload"
}, {
  title: "Layout Selection",
  items: ["Choose a layout before we begin.", "Provide a reference website, or our experts share template options."],
  icon: "layout"
}, {
  title: "Website Delivery",
  items: ["Your website will be ready within 10 working days."],
  icon: "rocket"
}, {
  title: "Source Files",
  items: ["Complete source files provided once your website goes live."],
  icon: "code"
}];
const launchFeats = [".in Domain Registration", "Web Hosting", "Professional Email", "Basic SSL Certificate", "Start-Up Website", "Complimentary Logo"];
const launchFound = [["Professional Domain-Based Email", "Build trust with clients using an official email address linked to your domain name."], ["Secure Domain Ownership", "Domain registered under your ownership — full control and your digital identity safeguarded."], ["Online Presence on Google", "When potential clients search for your name, they'll find your website displaying essential details."], ["Free Logo & Brand Identity", "A complimentary logo design to establish your brand identity at no extra cost."]];
const growFeats = ["Everything in Start-Up", "Custom Business Website", "CRM Integration", "Billing Software", "Google Analytics", "WhatsApp Enquiry Button", "SEO-Ready Structure", "Mobile Optimised"];
const growFound = [["Built Around Your Brand", "Custom-designed pages that reflect your business identity, products, and services precisely."], ["CRM — Manage Your Leads", "Track contacts, deals, and follow-ups from one place. Never lose a client opportunity again."], ["Billing & Invoicing, Simplified", "Send quotes, invoices, and payment links directly from your business platform."], ["Rank Higher, Reach Further", "SEO-ready architecture and analytics so you're found by the right people at the right time."]];
const scaleFeats = ["Everything in Business", "AI Chat on Website", "WhatsApp AI Integration", "Analytics Dashboard", "Automated Lead Capture", "24/7 AI Customer Response", "Custom AI Model Training", "Monthly Performance Reports"];
const scaleFound = [["AI Chat — Always On", "An AI assistant trained on your business responds to enquiries instantly, day and night."], ["WhatsApp Business AI", "Automate responses, bookings, and lead qualification on WhatsApp — fully hands-free."], ["Business Intelligence Dashboard", "See who's visiting, what they're asking, and where leads come from — in one clear view."], ["Continuous AI Improvement", "Monthly model updates keep your AI sharp and your business moving forward every month."]];
function Check() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "feat-check", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "9", height: "9", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 6 9 17l-5-5" }) }) });
}
function PackageBlock({
  variant,
  num,
  badge,
  name,
  price,
  note,
  desc,
  feats,
  found
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `pkg-section pkg-${variant}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pkg-grid relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pkg-ghost", children: num }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pkg-badge", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dot" }),
        badge
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pkg-name", style: {
        whiteSpace: "pre-line",
        ...variant === "scale" ? {
          color: "#fff"
        } : {}
      }, children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pkg-price", children: price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pkg-note", children: note }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pkg-desc", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: variant === "scale" ? "btn-ghost-light" : "btn-fill", children: "Enquire Now →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feat-box", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feat-label", children: "Package Includes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "feat-list", children: feats.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, {}),
          f
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-none p-0 m-0", children: found.map(([h, p], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "found-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "found-num", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "found-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { style: variant === "scale" ? {
            color: "#fff"
          } : void 0, children: h }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p })
        ] })
      ] }, h)) })
    ] })
  ] }) }) });
}
function Icon({
  name
}) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const map = {
    shield: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...common, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" }) }),
    wallet: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { ...common, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "6", width: "18", height: "13", rx: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 12h2" })
    ] }),
    upload: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { ...common, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 16V4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m7 9 5-5 5 5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 20h14" })
    ] }),
    layout: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { ...common, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 3v18M3 9h18" })
    ] }),
    rocket: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { ...common, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 17c-1 2-1 4-1 4s2 0 4-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 5c1 4-1 9-5 13" })
    ] }),
    code: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { ...common, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" }) })
  };
  return map[name];
}
const pricing = [{
  id: "launch",
  audience: "For Start-Up Companies",
  price: "₹3,500",
  popular: false
}, {
  id: "grow",
  audience: "For Established Companies",
  price: "₹8,500",
  popular: true
}, {
  id: "scale",
  audience: "For Companies Scaling with AI",
  price: "₹12,500",
  popular: false
}];
function Index() {
  const [isApple, setIsApple] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsApple(/iPad|iPhone|iPod|Macintosh|Mac OS/.test(navigator.userAgent));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "hero hero-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow animate-rise", style: {
          animationDelay: ".1s"
        }, children: "Web Design Studio · Chennai" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-rise", style: {
          animationDelay: ".25s"
        }, children: [
          "Your business",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "deserves to be online." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-body animate-rise", style: {
          animationDelay: ".4s"
        }, children: "Shankara designs and ships interactive websites that work as hard as you do — with honest pricing, a one-year warranty, and a 10-day delivery promise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-10 animate-rise", style: {
          animationDelay: ".55s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#packages", className: "btn-fill", children: "See packages →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#process", className: "btn-outline", children: "How we work" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 animate-rise", style: {
          animationDelay: ".7s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill", children: "Websites that work as hard as you do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill", children: "10-day delivery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill", children: "One-year warranty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill", children: "Honest pricing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-media animate-rise", style: {
        animationDelay: ".4s"
      }, children: isApple ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: movVideo, autoPlay: true, loop: true, muted: true, playsInline: true }) : /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: webmVideo, autoPlay: true, loop: true, muted: true, playsInline: true }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "packages", className: "price-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-tag", children: "Pricing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-headline", children: "Simple pricing for every stage." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub mx-auto", children: "Choose the plan that fits your business. No hidden fees, no surprises." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-grid", children: pricing.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `price-card${p.popular ? " price-popular" : ""}`, children: [
        p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "price-badge", children: "Most Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "price-audience", children: p.audience }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "price-amount", children: [
          p.price,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "price-period", children: "/month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${p.id}-detail`, className: "price-cta", children: "View Plan" })
      ] }) }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "launch-detail", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageBlock, { variant: "launch", num: "01", badge: "Launch Stage", name: "All-Inclusive\nStart-Up Package", price: "₹3,500", note: "One-time payment", desc: "Not ready for a full-scale business website? Get a professional email with your own domain — plus a clean startup website to establish your presence from day one.", feats: launchFeats, found: launchFound }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "grow-detail", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageBlock, { variant: "grow", num: "02", badge: "Grow Stage", name: "Business\nCustom Package", price: "₹8,500", note: "One-time payment", desc: "Your business is unique — your website should be too. A fully custom-built site with CRM and billing tools to manage leads, send invoices, and grow efficiently.", feats: growFeats, found: growFound }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "scale-detail", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageBlock, { variant: "scale", num: "03", badge: "Scale Stage · AI", name: "Fully AI-Powered\nBusiness Model", price: "₹12,500", note: "One-time payment", desc: "The future of business is AI-driven. Automate customer interactions, capture leads 24/7, and make data-backed decisions — all integrated into your business model.", feats: scaleFeats, found: scaleFound }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "process", className: "px-[5%] py-24 bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-tag", children: "How we work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-headline", children: "A simple, predictable process." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub mb-14", children: "Clear expectations from the first message to launch day. Here's exactly how we work with you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5", style: {
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))"
      }, children: processCards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pcard h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pcard-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: c.icon }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: c.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: it }, it)) })
      ] }) }, c.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "text-center px-[5%] py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-tag", children: "Get started" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-headline mx-auto", style: {
        maxWidth: 540
      }, children: "Ready to take your business online?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub mx-auto mb-10", children: "Tell us about your business and we'll recommend the right package — no obligation, no hard sell, just honest advice." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919999999999", target: "_blank", rel: "noreferrer", className: "btn-wa", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "#fff", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163A11.867 11.867 0 0 1 .002 11.86C0 5.32 5.335.001 11.892.001A11.821 11.821 0 0 1 23.787 11.88c-.003 6.54-5.339 11.86-11.893 11.86a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982z" }) }),
          "WhatsApp Us"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@shankara.in", className: "btn-outline", children: "Send an Email" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "site-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2.5 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Shankara", className: "w-9 h-6 object-contain opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xl font-semibold", style: {
          color: "rgba(255,255,255,.85)"
        }, children: "Shankara" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-light mb-5", children: "Websites that work as hard as you do." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-8 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "footer-link", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#process", className: "footer-link", children: "Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#packages", className: "footer-link", children: "Packages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "footer-link", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: {
        color: "rgba(255,255,255,.25)"
      }, children: "© 2026 Shankara Web Studio. All rights reserved." })
    ] })
  ] });
}
export {
  Index as component
};
