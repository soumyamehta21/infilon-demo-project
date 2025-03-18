import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

export const mainNav = [
  { name: "Home", url: "/infilon-demo-project", component: Home },
  { name: "About us", url: "/infilon-demo-project/about", component: About },
  {
    name: "Services",
    url: "/infilon-demo-project/services",
    component: Services,
  },
  { name: "Contact", url: "/infilon-demo-project/contact", component: Contact },
];

export const footerNav = [
  { name: "FAQ", url: "/infilon-demo-project/faq", component: FAQ },
  { name: "Privacy", url: "/infilon-demo-project/privacy", component: Privacy },
  { name: "Support", url: "/infilon-demo-project/support", component: Support },
  { name: "Contact", url: "/infilon-demo-project/contact", component: Contact },
];
