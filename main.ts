Deno.serve(async (_req) => {
  if (_req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not supported" }), {
      status: 501,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
  }

  type GameState = {
    board: number[]; // Les 12 cases de l'Awale avec le nombre de graine dans chaque trou
    history: number[]; // Un tableau avec l'index des précédents coups joués
    score: number[]; // Un tableau de 2 entrée : [ScorePlayer1, ScorePlayer2]
    player: number; // Joueur courant
  };
  
  const gameState: GameState = JSON.parse(await _req.text())

  console.log(gameState)

  return new Response(JSON.stringify({ move: Math.floor(Math.random() * 12) }));
});
