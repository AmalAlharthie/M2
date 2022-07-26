async function connect() {
      
  // Prompt user to select any serial port.
 const port = await navigator.serial.requestPort();

 // Wait for the serial port to open.
 await port.open({ baudRate: 9600 });

 const textEncoder = new TextEncoderStream();
 const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

 const writer = textEncoder.writable.getWriter();
 
 //let msg = document.getElementById('info').innerText;
 let msg =2;
 await writer.write(msg);
 console.log(msg);

 // Allow the serial port to be closed later.
 writer.releaseLock();
}