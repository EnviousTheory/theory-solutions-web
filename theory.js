document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    const logo = document.getElementById('static-logo');

    if (video && logo) {
        video.onended = function() {
            video.style.opacity = "0";
            logo.style.opacity = "1";
            setTimeout(() => { video.style.display = "none"; }, 1500);
        };
        video.onerror = function() {
            video.style.display = "none";
            logo.style.opacity = "1";
        };
    }
});

const serviceData = {
    web: {
        title: "Modern Web Design",
        tagline: "Websites that look like an app and load like lightning.",
        why: "We build the 'Modern Way'—meaning your site is built on a hardened system that is nearly impossible for hackers to touch and requires zero monthly maintenance fees.",
        compare: { old: "Slow, cluttered, and easy to hack.", modern: "Clean, instant-load, and hardened security." },
        paymentInfo: "Starting fresh? We offer **0% interest monthly payment plans** so you can get a world-class website today and pay as you grow.",
        features: [
            { name: "The 'Zoom-In'", desc: "Photos pop up full-screen so customers can see every detail of your work without leaving the page.", iconColor: "bg-cyan-500", ui: "📷" },
            { name: "The 'Slide-Out'", desc: "A professional side-menu that keeps your site clean while holding all your links.", iconColor: "bg-blue-600", ui: "📁" },
            { name: "The 'Growing Box'", desc: "Sections like this one that grow only when someone wants to see more info.", iconColor: "bg-emerald-500", ui: "↕️" },
            { name: "The One-Tap Call", desc: "A direct button for mobile users. One tap and their phone starts calling your office immediately.", iconColor: "bg-indigo-500", ui: "📞" }
        ]
    },
    apps: {
        title: "The Automatic Office",
        tagline: "Connecting your business tools into one powerful machine.",
        why: "Automation solves the 'Day-to-Day' struggle. If your apps talk to each other, you have more time to lead your team.",
        paymentInfo: "Automation is an investment in your time. Most projects pay for themselves within 30 days of going live.",
        features: [
            { name: "No-Typing Sync", desc: "Order info moves from your website to your shipping and accounting apps automatically.", iconColor: "bg-teal-500", ui: "🔄" },
            { name: "The Urgent Alert", desc: "The system scans for keywords like 'Invoice' and alerts your phone immediately so you never miss a sale.", iconColor: "bg-sky-500", ui: "🚨" },
            { name: "The 60-Second Hire", desc: "Automatically set up a new hire's email, access, and training files with one form.", iconColor: "bg-indigo-500", ui: "👤" },
            { name: "Auto-Pilot Mail", desc: "New customers are added to your newsletter list automatically.", iconColor: "bg-blue-600", ui: "📧" }
        ]
    },
    m365: {
        title: "The Modern Office (M365)",
        tagline: "Total setup and support for Microsoft 365 (Office 365).",
        why: "We set up the 'Modern Way'—professional email, secure shared files, and instant chat—so you can stop fighting IT.",
        paymentInfo: "Affordable monthly 'Safety & Support' plans. No hidden fees, just a tech expert in your corner.",
        features: [
            { name: "The Team Cabinet", desc: "A digital filing cabinet (SharePoint) where your team can find files easily.", iconColor: "bg-teal-600", ui: "🗄️" },
            { name: "The Personal Locker", desc: "Your private work files (OneDrive), saved safely in the cloud.", iconColor: "bg-sky-500", ui: "☁️" },
            { name: "The Digital Office", desc: "A place for your team to chat, share updates, and hold video meetings (Teams).", iconColor: "bg-indigo-600", ui: "💬" },
            { name: "The 'Magic Wand'", desc: "We use high-tech scripts (PowerShell) to fix problems or change settings instantly.", iconColor: "bg-slate-800", ui: "🪄" }
        ]
    }
};

let currentActive = null;

function toggleDetails(type) {
    const zone = document.getElementById('expansion-zone');
    const content = document.getElementById('expansion-content');
    
    document.querySelectorAll('button[id^="btn-"]').forEach(btn => {
        btn.classList.remove('active-btn');
        const label = btn.querySelector('.label-text');
        const plus = btn.querySelector('.detail-label span:first-child');
        if (label) label.innerText = "Click for Details";
        if (plus) plus.innerText = "+";
    });

    if (currentActive === type) {
        zone.classList.remove('open');
        currentActive = null;
        return;
    }

    const activeBtn = document.getElementById(`btn-${type}`);
    activeBtn.classList.add('active-btn');
    activeBtn.querySelector('.label-text').innerText = "Close Details";
    activeBtn.querySelector('.detail-label span:first-child').innerText = "−";
    
    const data = serviceData[type];
    const compareHtml = data.compare ? `
        <div class="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-6 bg-white border border-slate-200 rounded-2xl">
                <p class="text-[10px] font-bold uppercase text-slate-400 mb-2">Old Way</p>
                <p class="text-sm font-medium text-slate-500 line-through italic">${data.compare.old}</p>
            </div>
            <div class="p-6 bg-white border-2 border-blue-600 rounded-2xl shadow-xl">
                <p class="text-[10px] font-bold uppercase text-blue-600 mb-2 tracking-widest">Modern Way</p>
                <p class="text-sm font-bold text-slate-900">${data.compare.modern}</p>
            </div>
        </div>
    ` : '';

    content.innerHTML = `
        <div class="p-8 md:p-16">
            <div class="grid lg:grid-cols-2 gap-16">
                <section>
                    <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">Theory Solution // ${type.toUpperCase()}</span>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter">${data.title}</h2>
                    <p class="text-slate-500 text-lg mb-8 leading-relaxed">${data.tagline}</p>
                    ${compareHtml}
                    <div class="p-8 bg-white border border-slate-200 rounded-3xl mb-8 shadow-sm text-sm text-slate-600 leading-relaxed italic">"${data.why}"</div>
                    <div class="p-8 bg-blue-50 border border-blue-100 rounded-3xl mb-12 text-sm text-blue-800 leading-relaxed">
                        <h4 class="font-bold mb-2 uppercase text-xs tracking-widest">Financial Flexibility</h4>
                        ${data.paymentInfo}
                    </div>
                    <a href="#contact" class="inline-block px-10 py-5 bg-slate-900 text-white font-extrabold rounded-2xl uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-lg">Schedule Consultation</a>
                </section>
                <section>
                    <h4 class="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8 italic">Specific Features:</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        ${data.features.map(feat => `
                            <div class="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <div class="w-12 h-12 ${feat.iconColor} rounded-2xl mb-6 flex items-center justify-center text-xl shadow-lg shadow-blue-500/10">${feat.ui}</div>
                                <h5 class="font-extrabold text-slate-900 mb-2 text-sm uppercase tracking-tight">${feat.name}</h5>
                                <p class="text-slate-500 text-[11px] leading-relaxed">${feat.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
        </div>
    `;

    zone.classList.add('open');
    currentActive = type;
    setTimeout(() => { zone.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 400);
}