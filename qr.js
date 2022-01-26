var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var fs = require('fs')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('./V2/functions')
var { color } = require('./V2/color')
var chalk = require('chalk')
var colors = require('colors')
var spin = require('spinnies')
var async = require('async')
var CFonts = require('cfonts')
var os = require('os')
baterai = 'unknown'
charging = 'unknown'

require('./V1/base.js')
nocache('./V1/base.js', module => console.log(`${module} Telah Di Update!`))

var starts = async (Akira = new WAConnection()) => {
                  Akira.logger.level = 'warn'
                  Akira.version = [2, 2143, 3]
                  console.log(color('[ IG : @demo_ngki ]', 'cyan'), color('Owner Is Online Now!!!', 'yellow'))
	              console.log(color('[ IG : @demo_ngki ]', 'cyan'), color('Welcome Back, Owner!', 'yellow'))
                  Akira.browserDescription = [ 'BloodSword', 'Chrome', '3.0' ]
                  Akira.on('qr', () => {
                  console.log(color('[','red'), color('!','yellow'), color(']','red'), color('Scan Kak', 'white'))
                  })
                  fs.existsSync(`./V1/session/kirbotz.json`) && Akira.loadAuthInfo(`./V1/session/kirbotz.json`)
                  Akira.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'cyan'), color('Loading Bang Sabar Napa.......', 'yellow'));
	              })
                  Akira.on('open', () => {
		          console.log(color('[ SUCCES ]', 'cyan'), color('Bot Online Pliss Follow IG : demo_ngki', 'yellow'));
	              })
                  await Akira.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./V1/session/kirbotz.json`, JSON.stringify(Akira.base64EncodedAuthInfo(), null, '\t'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                console.log(color(' ||> ','yellow'), color(`Welcome To BloodSword`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`Base BloodSword`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`Follow IG @demo_ngki`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`jangan hapus nama gua bang`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`https://wa.me/62881036690566`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`Selamat Menikmati Fiturnya`, 'magenta'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                teks = `https://chat.whatsapp.com/gapunya`
                                Akira.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
                                console.log(color('|WRN|', 'yellow'), color('Join Group Tpi Boong', 'cyan'))
                                Akira.sendMessage(`62881036690566@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR ZAKKY_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                                Akira.sendMessage(`62881036690566@s.whatsapp.net`, `*---DATABASE BOT---*\n\n•NAMA BOT : BloodSword\n•OWNER BOT : Zakky\n•NOMER OWNER : wa.me/62881036690566\n\n*[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak Zakky Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
start('2',colors.bold.white('\nMenunggu Pesan Baru..'));
Akira.on('chat-update', async (message) => {
require('./V1/base.js')(Akira, message)
})
}

            function nocache(module, cb = () => { }) {
            console.log('Module', `'${module}'`, 'is now being watched for changes')
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
starts()