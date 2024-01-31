
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSendRequest = () => {
    if (!selectedFile) {
      alert('Lütfen önce bir dosya seçin!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        alert(`Server cevabı: ${data.message}`);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('İstek gönderilirken bir hata oluştu..');
      });
  };

  return (
    <div className="App">
      <h1>Resim yükle</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSendRequest}>Gönder</button>
    </div>
  );
}

export default App;
