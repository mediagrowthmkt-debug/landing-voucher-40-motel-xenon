# 🎯 Integração com Google Ads e Facebook Pixel

## 📊 Google Ads

### Já Implementado

O código Google Ads já está integrado no `index.html`:

```javascript
// Google tag (gtag.js)
gtag('config', 'AW-17435400574');

// Conversão quando clica no WhatsApp
gtag('event', 'conversion', {
    'send_to': 'AW-17435400574/kArdCMPH8MobEP6y7PlA',
    'value': 1.0,
    'currency': 'BRL'
});
```

### Criar Campanhas Google Ads

#### Campanha de Busca

**Palavras-chave Principais**:
```
[motel criciúma] - Correspondência exata
"motel em criciúma" - Correspondência de frase
motel perto de mim - Correspondência ampla modificada
+motel +criciuma +sc
```

**Palavras-chave Long Tail**:
```
melhor motel em criciúma
motel com hidromassagem criciúma
motel criciúma br 101
pernoite casal criciúma
motel 24 horas criciúma
suíte luxo motel criciúma
```

**Anúncios Sugeridos**:

```
Título 1: Ganhe R$40 em Voucher Hoje
Título 2: Motel Xenon Criciúma | BR-101
Título 3: Suítes de Luxo + Hidro
Descrição 1: Reserve via WhatsApp e ganhe R$40 para consumo. Suítes luxuosas na BR-101. Aberto 24h!
Descrição 2: Oferta exclusiva! Clique e resgate seu voucher agora mesmo. Localização privilegiada.
```

#### Campanha Display

**Segmentação por Público**:
- Pessoas interessadas em: Hotéis e acomodações
- Pessoas interessadas em: Viagens e turismo
- Faixa etária: 25-54 anos
- Localização: Criciúma + 30km raio

**Anúncios Responsivos**:
- Imagem: Suíte de luxo
- Logo: Motel Xenon
- Headline: "R$40 em Voucher - Reserve Agora"
- Descrição: "Suítes luxuosas com hidromassagem"

#### Campanha de Remarketing

**Audiências**:
1. Visitantes que não converteram (0-30 dias)
2. Visitantes que ficaram > 30 segundos
3. Visitantes que clicaram no CTA mas não completaram

**Mensagens**:
```
"Ainda pensando? Seu voucher de R$40 está esperando!"
"Última chance de garantir R$40 grátis!"
"127 casais já reservaram. E você?"
```

## 📱 Facebook/Instagram Ads

### Pixel do Facebook

Adicione no `<head>` do `index.html`:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
```

### Eventos Personalizados

Adicione no `js/script.js`:

```javascript
// Evento quando clica no CTA
function redirectToWhatsApp() {
    // Facebook Pixel - Lead
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            value: 40.00,
            currency: 'BRL',
            content_name: 'Voucher R$40',
            content_category: 'Reserva'
        });
    }
    
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(VOUCHER_MESSAGE)}`;
    
    if (typeof gtag_report_conversion === 'function') {
        gtag_report_conversion(whatsappURL);
    } else {
        window.open(whatsappURL, '_blank');
    }
}

// Evento quando página carrega
window.addEventListener('load', function() {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: 'Landing Page Voucher',
            content_ids: ['voucher-40'],
            content_type: 'product'
        });
    }
});
```

### Campanhas Facebook/Instagram

#### Campanha 1: Tráfego Local

**Objetivo**: Tráfego
**Segmentação**:
- Localização: Criciúma + 30km
- Idade: 25-54
- Interesses: Viagens, hotéis, romance, casais

**Criativos**:

```
Imagem/Vídeo: Suíte com hidromassagem
Texto Principal:
"🎁 GANHE R$40 PARA CONSUMO!

Reserve sua suíte de luxo no Motel Xenon e ganhe um voucher de R$40 para gastronomia e bebidas.

✨ Suítes luxuosas
🛁 Hidromassagem
🍾 Cardápio completo
📍 BR-101, Criciúma
⏰ Aberto 24h

👉 Clique e reserve via WhatsApp!"

Título: Ganhe R$40 em Voucher
Descrição: Reserve agora e aproveite
Botão: Enviar mensagem
```

#### Campanha 2: Conversão

**Objetivo**: Conversões (Lead)
**Segmentação**:
- Públicos similares baseados em conversões
- Pessoas que pesquisaram hotéis recentemente
- Casais em relacionamento sério

**Criativos Carousel**:

```
Card 1: 🎁 R$40 em Voucher
Card 2: ✨ Suítes de Luxo
Card 3: 🛁 Hidromassagem
Card 4: 🍷 Gastronomia Premium
Card 5: 📱 Reserve Agora
```

#### Campanha 3: Remarketing

**Público**:
- Visitantes da LP (últimos 7 dias)
- Não converteram

**Criativos**:

```
Texto: "Seu voucher de R$40 ainda está disponível! 😍

Não perca essa chance de economizar na sua próxima visita ao Motel Xenon.

Várias suítes disponíveis hoje! Reserve agora via WhatsApp 👇"

Botão: Resgatar Oferta
```

## 💰 Orçamentos Sugeridos

### Google Ads
- **Campanha de Busca**: R$30-50/dia
- **Display**: R$20-30/dia
- **Remarketing**: R$10-20/dia
- **TOTAL**: R$60-100/dia

### Facebook/Instagram
- **Tráfego Local**: R$30-40/dia
- **Conversão**: R$40-60/dia
- **Remarketing**: R$10-20/dia
- **TOTAL**: R$80-120/dia

## 📊 Métricas para Acompanhar

### Google Ads
- CTR (Click-Through Rate): > 5%
- CPC (Custo por Clique): < R$2,00
- Taxa de Conversão: > 8%
- CPA (Custo por Aquisição): < R$25,00

### Facebook/Instagram
- CTR (Link): > 2%
- CPC: < R$1,50
- CPM: < R$20,00
- Taxa de Conversão: > 5%
- CPA: < R$30,00

## 🎯 URLs de Rastreamento

Use UTM parameters para rastrear campanhas:

```
Google Ads - Busca:
https://seusite.com/landing-voucher-40/?utm_source=google&utm_medium=cpc&utm_campaign=busca-voucher&utm_content=motel-criciuma

Google Ads - Display:
https://seusite.com/landing-voucher-40/?utm_source=google&utm_medium=display&utm_campaign=voucher-display&utm_content=banner-suite

Facebook - Feed:
https://seusite.com/landing-voucher-40/?utm_source=facebook&utm_medium=social&utm_campaign=voucher-feed&utm_content=suite-luxo

Instagram - Stories:
https://seusite.com/landing-voucher-40/?utm_source=instagram&utm_medium=social&utm_campaign=voucher-stories&utm_content=video-suite
```

## 📱 Otimização para Mobile

### Acelerated Mobile Pages (AMP)

Para campanhas Google Ads, considere criar uma versão AMP:

```html
<!doctype html>
<html ⚡>
<head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>🎁 Ganhe R$40 em Voucher</title>
    <link rel="canonical" href="https://seusite.com/landing-voucher-40/">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <!-- AMP-specific tags -->
</head>
<body>
    <!-- Conteúdo AMP -->
</body>
</html>
```

## ✅ Checklist Pré-Lançamento

- [ ] Pixel do Facebook instalado e testado
- [ ] Google Ads configurado com conversões
- [ ] Microsoft Clarity instalado
- [ ] UTM parameters configurados
- [ ] Testes A/B definidos
- [ ] Orçamento diário definido
- [ ] Criativos aprovados
- [ ] Landing page testada em mobile
- [ ] Velocidade de carregamento < 3s
- [ ] Links do WhatsApp funcionando
- [ ] Eventos de conversão rastreando
- [ ] Remarketing audiences criadas

---

**Importante**: Sempre teste os pixels e eventos antes de lançar as campanhas!
