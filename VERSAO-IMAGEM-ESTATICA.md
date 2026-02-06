# 🖼️ Versão com Imagem Estática

Se o vídeo não estiver disponível, use esta versão com imagem de fundo estática.

## Alterações no HTML

Substitua a seção `hero-background` no `index.html`:

```html
<!-- Versão com vídeo (original) -->
<div class="hero-background">
    <video autoplay muted loop playsinline class="hero-video">
        <source src="../motel-criciuma/fotos e videos instagram/videos/hero videos/hero-suite.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay"></div>
</div>

<!-- Versão com imagem (alternativa) -->
<div class="hero-background">
    <img src="../motel-criciuma/suite-luxo.jpg" alt="Suíte Motel Xenon" class="hero-image">
    <div class="hero-overlay"></div>
</div>
```

## Alterações no CSS

Adicione ao `style.css`:

```css
.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
```

## Imagens Recomendadas

Use uma foto de alta qualidade que mostre:
- ✅ Suíte luxuosa com boa iluminação
- ✅ Hidromassagem em destaque
- ✅ Produtos de consumo (vinhos, espumantes)
- ✅ Ambiente aconchegante e romântico

### Especificações
- **Formato**: JPG ou WebP
- **Dimensões**: Mínimo 1920x1080px
- **Peso**: Máximo 300KB (otimizado)
- **Qualidade**: 80-85%

---

**Dica**: Use ferramentas como TinyJPG ou Squoosh.app para otimizar a imagem antes do upload.
