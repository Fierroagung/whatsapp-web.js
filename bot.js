const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// VERSI SEDERHANA DULU, PASTI JALAN
const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('📱 QR CODE READY:');
    qrcode.generate(qr, {small: true});
    console.log('Scan pake WhatsApp-mu!');
});

client.on('ready', () => {
    console.log('✅ BOT SIAP!');
});

client.on('message', message => {
    console.log(`Pesan: ${message.body}`);
    if (message.body === 'halo') {
        message.reply('Halo juga!');
    }
});

client.initialize();
