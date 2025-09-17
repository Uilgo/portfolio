# Como Adicionar Sua Foto ao Avatar

## 📁 Passos para adicionar sua foto:

### 1. **Preparar a Foto**
- ✅ Use uma foto quadrada (recomendado: 512x512px ou maior)
- ✅ Formato: JPG, PNG ou WebP
- ✅ Nome sugerido: `igor-profile.jpg` (ou `.png/.webp`)

### 2. **Colocar no Diretório Correto**
Coloque sua foto em:
```
portfolio/
└── public/
    └── images/
        └── igor-profile.jpg  ← Sua foto aqui
```

### 3. **Atualizar o Caminho (se necessário)**
Se você usar um nome diferente, edite o arquivo:
`app/components/layouts/HeroSection.vue` linha ~98:

```javascript
avatarImage: '/images/SEU-NOME-DA-FOTO.jpg'
```

### 4. **Alternativa: Usar URL Externa**
Se preferir usar uma foto do LinkedIn, GitHub, etc:

```javascript
avatarImage: 'https://github.com/Uilgo.png'
// ou
avatarImage: 'https://media.licdn.com/dms/image/...'
```

## 🎯 **Como Funciona Agora:**

- ✅ **Com foto**: Mostra sua imagem no avatar
- ✅ **Sem foto**: Mostra as iniciais "IE" como fallback
- ✅ **Foto com erro**: Automaticamente volta para as iniciais
- ✅ **Responsivo**: A foto se adapta a todos os tamanhos de tela
- ✅ **Otimizado**: Usa `object-cover` para manter proporção

## 📝 **Exemplo de Implementação:**

```vue
<!-- Seu avatar agora aceita: -->
<HeroAvatar 
  initials="IE"
  avatar-image="/images/igor-profile.jpg"
  name="Igor Elias"
/>
```

## 🔧 **Configuração Atual:**
O componente já está configurado para aceitar sua foto. Só precisa:
1. Colocar a foto em `public/images/`
2. Garantir que o nome corresponde ao configurado no código

Pronto! Sua foto aparecerá automaticamente no avatar! 🎉