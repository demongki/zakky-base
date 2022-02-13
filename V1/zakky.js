var {
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
        } = 
        require('@adiwajshing/baileys')
var hx = require('hxz-api')
var moment = require('moment-timezone')
var speed = require('performance-now')
var { spawn, exec, execSync } = require('child_process')
var axios = require('axios')
var ffmpeg = require('fluent-ffmpeg')
var fs = require('fs-extra')
var imgbb = require('imgbb-uploader')
var yts = require( 'yt-search')
var os = require('os')
var fromBuffer = require('file-type')
var FormData = require('form-data')
var util = require('util')
var got = require('got')
var twitterGetUrl = require('twitter-url-direct')
var googleImage = require('g-i-s')
var brainly = require('brainly-scraper')
var fetch = require('node-fetch')
var ggs = require('google-it')
var request = require('request')
var crypto = require('crypto')
var chalk = require('chalk')
var fromBuffer = require('file-type')
var ms = require('parse-ms')
var toMs = require('ms')
var { error } = require('qrcode-terminal')
var { color, bgcolor } = require('../V2/color')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('../V2/functions')
var { yta, ytv, upload, formatDate } = require('../V2/ytdl')
var { y2mateA, y2mateV } = require('../V2/y2mate')
var { webp2gifFile } = require('../V2/gif.js')
//////////////////////////////////////////////////////////////////////////////////////////
var _scommand = JSON.parse(fs.readFileSync('./V3/scommand.json'))
//////////////////////////////////////////////////////////////////////////////////////////
ownerName = 'BloodSword'
ownerNumber = ['62881036690566@s.whatsapp.net']
owner = '62881036690566'
botName = 'friska-panca-putri'
numberBot = '62881036690566'
logonyatod = fs.readFileSync('./V4/kirtod.jpeg')
nilogorules = fs.readFileSync('./V4/rules.jpg')
nilogoowner = fs.readFileSync('./V4/owner.jpg')
nilogomenu = fs.readFileSync('./V4/logomenu.jpg')
banChats = true
/////////////////////////////////// APIKEY ////////////////////////////////////////////


LolKey = 'Deffbotz'
Dapkey = 'IJbbr7Ssbs'


/////////////////////////////////// APIKEY ////////////////////////////////////////////
var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//////////////////////////////////////////////////////////////////////////////////////////
          var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = BloodSword = async (BloodSword, zakky) => {
	   try {
       if (!zakky.hasNewMessage) return
       zakky = zakky.messages.all()[0]
	   if (!zakky.message) return
	   if (zakky.key && zakky.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   zakky.message = (Object.keys(zakky.message)[0] === 'ephemeralMessage') ? zakky.message.ephemeralMessage.message : zakky.message
       var content = JSON.stringify(zakky.message)
	   var from = zakky.key.remoteJid
	   var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	   var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
	   var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
       var type = Object.keys(zakky.message)[0]
       var cmd = (type === 'conversation' && zakky.message.conversation) ? zakky.message.conversation : (type == 'imageMessage') && zakky.message.imageMessage.caption ? zakky.message.imageMessage.caption : (type == 'videoMessage') && zakky.message.videoMessage.caption ? zakky.message.videoMessage.caption : (type == 'extendedTextMessage') && zakky.message.extendedTextMessage.text ? zakky.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && zakky.message.conversation.startsWith(prefix)) ? zakky.message.conversation : (type == 'imageMessage') && zakky.message[type].caption.startsWith(prefix) ? zakky.message[type].caption : (type == 'videoMessage') && zakky.message[type].caption.startsWith(prefix) ? zakky.message[type].caption : (type == 'extendedTextMessage') && zakky.message[type].text.startsWith(prefix) ? zakky.message[type].text : (type == 'listResponseMessage') && zakky.message[type].singleSelectReply.selectedRowId ? zakky.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zakky.message[type].selectedButtonId ? zakky.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(zakky.message[type].fileSha256.toString('base64')) !== null && getCmd(zakky.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(zakky.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? zakky.message.conversation : (type === 'extendedTextMessage') ? zakky.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var txt = zakky.message.conversation
       var botNumber = BloodSword.user.jid
       var isGroup = from.endsWith('@g.us')
       let sender = isGroup ? zakky.participant : zakky.key.remoteJid
       var senderr = zakky.key.fromMe ? BloodSword.user.jid : zakky.key.remoteJid.endsWith('@g.us') ? zakky.participant : zakky.key.remoteJid
       var totalchat = await BloodSword.chats.all()
       var groupMetadata = isGroup ? await BloodSword.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var conts = zakky.key.fromMe ? BloodSword.user.jid : BloodSword.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = zakky.key.fromMe ? BloodSword.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
//////////////////////////////////////////////////////////////////////////////////////////
selectedButton = (type == 'buttonsResponseMessage') ? zakky.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? zakky.message.listResponseMessage.title : ''
//////////////////////////////////////////////////////////////////////////////////////////
var sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await BloodSword.prepareMessage(from, kma, image)
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
BloodSword.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
BloodSword.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await BloodSword.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
BloodSword.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return BloodSword.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: zakky, contextInfo: {"mentionedJid": men ? men : []}})
}
//////////////////////////////////////////////////////////////////////////////////////////
kirr = {
		  wait: '*Waittt.....*',
		  success: '*Nih Kak*',
		  error: {
		  stick: '*Gagal Convert Gambar To Sticker...Coba Lagi !*',
		  Iv: '*Linknya Error Tod !*'
		  },
		  only: {
		  admin: '*Kusus Admin Tod !*',
		  group: '*Khusus Group Tod !*'
		  }
		  }
//////////////////////////////////////////////////////////////////////////////////////////
var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')
//////////////////////////////////////////////////////////////////////////////////////////
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var listmsg = (from, title, desc, list) => { 
let po = BloodSword.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©BloodSword*_","listType": "SINGLE_SELECT","sections": list}}, {})
return BloodSword.relayWAMessage(po, {waitForAck: true})
}
var reply = (teks) => {
BloodSword.sendMessage(from, teks, text, {quoted:zakky})
}
var sendMess = (hehe, teks) => {
BloodSword.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? BloodSword.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : BloodSword.sendMessage(from, teks.trim(), extendedText, { quoted: zakky, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var costum = (pesan, tipe, target, target2) => {
BloodSword.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
BloodSword.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
BloodSword.sendMessage(from, hasil, type, options).catch(e => {
BloodSword.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   
//////////////////////////////////////////////////////////////////////////////////////////
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
//////////////////////////////////////////////////////////////////////////////////////////
if (!zakky.key.fromMe && banChats === true) return
//━━━━━━━━━━━━━━━[ UNTUK FITUR ]━━━━━━━━━━━━━━━\\
switch (command) {
case 'menu':
janganti = '62881036690566'
totalChat = await BloodSword.chats.all()
groups = BloodSword.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = BloodSword.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await BloodSword.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
BloodSword.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 INFO USER 」*
*│ Nama :* ${pushname}
*│ Nomor :* wa.me/${sender.split('@')[0]}
*│ Bio :* ${thu.status}
*╰──────────────*

*╭──「 INFO BOTZ 」*
*│Nama Owner :* ${ownerName}
*│Nomor Owner :* wa.me/${janganti}
*│Nama Bot :* ${botName}
*│Nomor Bot :* wa.me/${numberBot}
*│Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*│Group Chat :* ${groups.length}
*│Private Chat :* ${privat.length}
*│Total Chat :* ${totalChat.length}
*╰──────────────*

*╭──「 PERATURAN 」*
*│ Runtime :* ${runtime(process.uptime())}
*│ Tanggal :* ${tanggal}
*│ Wib :* ${wib}
*│ Wita :* ${wita}
*│ Wit :* ${wit}
*╰──────────────*

   「 *Created By* @${janganti} 」
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

� sosmed
ig : https://instagram.com/demo_ngki
� donasi
pulsa : 0881036690566
dana  : 0881036690566
ovo   : 0881036690566

*<-|[ LIST MENU ]|->*
 ${prefix}owner
 ${prefix}delete
 ${prefix}runtime
 ${prefix}public
 ${prefix}self
 ${prefix}rules
 ${prefix}bucin
 ${prefix}sticker *reply foto*
 ${prefix}toimg *reply sticker*
 ${prefix}tomp4 *reply sticker gerak*
 ${prefix}tomp3 *reply video*
 ${prefix}coolgravity *zakky*
 ${prefix}pornhub *zakky tot*
 ${prefix}glitch *zakky tot*
 ${prefix}avenger *zakky tot*
 ${prefix}space *zakky tot*
 ${prefix}ninjalogo *zakky tot*
 ${prefix}marvelstudio *zakky tot*
 ${prefix}lionlogo *zakky tot*
 ${prefix}wolflogo *zakky tot*
 ${prefix}steel3d *zakky tot*
 ${prefix}wallgravity *zakky tot*
 ${prefix}lolkey *apikey*
 ${prefix}emoji *emojinya*

</ISLAM MENU>

 ${prefix}asmaulhusna
 ${prefix}kisahnabi *adam*
 ${prefix}jadwalsholat *Surabaya*

</DOWNLOAD MENU>

 ${prefix}play
 ${prefix}playvid
 ${prefix}ytmp3 *linkYT*
 ${prefix}yts (query)
 ${prefix}ytmp4 *linkYT*
 ${prefix}tiktoknowm
 ${prefix}tiktokmusic
 ${prefix}spotify
 ${prefix}spotifysearch

</NSFW MENU>

 ${prefix}lewdk
 ${prefix}erok
 ${prefix}tits
 ${prefix}keta
 ${prefix}solo
 ${prefix}eron
 ${prefix}lewd
 ${prefix}trap
 ${prefix}yuri
 ${prefix}ero
 ${prefix}holoero
 ${prefix}erofeet
 ${prefix}blowjob
 ${prefix}cum_jpg
 ${prefix}eroyuri
 ${prefix}hentai
 ${prefix}femdom
 ${prefix}nsfw_avatar
 ${prefix}kemonomimi
 ${prefix}pussy_jpg
 ${prefix}lewdkemo
 ${prefix}hololewd
 ${prefix}futanari
 ${prefix}hololewd
 ${prefix}hentai4everyone
 ${prefix}animebellybutton
 ${prefix}biganimetiddies
 ${prefix}lewdanimegirls
 ${prefix}hentaifemdom
 ${prefix}animearmpits
 ${prefix}hentaiparadise
 ${prefix}animethighss
 ${prefix}animebooty
 ${prefix}animefeets
 ${prefix}sideoppai
 ${prefix}hololewd
 ${prefix}ahegao
 ${prefix}ecchi
 ${prefix}yaoi
 ${prefix}trap
 ${prefix}chiisaihentai
 ${prefix}loli
 ${prefix}waifu
 ${prefix}neko
 ${prefix}hentai2

</ASUPAN MENU>

 ${prefix}asupan
 ${prefix}asupansantuy
 ${prefix}asupanbocil
 ${prefix}asupanukhty
 ${prefix}asupanrikagusriani
 ${prefix}asupanghea

</CASE ZAKKY 18+>

 ${prefix}hentaipdf
 ${prefix}hentaisearch


</CASE ZAKKY RANDOM IMAGE>

 ${prefix}art
 ${prefix}bts
 ${prefix}exo
 ${prefix}elf
 ${prefix}loli
 ${prefix}neko
 ${prefix}waifu
 ${prefix}shota
 ${prefix}husbu
 ${prefix}sagiri
 ${prefix}shinobu
 ${prefix}megumin
 ${prefix}wallnime

`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'rules':
thu = await BloodSword.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/62881036690566*_`
BloodSword.sendMessage(from, { contentText: `${menuh}`, footerText: `
*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'メ Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogorules, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'runtime':
reply(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
thu = await BloodSword.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${ownerName}\n` +
            `item1.TEL;waid=${owner}:${owner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Kir - Botz Developer\n` +
            'END:VCARD'.trim()
BloodSword.sendMessage(from, {displayName: `Creator zakky`, vcard: vcard2}, contact, 
{ quoted: zakky, 
})
menuh = `Hai Kak @${sender.split('@')[0]}`
BloodSword.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Tuh Owner Ku Kak >_<`,
buttons: [
{ buttonId: `${prefix}ytowner`, buttonText: { displayText: 'メ YT メ' }, type: 1 },
{ buttonId: `${prefix}igowner`, buttonText: { displayText: 'メ IG メ' }, type: 1 },
{ buttonId: `${prefix}ttowner`, buttonText: { displayText: 'メ TT メ' }, type: 1 }
         ], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogoowner, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'ytowner':
reply (`*Subrek Kak*\nhttps://youtube.com/channel/gapunya`)
break
case 'igowner':
reply (`*Follow Kak*\nhttps://www.instagram.com/demo_ngki`)
break
case 'ttowner':
reply (`*Follow Kak*\nhttps://vt.tiktok.com/gapunya`)
break
case 'lolkey': 
case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              data = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${data.result.username}\n➸ Request= ${data.result.requests}\n➸ Today= ${data.result.today}\n➸ Akun Type= ${data.result.account_type}\n➸ Expired= ${data.result.expired}\n➸ API = https://api.lolhuman.xyz`
              BloodSword.sendMessage(from, teks, text, {quoted: zakky})
              break
case 'coolgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} zakky`)
                    reply(kirr.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${LolKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        BloodSword.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow Ig : demo_ngki�`, quoted : zakky})
                    })
                    break


///////////////////////////////////// case zakky ////////////////////////



case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
                    reply(get_result.result)
                    break

case 'hentaisearch':
//case by BloodSword
reply('sabar masih nyari')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'hentaipdf':
//case by BloodSword
reply('sabar masih mengirim')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await BloodSword.sendMessage(from, ini_buffer, document, { quoted: zakky, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break

case 'lewdk':
                case 'erok':
                case 'tits':
                case 'keta':
                case 'solo':
                case 'eron':
                case 'lewd':
                case 'trap':
                case 'yuri':
                case 'ero':
                case 'holoero':
                case 'erofeet':
                case 'blowjob':
                case 'cum_jpg':
                case 'eroyuri':
                case 'hentai':
                case 'femdom':
                case 'nsfw_avatar':
                case 'kemonomimi':
                case 'pussy_jpg':
                case 'lewdkemo':
                case 'hololewd':
                case 'futanari':
                case 'hololewd':
				reply('sabar masih mengirim gambar')
				zakky = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`)
				BloodSword.sendMessage(from, zakky, image, {quoted: zakky})
				break

				case 'hentai4everyone':
				case 'animebellybutton':
				case 'biganimetiddies':
				case 'lewdanimegirls':
				case 'hentaifemdom':
				case 'animearmpits':
				case 'hentaiparadise':
				case 'animethighss':
				case 'animebooty':
				case 'animefeets':
				case 'sideoppai':
				case 'hololewd':
				case 'ahegao':
				case 'ecchi':
				case 'yaoi':
				case 'trap':
				case 'chiisaihentai':
				case 'loli':
				case 'waifu':
				case 'neko':
				reply('sedang mengirim gambar')
				zakky = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
				BloodSword.sendMessage(from, zakky, image, {quoted: zakky})
				break

				case 'hentai2':
				reply('sedang mengirim gambar')
				zakky = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${LolKey}`)
				BloodSword.sendMessage(from, zakky, image, {quoted: zakky})
				break

case 'asupan':
				case 'asupansantuy':
				case 'asupanbocil':
				case 'asupanukhty':
				case 'asupanrikagusriani':
				case 'asupanghea':
				//case by BloodSword
				reply ('sabar masih mengirim video')
				zakky = await getBuffer(`https://api.dapuhy.xyz/api/asupan/${command}?apikey=${Dapkey}`)
				BloodSword.sendMessage(from, zakky, video, {quoted: zakky})
				break

case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                //case by BloodSword
                reply('sedang mengirim gambar')
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`).then((gambar) => {
                        BloodSword.sendMessage(from, gambar, image, { quoted: zakky })
                    })
                    break

case 'yts':
//case by BloodSword
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break

case 'ytmp4':
//case by BloodSword
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await BloodSword.sendMessage(from, ini_buffer, image, { quoted: zakky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await BloodSword.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: zakky })
                    break

case 'ytmp3':
//case by Bloodsword
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${LolKey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await BloodSword.sendMessage(from, ini_buffer, image, { quoted: zakky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await BloodSword.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: zakky })
                    break

case 'spotify':
//case by BloodSword
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${LolKey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await lolhuman.sendMessage(from, thumbnail, image, { quoted: zakky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await BloodSword.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: zakky })
                    break

case 'spotifysearch':
//case by BloodSword
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break

case 'tiktoknowm':
//case by BloodSword
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${LolKey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await BloodSword.sendMessage(from, ini_buffer, video, { quoted: zakky })
                    break

case 'tiktokmusic':
//case by BloodSword
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolKey}&url=${ini_link}`)
                    await BloodSword.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: zakky })
                    break

case 'playvid':
//case by Bloodsword
	if (args.length == 0) return reply(`Example: ${prefix + command} Harusnya aku yang di sana`)
	ini_link = args[0]
	get_result = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/ytplaymp4?query=${ini_link}&apikey=${Dapkey}`)
	get_result = get_result.result
	ini_txt = `${get_result.title}\n Size: ${get_result.size}`
	ini_buffer = await getBuffer(get_result.thumb)
	await BloodSword.sendMessage(from, ini_buffer, image, { quoted: zakky, caption: ini_txt })
	get_audio = await getBuffer(get_result.url)
	await BloodSword.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp3`, quoted: zakky })
break

case 'play':
//case by Bloodsword
	if (args.length == 0) return reply(`Example: ${prefix + command} Harusnya aku yang di sana`)
	ini_link = args[0]
	get_result = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/ytplaymp4?query=${ini_link}&apikey=${Dapkey}`)
	get_result = get_result.result
	ini_txt = `${get_result.title}\n Size: ${get_result.size}`
	ini_buffer = await getBuffer(get_result.thumb)
	await BloodSword.sendMessage(from, ini_buffer, image, { quoted: zakky, caption: ini_txt })
	get_audio = await getBuffer(get_result.url)
	await BloodSword.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: zakky })
break

case 'delete':       
//case by BloodSword    
				BloodSword.deleteMessage(from, { id: zakky.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break

case 'spamchat':
//case by BloodSword
                    if (args.length < 1) return reply(`Mau Spamchat ke siapa? Contoh: ${prefix}spamchat 19199992616 Oy ajc`)
                    if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                    if (args[0].startsWith(`${owner}`)) return reply(`Mau Ngapain Spam Ke ${namaowner}?:v`)
                    mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    const kontul = body.slice(8)
                    if (kontul.length > 300) return BloodSword.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: zakky})
                    var nomor = zakky.participant
                    const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${kontul}`
                    var options = {
                    text: busah,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    .then(() => { BloodSword.sendMessage(`${mansed}`, options, text, {quoted: zakky})})
                    reply('Spam Chat Berhasil:v')
                    break














///////////////////////////////////// case zakky ////////////////////////







case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':	
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolKey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'semoji':
case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${LolKey}`)
              await BloodSword.sendMessage(from, ini_buffer, sticker, { quoted: zakky })
              break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} zakky tot`)
                    reply(kirr.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LolKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        BloodSword.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Follow Ig : demo_ngki�`, quoted : zakky})
                    })
                    break
case 'hentai':
              reply(kirr.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${LolKey}`).then((gambar) => {
              BloodSword.sendMessage(from, gambar, image, { quoted: zakky })
}) 
              break
case 'public':
if (!zakky.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === false) return
uptime = process.uptime()
banChats = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!zakky.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === true) return
uptime = process.uptime()
banChats = true
reply(`「 *SELF-MODE* 」`)
break
case 'tomp4':
               if ((isMedia && !zakky.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(kirr.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(zakky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zakky
               mediaaa = await BloodSword.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               BloodSword.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: zakky, caption: kirr.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(kirr.wrongFormat)
}
               break
case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            reply(kirr.wait)
            encmedia = JSON.parse(JSON.stringify(zakky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await BloodSword.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            BloodSword.sendMessage(from, buffer453, audio, { mimetype:'audio/mp4', ptt:true, quoted:zakky,contextInfo: {forwardingScore: 508, isForwarded: true}})
            fs.unlinkSync(ran)
            })
            break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zakky.message.videoMessage || isQuotedImage) && args.length == 0) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zakky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zakky
var media = await BloodSword.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(kirr.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Follow Ig : demo_ngki�`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zakky.message.videoMessage.seconds < 11 || isQuotedVideo && zakky.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zakky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zakky
var media = await BloodSword.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.webp')
reply(kirr.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zakky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zakky
var media = await BloodSword.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(kirr.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(kirr.error.stick)
BloodSword.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: zakky })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(zakky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await BloodSword.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Follow Ig : demo_ngki�`)
fs.unlinkSync(ran)
})
break
default:
if (budy.startsWith('$')){
if (!zakky.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('ERROR : %s', color(e, 'magenta'))
        }
	}
}