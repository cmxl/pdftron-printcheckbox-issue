const fs = require('fs');
const https = require('https');
const unzip = require("adm-zip");

const downloadPath = 'https://www.pdftron.com/downloads/WebViewer.zip';
const file = 'WebViewer.zip';
const folder = './pdftron';

function handleResponse(r, dest) {
	if (r.statusCode === 301 || r.statusCode === 302) {
		return https.get(r.headers.location, (res) => handleResponse(res, dest));
	}

	r.pipe(dest);
	r.on('close', () => {
		dest.close();
		console.log(`Extracting ${file} to ${folder}`);
		const zip = new unzip(file);
		zip.extractAllTo(folder, true);
	});
}

function downloadPdfTron() {
	console.log(`Downloading ${downloadPath}`);
	const dest = fs.createWriteStream(file);
	https.get(downloadPath, (r) => handleResponse(r, dest));
}

downloadPdfTron();