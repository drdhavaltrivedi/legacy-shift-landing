import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const CAL_URL = "https://cal.com/vikas-singh-bril/free-consultation?overlayCalendar=true&layout=month_view";

  return (
    <main>
      <div className="blur-blob"></div>
      <div className="blur-blob blur-blob-2"></div>
      <div className="floating-particle p1"></div>
      <div className="floating-particle p2"></div>

      {/* NAV */}
      <nav>
        <div className="nav-scroll-progress"></div>
        <div className="logo">Legacy<span>Shift</span></div>
        <div className="nav-links">
          <a href="#problem">The Problem</a>
          <a href="#process">How It Works</a>
          <a href="#results">Results</a>
          <a href="#cta">Contact</a>
        </div>
        <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">Book a Call</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-visual">
          <Image 
            src="/images/cinematic_team_v2_1774513460699.png" 
            alt="Collaborative AI Engineering" 
            className="hero-img"
            fill
            priority
            quality={90}
          />
        </div>
        
        <div className="hero-content">
          <div className="section-tag">Now Accepting Teams for Q2 2026</div>
          <h1>Your legacy codebase isn't the problem. <em>Your tools are.</em></h1>
          <p className="hero-sub" style={{ margin: '2rem auto' }}>
            We embed AI into your existing dev workflows so your team ships 3× faster without rewriting a single line of legacy code.
          </p>
          
          <div className="hero-actions">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Get Your Free Audit</a>
            <a href="#process" className="btn-secondary">See How It Works</a>
          </div>

          <div className="hero-proof">
            <div className="proof-stat">
              <div className="num">3×</div>
              <div className="label">Faster Delivery</div>
            </div>
            <div className="proof-divider"></div>
            <div className="proof-stat">
              <div className="num">40%</div>
              <div className="label">Less Tech Debt</div>
            </div>
            <div className="proof-divider"></div>
            <div className="proof-stat">
              <div className="num">0</div>
              <div className="label">Rewrites Needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section" id="problem">
        <div className="section-tag">The Reality</div>
        <h2 className="section-title">Your team has 3+ years of battle-tested domain knowledge. That's an asset, not a liability.</h2>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-visual">
              <Image 
                src="/images/abstract_tech_visual_1774513443319.png" 
                alt="Velocity Infographic" 
                className="card-infographic"
                width={400}
                height={200}
              />
            </div>
            <h3>Slowing Velocity</h3>
            <p>Feature delivery takes 3× longer than year one. Every change touches a web of dependencies nobody fully maps anymore.</p>
          </div>
          <div className="pain-card">
            <div className="pain-visual">
               <Image 
                src="/images/grunt_work_infographic_1774513597034.png" 
                alt="Automation Infographic" 
                className="card-infographic"
                width={400}
                height={200}
              />
            </div>
            <h3>Repetitive Grunt Work</h3>
            <p>Your senior engineers spend 40% of their time on boilerplate, migrations, and manual testing instead of solving real problems.</p>
          </div>
          <div className="pain-card">
            <div className="pain-visual">
              <Image 
                src="/images/knowledge_bottleneck_infographic_1774513615215.png" 
                alt="Knowledge Bottleneck Infographic" 
                className="card-infographic"
                width={400}
                height={200}
              />
            </div>
            <h3>Knowledge Bottlenecks</h3>
            <p>Critical system knowledge lives in 2–3 people's heads. Onboarding takes months. Bus factor keeps leadership up at night.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="section-tag">Our Process</div>
        <h2 className="section-title">Four weeks from audit to acceleration.</h2>
        <div className="steps-container">
          {[
            { 
              num: "01", 
              week: "Week 1", 
              title: "Codebase Deep Dive", 
              desc: "We analyze your architecture, dependencies, workflows, and team bottlenecks. No generic assessments. We map your specific friction points." 
            },
            { 
              num: "02", 
              week: "Week 2", 
              title: "AI Integration Blueprint", 
              desc: "Custom strategy for embedding AI tools into your existing CI/CD, code review, testing, and documentation workflows. Fits your stack, not the other way around." 
            },
            { 
              num: "03", 
              week: "Week 3", 
              title: "Guided Implementation", 
              desc: "We work alongside your team to deploy AI-assisted workflows. Pair programming, live configuration, real-time knowledge transfer. No thrown-over-the-wall handoffs." 
            },
            { 
              num: "04", 
              week: "Week 4", 
              title: "Measure & Optimize", 
              desc: "Track cycle time, PR throughput, and developer satisfaction. We fine-tune until the numbers prove the impact, then hand you the keys." 
            }
          ].map((step, i) => (
            <div key={i} className="step-row">
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="step-duration">{step.week}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="section" id="results">
        <div className="section-tag">Impact</div>
        <h2 className="section-title">What teams experience after LegacyShift.</h2>
        <div className="results-grid">
          {[
            { num: "68%", label: "Reduction in time spent on boilerplate code" },
            { num: "3.2\u00D7", label: "Faster pull request turnaround" },
            { num: "50%", label: "Faster onboarding for new engineers" },
            { num: "91%", label: "Dev satisfaction with new workflows" }
          ].map((res, i) => (
            <div key={i} className="result-card">
              <div className="result-number">{res.num}</div>
              <div className="result-label">{res.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ paddingBottom: '10rem' }}>
        <div className="section-tag" style={{ textAlign: 'center', display: 'block', margin: '0 auto 3rem' }}>Success Stories</div>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 4rem', maxWidth: '800px' }}>Helping global teams reclaim their velocity.</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <Image 
                src="/images/testimonial_usa_1774513268571.png" 
                alt="Mark Thompson" 
                width={64} 
                height={64} 
                className="author-img"
              />
              <div className="author-info">
                <strong>Mark Thompson</strong>
                <span>CTO, FinStream NYC</span>
                <span className="location">\uD83C\uDDFA\uD83C\uDDF8 New York, USA</span>
              </div>
            </div>
            <p className="testimonial-quote">"Implementing LegacyShift's AI workflows saved our senior team over 15 hours a week. We were drowning in technical debt from our 10-year monolith; now we're shipping like a Day 1 startup."</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <Image 
                src="/images/testimonial_spain_1774513290497.png" 
                alt="Elena Rodriguez" 
                width={64} 
                height={64} 
                className="author-img"
              />
              <div className="author-info">
                <strong>Elena Rodriguez</strong>
                <span>Head of Engineering, LogiTech BCN</span>
                <span className="location">\uD83C\uDDEA\uD83C\uDDF8 Barcelona, Spain</span>
              </div>
            </div>
            <p className="testimonial-quote">"La integraci\u00F3n de IA en nuestra arquitectura heredada fue impecable. In just 4 weeks, our deployment frequency tripled. It's the most impactful engineering investment we've made this year."</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <h2>Ready to unlock your team's full velocity?</h2>
        <p>Book a free 30-minute codebase audit. No commitments, just clarity.</p>
        <div className="cta-form">
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', maxWidth: '320px', textDecoration: 'none' }}>
            Book Free Audit Now \u2192
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">Legacy<span>Shift</span></div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:hello@legacyshift.dev">hello@legacyshift.dev</a>
        </div>
        <div>\u00A9 2026 LegacyShift</div>
      </footer>

      {/* Theme Toggle */}
      <button className="theme-toggle" aria-label="Toggle theme">
        <span className="theme-icon icon-moon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </span>
        <span className="theme-icon icon-sun">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </span>
      </button>
    </main>
  );
}
