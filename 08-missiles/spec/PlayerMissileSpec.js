/*

  Requisitos: 

  La nave del usuario disparará 2 misiles si está pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendrá un tiempo de recarga de 0,25s, no pudiéndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificación:

  - Hay que añadir a la variable sprites la especificación del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se añadirán
    misiles al tablero de juego en la posición en la que esté la nave
    del usuario. En el código de la clase PlayerSip es donde tienen
    que añadirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creación de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declararán los métodos de
    la clase en el prototipo

*/

describe("PlayerMissile", function() {

	it("PlayerMissile", function() {
		SpriteSheet.map = {missile: {h:10, w:2} };
		var pm = new PlayerMissile(1,2);
		expect(pm.w).toBe(SpriteSheet.map['missile'].w);
		expect(pm.h).toBe(SpriteSheet.map['missile'].h);
		expect(pm.x).toBe(1 - SpriteSheet.map['missile'].w/2);
		expect(pm.y).toBe(2 - SpriteSheet.map['missile'].h);
	});

	it("Playermissile.step()", function() {
		var pm = new PlayerMissile(1,1000);
		pm.step(0.2);
		expect(pm.y).toBe(1000 - pm.h + pm.vy*0.2);

	});
	

});
