import QRCode from 'qrcode'
import { useState } from 'react'
import "./Qr.css";

function QrApp() {
	const [url, setUrl] = useState('https://google.com')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 600,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button> <br />
			{qr && <>
				<img src={qr} alt="qr-code"/>
				<a href={qr} download="qrcode.png">Download</a>
			</>}
      {
        console.log(qr)
      }
		</div>
	)
}

export default QrApp
