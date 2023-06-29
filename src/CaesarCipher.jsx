import React, { useState } from 'react';
import HomePage from './HomePage';
import './CaesarCipher.css';
import EncryptedImagem from './assets/iconeCadeado.png';
import EncryptedImagem2 from './assets/iconeAberto.png';
import EncryptedImagem3 from './assets/vassoura.png';


const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  //CAMPO DE TEXTO PARA CRIPTOGRAFAR
  const [encryptedText, setEncryptedText] = useState('');
  //
  const [decryptedText, setDecryptedText] = useState('');
  //CAMPO PARA INSERIR TEXTO PARA DESCRIPTOGRAFAR
  const [decryptionInput, setDecryptionInput] = useState('');
  //MENSAGEM DE ALERTA
  const [successMessage, setSuccessMessage] = useState('');

  const handleDecryptionInputChange = (e) => {
    setDecryptionInput(e.target.value);
  };

  const handleEncrypt = () => {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      encrypted += char;
    }
    setEncryptedText(encrypted);
    setSuccessMessage('Texto criptografado com sucesso!');
  };

  const handleDecrypt = () => {
    let decrypted = '';
    for (let i = 0; i < decryptionInput.length; i++) {
      let char = decryptionInput[i];
      if (char.match(/[a-z]/i)) {
        const code = decryptionInput.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
      }
      decrypted += char;
    }
    setDecryptedText(decrypted);
    setSuccessMessage('Texto descriptografado com sucesso!');
  };
  

  const handleClear = () => {
    setText('');
    setShift(0);
    setEncryptedText('');
    setDecryptedText('');
    setDecryptionInput('');
    setSuccessMessage('')
  };

  return (
    <div className="container">
      <h2>Encriptador Master v1.0</h2>
      <div>
        <label htmlFor="text">Texto a ser Criptografado:</label>
        <input
          type="text"
          placeholder='Mensagem Secreta'
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
  <label htmlFor="decryptionInput">Texto a ser descriptografado:</label>
  <input
    type="text"
    placeholder='Sua mensagem Encriptada aqui'
    id="decryptionInput"
    value={decryptionInput}
    onChange={handleDecryptionInputChange}
  />
</div>
      <div>
        <label htmlFor="shift">Deslocamento da Cifra:</label>
        <input
          type="number"
          id="shift"
          value={shift}
          onChange={(e) => setShift(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleEncrypt}> <img src={EncryptedImagem} alt="Criptografar" />Criptografar</button>
        <button onClick={handleDecrypt}><img src={EncryptedImagem2} alt="Criptografar" />Descriptografar</button>
        <button onClick={handleClear}><img src={EncryptedImagem3} alt="Criptografar" />Limpar</button>
      </div>
      <div>
        <label htmlFor="encryptedText">Texto criptografado:</label>
        <textarea
          id="encryptedText"
          value={encryptedText}
          readOnly
        ></textarea>
      </div>
      <div>
        <label htmlFor="decryptedText"> Texto descriptografado:</label>
        <textarea
          id="decryptedText"
          value={decryptedText}
          readOnly
        ></textarea> 
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default CaesarCipher;