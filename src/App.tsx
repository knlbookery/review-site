import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Star, Shield, Smartphone, CreditCard, Calendar, Users, TrendingUp, Award, Printer as Print, Volume2, VolumeX, Play, Pause, Clock } from 'lucide-react';

const slides = [
  {
    id: 'intro',
    title: 'KnLbookery',
    subtitle: 'Your Beauty. Our Passion. Simplified.',
    kicker: 'Business Pitch Deck',
    audioFile: '/audio/slide-01-intro.mp3',
    content: (
      <div>
        <ul className="space-y-3 text-lg text-slate-300 mb-8">
          <li>All-in-one platform connecting customers with verified beauty professionals.</li>
          <li>Book in minutes • Pay securely • Get 5★ service.</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all">
            Book Now
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all">
            Join as a Specialist
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all">
            Talk to Sales
          </button>
        </div>
      </div>
    )
  },
  {
    id: 'problem',
    title: 'The Problem',
    audioFile: '/audio/slide-02-problem.mp3',
    content: (
      <div>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Customers</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Hard to find trusted professionals</li>
              <li>Booking is messy: calls, no‑shows, conflicts</li>
              <li>Unclear pricing and quality standards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Specialists</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Low digital visibility and discoverability</li>
              <li>Juggling DMs, calls, and payments</li>
              <li>No simple analytics to grow revenue</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-400 italic text-center">
          A fragmented market leads to lost time, lost trust, and lost revenue.
        </p>
      </div>
    )
  },
  {
    id: 'opportunity',
    title: 'The Opportunity',
    audioFile: '/audio/slide-03-opportunity.mp3',
    content: (
      <div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              $500B+
            </div>
            <div className="text-sm text-slate-400 mb-2">Global Beauty & Personal Care</div>
            <div className="text-xs text-slate-500">Massive, growing market</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              ↑ Fast
            </div>
            <div className="text-sm text-slate-400 mb-2">Bookings Go Digital</div>
            <div className="text-xs text-slate-500">On-demand, mobile-first shift</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Top 3
            </div>
            <div className="text-sm text-slate-400 mb-2">Trust Matters</div>
            <div className="text-xs text-slate-500">Verified reviews drive decisions</div>
          </div>
        </div>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            Consumers expect seamless, verified, mobile-first experiences.
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            Specialists need tools that reduce admin and increase earnings.
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'solution',
    title: 'The KnLbookery Solution',
    audioFile: '/audio/slide-04-solution.mp3',
    content: (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <Calendar className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Smart Booking</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Real-time availability</li>
            <li>• No-hassle scheduling</li>
            <li>• Multi-service appointments</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <CreditCard className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Secure Payments</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Transparent pricing</li>
            <li>• Instant receipts</li>
            <li>• Payouts for pros</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <Shield className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Verified Network</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Background checks</li>
            <li>• Skill validation</li>
            <li>• Transparent reviews</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
          <Smartphone className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Mobile-First UX</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Responsive app</li>
            <li>• PWA & native-ready</li>
            <li>• Delightful UI</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'how-it-works',
    title: 'How It Works',
    audioFile: '/audio/slide-05-how-it-works.mp3',
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6" />
            Customer
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium">Discover services & stylists</p>
                <p className="text-sm text-slate-400">Browse our verified professional network</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium">Compare by rating, location, availability</p>
                <p className="text-sm text-slate-400">Make informed decisions with real data</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium">Book instantly & pay securely</p>
                <p className="text-sm text-slate-400">Seamless checkout experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <p className="font-medium">Enjoy service & leave a review</p>
                <p className="text-sm text-slate-400">Help build our trusted community</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6" />
            Specialist
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium">Register & verify profile</p>
                <p className="text-sm text-slate-400">Complete verification process for trust</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium">Showcase portfolio & pricing</p>
                <p className="text-sm text-slate-400">Display your work and set your rates</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium">Manage calendar & get bookings</p>
                <p className="text-sm text-slate-400">Control your schedule, grow your business</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <p className="font-medium">Deliver service & get paid</p>
                <p className="text-sm text-slate-400">Focus on what you do best</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'customer-love',
    title: 'Why Customers Love Us',
    audioFile: '/audio/slide-06-customer-love.mp3',
    content: (
      <ul className="space-y-4 text-lg text-slate-300">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Book anytime, anywhere—no calls
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Only verified professionals
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Clear, upfront pricing
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Loyalty rewards for repeat bookings
        </li>
      </ul>
    )
  },
  {
    id: 'specialist-love',
    title: 'Why Specialists Love Us',
    audioFile: '/audio/slide-07-specialist-love.mp3',
    content: (
      <ul className="space-y-4 text-lg text-slate-300">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          More bookings with less admin
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Portfolio + reviews boost trust
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Integrated payments—no chasing
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
          Revenue & performance analytics
        </li>
      </ul>
    )
  },
  {
    id: 'business-model',
    title: 'Business Model',
    audioFile: '/audio/slide-08-business-model.mp3',
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Revenue</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Up to GHS10 booking fee
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Premium subscriptions (pro tools, boosted profile)
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Advertising & brand partnerships
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Pricing Promise</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Transparent fees—no surprises
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Value-driven plans for every stage
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'go-to-market',
    title: 'Go-To-Market',
    audioFile: '/audio/slide-09-go-to-market.mp3',
    content: (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Phase 1 • City Launch</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Seed stylists in key neighborhoods</li>
            <li>• Local partnerships & ambassador program</li>
            <li>• Targeted social + referral incentives</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Phase 2 • Regional Scale</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Expand supply with verification pipeline</li>
            <li>• Optimize pricing & promos by cohort</li>
            <li>• Partnerships with salons & academies</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Phase 3 • Diversify</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Add wellness services</li>
            <li>• E‑commerce for products</li>
            <li>• Corporate wellness / events</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'competitive-edge',
    title: 'Competitive Edge',
    audioFile: '/audio/slide-10-competitive-edge.mp3',
    content: (
      <ul className="space-y-4 text-lg text-slate-300">
        <li className="flex items-start gap-3">
          <Star className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
          Beauty-specialized vs. generic service apps
        </li>
        <li className="flex items-start gap-3">
          <Star className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
          Real-time availability—not request-and-wait
        </li>
        <li className="flex items-start gap-3">
          <Star className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
          Deep verification & transparent reviews
        </li>
        <li className="flex items-start gap-3">
          <Star className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
          Integrated payments + analytics for pros
        </li>
      </ul>
    )
  },
  {
    id: 'traction',
    title: 'Traction & Targets',
    audioFile: '/audio/slide-11-traction.mp3',
    content: (
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <div className="text-sm text-slate-400 mb-2">Target Active Users (12 mo)</div>
            <div className="text-xs text-slate-500">MAU goal</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm text-slate-400 mb-2">Verified Specialists</div>
            <div className="text-xs text-slate-500">Supply goal</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              95%+
            </div>
            <div className="text-sm text-slate-400 mb-2">Satisfaction</div>
            <div className="text-xs text-slate-500">Post‑service rating</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-sm text-slate-400 mb-2">Reliability</div>
            <div className="text-xs text-slate-500">Platform uptime</div>
          </div>
        </div>
        <p className="text-center text-slate-400 italic">
          Milestones drive product‑market fit and sustainable unit economics.
        </p>
      </div>
    )
  },
  {
    id: 'security',
    title: 'Security & Trust',
    audioFile: '/audio/slide-12-security.mp3',
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Data & Privacy</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              End‑to‑end encrypted transmission
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              GDPR‑aligned data handling
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Multi‑factor authentication
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quality & Safety</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Background & license checks
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Continuous review monitoring
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              Dispute resolution framework
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'technology',
    title: 'Technology Overview',
    audioFile: '/audio/slide-13-technology.mp3',
    content: (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Frontend</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• React + TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• PWA readiness</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Backend</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Supabase (auth + DB)</li>
            <li>• Edge Functions</li>
            <li>• Real-time subs</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Integrations</h3>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>• Payments</li>
            <li>• Maps & GPS</li>
            <li>• Notifications</li>
            <li>• Analytics</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'call-to-action',
    title: 'Call to Action',
    audioFile: '/audio/slide-14-call-to-action.mp3',
    content: (
      <div>
        <ul className="space-y-3 text-lg text-slate-300 mb-8">
          <li>• Website: knlbookery.com</li>
          <li>• Support: knlbookery@mail.com</li>
          <li>• Social: @KnLbookery</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 text-lg bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all">
            Book Your First Service
          </button>
          <button className="px-6 py-3 text-lg bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all">
            Register as a Specialist
          </button>
          <button className="px-6 py-3 text-lg bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all">
            Schedule a Demo
          </button>
        </div>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [autoNavigationCountdown, setAutoNavigationCountdown] = useState<number | null>(null);
  const [isAutoNavigationEnabled, setIsAutoNavigationEnabled] = useState(true);

  const nextSlide = () => {
    setAutoNavigationCountdown(null);
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setAutoNavigationCountdown(null);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setAutoNavigationCountdown(null);
    setCurrentSlide(index);
  };

  // Auto-navigation after audio ends
  const startAutoNavigation = () => {
    if (!isAutoNavigationEnabled || currentSlide >= slides.length - 1) return;
    
    let countdown = 3;
    setAutoNavigationCountdown(countdown);
    
    const countdownInterval = setInterval(() => {
      countdown -= 1;
      setAutoNavigationCountdown(countdown);
      
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        setAutoNavigationCountdown(null);
        nextSlide();
      }
    }, 1000);
    
    // Store interval ID for cleanup
    return countdownInterval;
  };

  const cancelAutoNavigation = () => {
    setAutoNavigationCountdown(null);
  };

  // Audio management functions
  const stopCurrentAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const playSlideAudio = async (audioFile: string) => {
    if (!isAudioEnabled || !audioFile) return;

    try {
      stopCurrentAudio();
      setAudioError(null);
      setAutoNavigationCountdown(null);

      const audio = new Audio(audioFile);
      audio.preload = 'auto';
      
      // Set up event listeners
      audio.addEventListener('loadstart', () => {
        console.log('Audio loading started:', audioFile);
      });

      audio.addEventListener('canplaythrough', () => {
        console.log('Audio can play through:', audioFile);
      });

      audio.addEventListener('play', () => {
        setIsPlaying(true);
      });

      audio.addEventListener('pause', () => {
        setIsPlaying(false);
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        // Start auto-navigation countdown when audio ends
        setTimeout(() => {
          startAutoNavigation();
        }, 500);
      });

      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        setAudioError(`Failed to load audio: ${audioFile}`);
        setIsPlaying(false);
      });

      setCurrentAudio(audio);

      // Attempt to play with fallback for autoplay restrictions
      try {
        await audio.play();
      } catch (playError) {
        console.warn('Autoplay prevented:', playError);
        setAudioError('Click to enable audio playback');
      }
    } catch (error) {
      console.error('Error setting up audio:', error);
      setAudioError('Audio system error');
    }
  };

  const toggleAudio = () => {
    if (currentAudio) {
      if (isPlaying) {
        currentAudio.pause();
      } else {
        currentAudio.play().catch(error => {
          console.warn('Play failed:', error);
          setAudioError('Unable to play audio');
        });
      }
    }
  };

  const toggleAudioEnabled = () => {
    setIsAudioEnabled(!isAudioEnabled);
    if (isAudioEnabled) {
      stopCurrentAudio();
      setAutoNavigationCountdown(null);
    }
  };

  const toggleAutoNavigation = () => {
    setIsAutoNavigationEnabled(!isAutoNavigationEnabled);
    if (!isAutoNavigationEnabled) {
      setAutoNavigationCountdown(null);
    }
  };

  // Effect to handle slide changes and audio playback
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.audioFile) {
      // Small delay to ensure slide transition is complete
      const timer = setTimeout(() => {
        playSlideAudio(currentSlideData.audioFile!);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isAudioEnabled]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        cancelAutoNavigation();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        cancelAutoNavigation();
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancelAutoNavigation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopCurrentAudio();
      setAutoNavigationCountdown(null);
    };
  }, []);

  const currentSlideData = slides[currentSlide];
  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col relative">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-violet-400/12 rounded-full blur-3xl transform translate-x-16 md:translate-x-32 -translate-y-16 md:-translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl transform -translate-x-16 md:-translate-x-32 translate-y-16 md:translate-y-32"></div>
      </div>

      {/* Auto-navigation countdown overlay */}
      {autoNavigationCountdown !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6 md:p-8 text-center max-w-sm mx-4">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Next Slide</h3>
            <p className="text-slate-300 mb-4">Automatically advancing in</p>
            <div className="text-4xl font-bold text-cyan-400 mb-4">{autoNavigationCountdown}</div>
            <button
              onClick={cancelAutoNavigation}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Main slide content */}
      <div className="flex-1 relative z-10 p-3 sm:p-6 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-md shadow-2xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col">
            {/* Kicker for first slide */}
            {currentSlideData.kicker && (
              <div className="inline-block px-2 py-1 text-xs sm:text-xs uppercase tracking-wider text-violet-200 bg-violet-500/20 border border-violet-500/30 rounded-full mb-4 sm:mb-6 self-start">
                {currentSlideData.kicker}
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Subtitle for first slide */}
            {currentSlideData.subtitle && (
              <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-semibold italic mb-4 sm:mb-6 md:mb-8">
                {currentSlideData.subtitle}
              </h2>
            )}

            {/* Audio Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <button
                onClick={toggleAudioEnabled}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors min-h-[36px] ${
                  isAudioEnabled 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {isAudioEnabled ? <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span className="hidden sm:inline">{isAudioEnabled ? 'Audio On' : 'Audio Off'}</span>
                <span className="sm:hidden">{isAudioEnabled ? 'On' : 'Off'}</span>
              </button>
              
              <button
                onClick={toggleAutoNavigation}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors min-h-[36px] ${
                  isAutoNavigationEnabled 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}
              >
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{isAutoNavigationEnabled ? 'Auto-Nav On' : 'Auto-Nav Off'}</span>
                <span className="sm:hidden">{isAutoNavigationEnabled ? 'Auto' : 'Manual'}</span>
              </button>
              
              {currentAudio && isAudioEnabled && (
                <button
                  onClick={toggleAudio}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs sm:text-sm transition-colors min-h-[36px]"
                >
                  {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
              )}
              
              {audioError && (
                <div className="text-red-400 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                  {audioError}
                </div>
              )}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2 mb-4 sm:mb-6 md:mb-8">
              <div 
                className="bg-gradient-to-r from-violet-500 to-cyan-500 h-1.5 sm:h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {currentSlideData.content}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with navigation */}
      <footer className="relative z-10 px-3 sm:px-6 py-3 sm:py-4 border-t border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="text-sm sm:text-base md:text-lg font-bold text-center sm:text-left">
            KnLbookery — Sell More Beauty Appointments
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="px-3 sm:px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 rounded transition-colors flex items-center gap-1 sm:gap-2 text-sm min-h-[40px]"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 disabled:from-slate-700 disabled:to-slate-700 disabled:text-slate-500 rounded transition-all flex items-center gap-1 sm:gap-2 font-medium text-sm min-h-[40px]"
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={() => window.print()}
              className="hidden sm:flex px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded transition-colors items-center gap-2 text-sm min-h-[40px]"
            >
              <Print className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>
      </footer>

      {/* Slide indicator dots */}
      <div className="fixed bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all touch-manipulation ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-violet-500 to-cyan-500 w-6 sm:w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;