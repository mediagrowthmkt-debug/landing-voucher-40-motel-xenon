#!/bin/bash

echo "🚀 Iniciando otimização de mídia..."

# Criar pasta de backup
mkdir -p backup-original
cp -r images backup-original/
cp -r rsc backup-original/
echo "✅ Backup criado em backup-original/"

# Verificar se ffmpeg está instalado (para vídeo)
if ! command -v ffmpeg &> /dev/null; then
    echo "⚠️  ffmpeg não encontrado. Instalando..."
    brew install ffmpeg
fi

# Otimizar imagens JPG (reduzir qualidade para 75%, progressive)
echo "📸 Otimizando imagens JPG..."
for img in images/*.jpg; do
    if [ -f "$img" ]; then
        echo "  Processando: $(basename "$img")"
        sips -s format jpeg -s formatOptions 75 "$img" --out "$img" > /dev/null 2>&1
    fi
done

# Otimizar PNG (logo e favicon)
echo "🖼️  Otimizando PNGs..."
for img in images/*.png; do
    if [ -f "$img" ]; then
        echo "  Processando: $(basename "$img")"
        sips -s format png "$img" --out "$img" > /dev/null 2>&1
    fi
done

# Otimizar vídeo (reduzir tamanho mantendo qualidade visual)
echo "🎬 Otimizando vídeo..."
if [ -f "rsc/videomotel.mp4" ]; then
    echo "  Comprimindo videomotel.mp4..."
    ffmpeg -i rsc/videomotel.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale=1280:-2" -an rsc/videomotel-optimized.mp4 -y > /dev/null 2>&1
    
    # Substituir original pelo otimizado
    mv rsc/videomotel-optimized.mp4 rsc/videomotel.mp4
    echo "  ✅ Vídeo otimizado!"
fi

echo ""
echo "📊 Tamanhos após otimização:"
du -sh images rsc
echo ""
echo "✨ Otimização concluída!"
echo "💾 Backup dos originais em: backup-original/"
