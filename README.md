# Projeto Lâmpada

Este é um projeto simples de uma lâmpada interativa que pode ser ligada e desligada através de um botão estilizado. O objetivo é demonstrar o uso de HTML, CSS e JavaScript para criar uma interface dinâmica e funcional.

## Imagens

As imagens utilizadas no projeto estão localizadas na pasta `img/`:
- `so (1).jpg`: Representa a lâmpada ligada.
- `soP (2) (1).png`: Representa a lâmpada desligada.

## Como modificar a imagem usada

Para alterar as imagens da lâmpada, siga os passos abaixo:
1. Substitua os arquivos existentes na pasta `img/` por novas imagens com os mesmos nomes (`so (1).jpg` e `soP (2) (1).png`).
2. Caso deseje usar nomes diferentes, atualize os caminhos das imagens no arquivo `lap.js` ou diretamente no script do arquivo `lap.html`:
   ```javascript
   if (isLampOn) {
       lampada.src = "img/novaImagemDesligada.png";
   } else {
       lampada.src = "img/novaImagemLigada.jpg";
   }
   ```

## Explicação do uso da `classList.toggle()`

A função `classList.toggle()` é usada para alternar entre adicionar e remover uma classe de um elemento HTML. Isso é útil para aplicar ou remover estilos dinamicamente. Por exemplo:

```javascript
const elemento = document.getElementById("meuElemento");
elemento.classList.toggle("classeAtiva");
```

No exemplo acima, se o elemento não tiver a classe `classeAtiva` ela será adicionada, Caso contrário será removida. Isso é muito útil para criar efeitos visuais.
