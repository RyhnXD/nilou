let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Walaikumsallam
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `${titlebot}`, 'status@broadcast')
}
handler.customPrefix = /^(Assalamu'alaikum|Assalamualaikum|assalammualaikum|bot)$/i
handler.command = new RegExp

export default handler