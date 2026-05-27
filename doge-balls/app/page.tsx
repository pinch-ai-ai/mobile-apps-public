import Image from 'next/image';

const screenshots = [
  {
    src: '/screenshots/game_screen_iPhone_17_Pro.png',
    alt: 'D.O.G.E. Balls gameplay',
    className: 'landscape',
  },
  {
    src: '/screenshots/info_screen_iPhone_17_Pro.png',
    alt: 'D.O.G.E. Balls help screen',
    className: 'landscape',
  },
];

const featureCards = [
  {
    icon: '🎮',
    title: 'Simple Controls',
    description: 'Tap four buttons to move Elon across shelves. Pick up in seconds, hard to put down.',
  },
  {
    icon: '📈',
    title: 'Progressive Difficulty',
    description: 'Play starts with one ball and scale up to four simultaneous balls as your score grows. Stay sharp!',
  },
  {
    icon: '🔊',
    title: '3-Mode Sound System',
    description: 'Off, basic, or full effects — cycle with a tap. Rich sounds: catches, drops, whooshes, and a sad trombone on game over.',
  },
  {
    icon: '🏆',
    title: 'High Score Tracking',
    description: 'Your best "Budget Saved" is auto-saved between sessions. Can you beat your own record?',
  },
  {
    icon: '🎱',
    title: 'Branded Balls',
    description: 'Unique ball-logo designs appear at random. Catch them all!',
  },
  {
    icon: '🥚',
    title: 'Easter Eggs',
    description: 'Hidden surprises are waiting to be discovered. You\'ll know when you find one.',
  },
];

export default function Home() {
  return (
    <main>
      <nav>
        <span className="nav-logo">D.O.G.E. BALLS</span>
        <ul className="nav-links">
          <li><a href="#screenshots">Screenshots</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="/privacy_policy.txt">Privacy</a></li>
          <li><a href="/terms_of_use.txt">Terms</a></li>
        </ul>
      </nav>

      <section className="hero">
        <span className="hero-badge">Available on the App Store</span>
        <h1>
          D.O.G.E.<br />
          <span>Balls</span>
        </h1>
        <p className="subtitle">
          Help Elon Musk catch falling balls and save the Budget! A fast-paced doge-themed arcade game. Miss three and it's game over — how much can you save?
        </p>
        <div className="cta-group">
          <a href="#download" className="btn btn-primary">Download</a>
          <a href="#screenshots" className="btn btn-outline">See Screenshots</a>
        </div>
      </section>

      <div className="divider" />

      <section className="screenshots" id="screenshots">
        <p className="section-label">In Action</p>
        <h2 className="section-title">See the Game</h2>
        <div className="screenshots-row">
          {screenshots.map((shot) => (
            <div key={shot.src} className={`screenshot-frame ${shot.className}`}>
              <Image src={shot.src} alt={shot.alt} width={960} height={540} />
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="features" id="features">
        <div className="features-header">
          <p className="section-label">Why You'll Love It</p>
          <h2 className="section-title">Features</h2>
        </div>
        <div className="features-grid">
          {featureCards.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="download" id="download">
        <p className="section-label">Get the App</p>
        <h2>Download Now</h2>
        <p>Available on iPhone, iPad, and Mac.</p>
        <div className="store-badges">
          <a href="#" className="store-badge" aria-label="Download on the App Store">
            <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="App Store Badge" width={160} height={48} />
          </a>
          <a href="#" className="store-badge" aria-label="Download on the Mac App Store">
            <Image src="/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Mac App Store Badge" width={160} height={48} />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-links">
          <a href="/privacy_policy.txt">Privacy Policy</a>
          <a href="/terms_of_use.txt">Terms of Use</a>
          <a href="mailto:appsupport@ulanoff.com">Contact</a>
        </div>
        <p>&copy; 2026 RUS GraFX. All rights reserved.</p>
      </footer>
    </main>
  );
}
