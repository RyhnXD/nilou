let handler = async (m, { conn }) => {
let info = `
*Silahkan Di Pilih Kak*
`
const sections = [
   {
    title: `Virus Biasa`,
	rows: [
	    {title: "V-1", rowId: '.virtex1', description: 'Virus 1' },
	    {title: "V-2", rowId: '.virtex2', description: 'Virus 2' },
	    {title: "V-3", rowId: '.virtex3', description: 'Virus 3' },
	    {title: "V-4", rowId: '.virtex4', description: 'Virus 4' },
	    {title: "V-5", rowId: '.virtex5', description: 'Virus 5' },
	    {title: "V-6", rowId: '.virtex6', description: 'Virus 6' },
    {title: "V-7", rowId: '.virtex7', description: 'Virus 7' },
	{title: "V-8", rowId: '.virtex8', description: 'Virus 8' },
	{title: "V-9", rowId: '.virtex9', description: 'Virus 9' },
	]
    }, {
    	title: `Virus Power`,
	rows: [
	    {title: "VP-1", rowId: '.virtex21', description: 'VirusPower 1' },
	    {title: "VP-2", rowId: '.virtex22', description: 'VirusPower 2' },
	    {title: "VP-3", rowId: '.virtex23', description: 'VirusPower 3' },
	    {title: "VP-4", rowId: '.virtex24', description: 'VirusPower 4' },
	    {title: "VP-5", rowId: '.virtex25', description: 'VirusPower 5' },
	    {title: "VP-6", rowId: '.virtex26', description: 'VirusPower 6' },
    {title: "VP-7", rowId: '.virtex27', description: 'VirusPower 7' },
	{title: "VP-8", rowId: '.virtex28', description: 'VirusPower 8' },
	{title: "VP-9", rowId: '.virtex29', description: 'VirusPower 9' },
	]
    }, {
    title: `BugWa`,
	rows: [
	    {title: "BugHole", rowId: '.bughole', description: 'VirusPalingGemge' },
	    ]
        },
]

const listMessage = {
  text: 'Note!! Jangan di salah gunakan!!! ',
  footer: info,
  title: null,
  buttonText: "Click HERE",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['viruslist']
handler.tags = ['virus']
handler.command = /^viruslist$/i
handler.premium = false

export default handler