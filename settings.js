// 🔒 ULTRA PRO MAX SECURITY SYSTEM
const fs = require("fs");
const crypto = require("crypto");

// 🔐 Anti-Tamper & Clone Protection
const botName = "Arslan-MD";
const ownerNumber = "923035542823";
const securityHash = "a1b2c3d4e5f6g7h8i9j0"; // Change this to your unique hash

// 🚨 Security Check
if (__filename.includes('node_modules') === false) {
    const currentFile = fs.readFileSync(__filename, "utf8");
    const fileHash = crypto.createHash('sha256').update(currentFile).digest('hex');
    
    if (!currentFile.includes(botName) || !currentFile.includes(ownerNumber) || 
        !currentFile.includes(securityHash)) {
        console.log(`
╔══════════════════════════════════╗
║   🚨 UNAUTHORIZED ACCESS ALERT   ║
╠══════════════════════════════════╣
║                                  ║
║  Bot Security Violation Detected ║
║  Original Owner: ${ownerNumber}  ║
║  Current Hash: ${fileHash.slice(0, 12)}... ║
║                                  ║
║  ❌ SYSTEM SHUTDOWN INITIATED    ║
╚══════════════════════════════════╝
        `);
        process.exit(1);
    }
}

// ⚡ ULTRA PRO MAX SETTINGS
const settings = {
  // 🌟 Branding & Identity
  botName: "Arslan-MD ULTRA PRO MAX",
  packname: "Arslan-MD Premium Pack",
  author: "ArslanMD Official",
  version: "3.0.0", // Major version upgrade
  
  // 👑 Ownership
  botOwner: "ArslanMD",
  ownerNumber: "923237045919",
  coOwners: [], // Add secondary owners if needed
  
  // ⚙️ Operation Modes
  MODE: "public", // public/private/group-only
  commandMode: "public", // Legacy support
  
  // 💎 Premium Features
  autoreact: {
    status: true,
    emoji: "❤️", // Default reaction
    whitelist: [] // Numbers to always react to
  },
  
  autoReply: {
    status: true,
    message: "🤖 Arslan-MD is currently busy. I'll reply soon!"
  },
  
  // 🔐 Security
  antiSpam: true,
  antiVirusScan: true,
  maxCommandUsage: 30, // Commands per minute limit
  
  // 🌐 APIs
  giphyApiKey: "qnl7ssQChTdPjsKta2Ax2LMaGXz303tq",
  openaiKey: "sk-proj-xxxxxxxxxxxxxxxx", // New format
  removeBgKey: "rmbg-xxxxxxxxxxxx",
  
  // 🎨 Media
  menuMedia: {
    image: "ArslanMedia/media/menu.jpg",
    video: "ArslanMedia/media/menu.mp4",
    gif: "ArslanMedia/media/menu.gif"
  },
  
  // 📊 Analytics
  analytics: true,
  errorReporting: true,
  
  // 🌍 Metadata
  description: "⚡ The Most Advanced WhatsApp Bot with ULTRA PRO MAX Features",
  website: "https://arslan-md.com",
  ytchannel: "https://youtube.com/@ArslanMDOfficial",
  repo: "https://github.com/Arslan-MD/Arslan-Ai",
  
  // 🔄 System
  autoUpdate: true,
  backupInterval: 24, // Hours
  maxLogSize: 50 // MB
};

// 💻 Developer Options
settings.devMode = false;
settings.debugLevel = "error"; // error/warning/info/debug

// 🛡️ Security Enhancements
settings.securityHash = securityHash;
settings.encryptionKey = "ultrapro-max-secure-key"; // For sensitive data

// ✅ Backward Compatibility
settings.commandMode = settings.MODE;

module.exports = settings;
