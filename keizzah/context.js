/*module.exports = {
  
  getContextInfo: (ms) => {
    return {
      mentionedJid: [ms.sender || ms.from], 
      forwardingScore: 999,
      isForwarded: true, 
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363266249040649@newsletter', 
        newsletterName: 'Keith Support🔥', 
        serverMessageId: 143 
      }
    };
  },


  repondre: async (zk, dest, ms, text, options = {}) => {
    const contextInfo = {
      ...module.exports.getContextInfo(ms), 
      ...options.contextInfo 
    };

    await zk.sendMessage(dest, {
      text: text,
      contextInfo: contextInfo
    }, { quoted: ms }); 
  },


  sendMessage: async (zk, dest, ms, options) => {
    const contextInfo = {
      ...module.exports.getContextInfo(ms), 
      ...options.contextInfo 
    };

    await zk.sendMessage(dest, {
      ...options,
      contextInfo: contextInfo
    }, { quoted: ms }); 
  }
};*/
module.exports = {
  
  getContextInfo: (ms) => {
    return {
      mentionedJid: [ms.sender || ms.from], 
      forwardingScore: 999,
      isForwarded: true, 
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363421098582169@newsletter', 
        newsletterName: '𝗞𝗲𝗶𝘁𝗵 𝗦𝘂𝗽𝗽𝗼𝗿𝘁', 
        serverMessageId: 143 
      }
    };
  },

  repondre: async (zk, dest, ms, text, options = {}) => {
    const contextInfo = {
      ...module.exports.getContextInfo(ms), 
      ...options.contextInfo 
    };

    await zk.sendMessage(dest, {
      text: text,
      contextInfo: contextInfo
    }); 
  },

  sendMessage: async (zk, dest, ms, options) => {
    const contextInfo = {
      ...module.exports.getContextInfo(ms), 
      ...options.contextInfo 
    };

    await zk.sendMessage(dest, {
      ...options,
      contextInfo: contextInfo
    }); 
  }
};
