# 🏙️ Protótipo IoT — Controle Automático de Porta de Elevador

Este projeto é um **protótipo de integração entre interface web e back-end Node.js** para simular o controle automatizado da **porta de um elevador**, reagindo conforme a leitura de sensores de presença e obstrução.

O sistema aplica regras de negócio definidas para decidir automaticamente quando a porta deve **fechar ou permanecer aberta**, enviando e recebendo dados em tempo real entre front-end e servidor.

---

## 🚀 Funcionalidades

- Simulação visual de sensores e acionador da porta.
- Leitura automática dos sensores a cada 2 segundos.
- Aplicação de regras IoT:
  - Se **ninguém** dentro do elevador → mantém a porta **aberta**.
  - Se houver **obstrução** → mantém a porta **aberta**.
  - Se houver **alguém dentro e passagem livre** → **fecha** a porta automaticamente.
- Comunicação front-end → back-end via requisições HTTP (`fetch`).
- Exibição no console do servidor dos valores recebidos:
