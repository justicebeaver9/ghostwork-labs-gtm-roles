const roles = [
  { title: "Enterprise Account Executive", company: "Series B AI Infrastructure", location: "Remote (US)", ote: "$320K – $420K OTE", base: "Base ~$160K", tags: ["Enterprise", "AI", "Remote"], insights: "Sales team of 8 AEs. Quota ~$1.8M. Strong accelerators past 100%. Manager is former AE who hit 140% last year. Ramp 4–5 months. Equity meaningful at this stage." },
  { title: "Mid-Market AE", company: "Growth-stage DevTools SaaS", location: "Austin / Remote", ote: "$220K – $260K OTE", base: "Base $115K", tags: ["Mid-Market", "DevTools"], insights: "High velocity motion. Average sales cycle 45 days. Team attainment ~85% last quarter. Clear path to enterprise. Comp plan 50/50 with 1.5x accelerator." },
  { title: "Senior SDR", company: "Series A Cybersecurity", location: "Remote (US)", ote: "$105K – $125K OTE", base: "Base $70K", tags: ["SDR", "Cyber"], insights: "Outbound-heavy. Meeting-to-opp conversion tracked publicly on RepVue. AE close rate solid. Promotion path to AE within 12–18 months for top performers." },
  { title: "VP of Sales", company: "Seed / Series A Vertical SaaS", location: "SF / Remote", ote: "$280K – $360K OTE + equity", base: "Base $160–180K", tags: ["Leadership", "Early Stage"], insights: "Build the motion from scratch. Current team of 3. Founder-led sales transitioning. Significant equity (0.5–1%). Looking for someone who has taken a team from $1M to $5M ARR." }
];
function renderRoles() {
  const grid = document.getElementById('roleGrid');
  grid.innerHTML = roles.map(r => `<div class="role-card"><h3>${r.title}</h3><div class="company">${r.company}</div><div>${r.location}</div><div class="comp-highlight">${r.ote}</div><div>${r.base}</div><div class="insights">${r.insights}</div><div>${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div></div>`).join('');
}
document.addEventListener('DOMContentLoaded', renderRoles);
document.getElementById('stripeLink').addEventListener('click', (e) => { e.preventDefault(); alert('Stripe Payment Link will be added once your Stripe account is connected. For now, email ghostworklabs@gmail.com to subscribe.'); });