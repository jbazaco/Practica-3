/*

  Requisitos: 

  La nave del usuario disparar� 2 misiles si est� pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendr� un tiempo de recarga de 0,25s, no pudi�ndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificaci�n:

  - Hay que a�adir a la variable sprites la especificaci�n del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se a�adir�n
    misiles al tablero de juego en la posici�n en la que est� la nave
    del usuario. En el c�digo de la clase PlayerSip es donde tienen
    que a�adirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creaci�n de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declarar�n los m�todos de
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
