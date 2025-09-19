import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [etapa, setEtapa] = React.useState('formulario')
  const [dados, setDados] = React.useState({ nome: '', email: '', telefone: '', descricao: '' })

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setEtapa('sucesso')
  }

  return (
    <main style={{ fontFamily: 'Arial', padding: 24, maxWidth: 600, margin: 'auto' }}>
      <h1>Plataforma de Acordos Extrajudiciais</h1>

      {etapa === 'formulario' && (
        <>
          <h2>Iniciar um novo acordo</h2>
          <input name="nome" placeholder="Nome" onChange={handleChange} /><br /><br />
          <input name="email" placeholder="E-mail" onChange={handleChange} /><br /><br />
          <input name="telefone" placeholder="Telefone" onChange={handleChange} /><br /><br />
          <textarea name="descricao" placeholder="Descrição" onChange={handleChange}></textarea><br /><br />
          <button onClick={handleSubmit}>Enviar acordo</button>
        </>
      )}

      {etapa === 'sucesso' && (
        <>
          <h2>✅ Acordo enviado com sucesso!</h2>
          <p>Documento gerado e aguardando assinatura.</p>
          <button onClick={() => setEtapa('painel')}>Ir para o painel</button>
        </>
      )}

      {etapa === 'painel' && (
        <>
          <h2>Acompanhamento</h2>
          <p><strong>{dados.nome}</strong> – Status: Pendente</p>
          <button onClick={() => setEtapa('formulario')}>Novo acordo</button>
        </>
      )}
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
