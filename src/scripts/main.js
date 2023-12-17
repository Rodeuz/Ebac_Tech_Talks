AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");

const timeStampDoEvento = dataEvento.getTime();

const contador = setInterval(function () {
  const agora = new Date();
  const timeStampDoEventoAtual = agora.getTime();

  const distancia = timeStampDoEvento - timeStampDoEventoAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distancia / diaEmMs);
  const horasAteEvento = Math.floor((distancia % diaEmMs) / horasEmMs);
  const minutosAteEvento = Math.floor((distancia % horasEmMs) / minutosEmMs);
  const segundosAteEvento = Math.floor((distancia % minutosEmMs) / 1000);

  document.getElementById("contador").innerHTML = `${diasAteEvento}D  ${horasAteEvento}H ${minutosAteEvento}M ${segundosAteEvento}S`;

  if (distancia < 0) {
    clearInterval(intervalo);
    document.getElementById("contador").innerHTML = `Evento expirado`;
  }
}, 1000);

clearInterval(intervalo);
