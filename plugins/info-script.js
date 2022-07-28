import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Bot ini menggunakan script

Original Base by Nurutomo:
https://github.com/nurutomo/wabot-aq

Base KannaChan: -

Recode By Zukashika:
https://youtu.be/1SHj3T4qRnM`


let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.nameown, body: `Jangan Lupa Subscribe`, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler