// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
    const lyricsData = [
      { text: "Alguien me ha dicho que la soledad", time: 22 },
      { text: "Se esconde tras tus ojos", time: 27 },
      { text: "Y que tu blusa atora sentimientos", time: 28},
      { text: "Que respiras", time: 35 },
      { text: "Tenés que comprender que no puse tus miedos", time: 35.9},
      { text: "Donde están guardados", time: 42 },
      { text: "Y que no podré quitártelos", time: 46 },
      { text: "Si, al hacerlo, me desgarras", time: 49 },
      { text: "No quiero soñar mil veces las mismas cosas", time: 54 },
      { text: "Ni contemplarlas sabiamente", time: 60 },
      { text: "Quiero que me trates suavemente", time: 69 },

      { text: "Te comportas de acuerdo", time: 77 },
      { text: "Con lo que te dicta cada momento", time: 80 },
      { text: "Y esta inconstancia no es algo heroico", time: 85 },
      { text: "Es, más bien, algo enfermo", time: 89 },

      { text: "No quiero soñar mil veces las mismas cosas", time: 92},
      { text: "Ni contemplarlas sabiamente", time:100},
      { text: "Quiero que me trates suavemente", time: 106},


      { text: "No quiero soñar mil veces las mismas cosas", time: 144 },
      { text: "Ni contemplarlas sabiamente", time: 152 },
      { text: "Quiero que me trates suavemente", time: 159 },
      { text: "Quiero que me trates suavemente", time: 164 },
      { text: "Quiero que me trates suavemente", time: 168 },
      { text: "Quiero que me trates suavemente", time: 170 },
      { text: "Quiero que me trates ", time: 172 },

      { text: "suavemente", time: 177 },
      { text: "suavemente", time: 180 },
      { text: "suavemente", time: 183 },
      { text: "suavemente", time: 186 },
      { text: "suavemente", time: 187 },
      { text: "te amo victoria ;)", time: 189 }
    ];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);