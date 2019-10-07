//Creamos tablero de 10*10
board = new Array(10);
	for (let i = 0; i<10; i++){
		board[i] = new Array(10);
			for (let j=0; j<10; j++){
				board[i][j]=' ';
				}
		}
//Creamos obstaculos
board[5][5]='Stop';
board[3][3]='Stop';
board[8][9]='Stop';
board[7][2]='Stop';
board[2][7]='Stop';


//Creamos Rover
rover = {
direction: `N`,
y:0,
x:0,
travelLog: [{x:0, y:0}], 
rBoard: 'R1' 
};

roverOne = rover = {
direction: `N`,
y:0,
x:0,
travelLog: [{x:0, y:0}], 
rBoard: 'R1',  //Asignación que damos a RoverOne para ver en el tablero
};

roverTwo = rover = {
direction: `N`,
y:0,
x:0,
travelLog: [{x:0, y:0}], 
rBoard:'R2', //Asignación que damos a RoverTwo para ver en el tablero
};

//Giro a la Izquierda
function turnLeft (rover){
	
	switch (rover.direction){
		case 'N':
		rover.direction = 'W';
		break;

		case 'W':
		rover.direction = 'S';
		break;

		case 'S':
		rover.direction = 'E';
		break;

		case 'E':
		rover.direction = 'N';
		break;
	}
	  console.log("turnLeft was called!");
	  console.log(`Rover is now facing ${rover.direction}`);
}


//Giro a la Derecha
function turnRight (rover){
	switch (rover.direction){
		case 'N':
		rover.direction = 'E';
		break;

		case 'E':
		rover.direction = 'S';
		break;

		case 'S':
		rover.direction = 'W';
		break;

		case 'W':
		rover.direction = 'N';
		break;
	}
	console.log("turnRight was called!");
	console.log(`Rover is now facing ${rover.direction}`);
}


   

//Rover avanza en caso de no haber otro Rover u obstaculo
  function moveForward(rover){

	switch(rover.direction){
		case 'N':
		if(rover.y != 0){
		rover.y--;
		}
		if(board[rover.y][rover.x] ==='Stop'){
			rover.y++;
			console.log(`Hey Rover, you can´t go there. In x:${rover.x-1}, y:${rover.y} there is a Stop`)
        }if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
		rover.y++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x-1}, y:${rover.y} there is an other Rover`);
        }
		break;
  
		case 'W':
		if(rover.x !=0){
		rover.x--;
		}
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
			rover.x++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x-1}, y:${rover.y} there is an other Rover`);
        }
		if(board[rover.y][rover.x] ==='Stop' || board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
			rover.x++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x-1}, y:${rover.y} there is a Stop`);
        }
		break;

		case 'S':
		if(rover.y!=9){
		rover.y++;
        }
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
			rover.y--;
			console.log(`Hey Rover, you can´t go there. In x:${rover.x}, y:${rover.y+1} there is an other Rover`)
        }if(board[rover.y][rover.x] ==='Stop'){
			rover.y--;
			console.log(`Hey Rover, you can´t go there. In x:${rover.x}, y:${rover.y+1} there is a Stop`)
	}
		break;

		case 'E':
		if(rover.x !=9){
		rover.x++;
		}
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
			rover.x--;
			console.log(`Hey Rover, you can´t go there. In x:${rover.x+1}, y:${rover.y} there is an other Rover`)
        }
		if(board[rover.y][rover.x] ==='Stop'){
			rover.x--;
			console.log(`Hey Rover, you can´t go there. In x:${rover.x+1}, y:${rover.y} there is a Stop`)
}
		break;
	}

  

	console.log(`Rover is right now in: x:${rover.x}, y:${rover.y}`);
}





        

//Rover retrocede en caso de no haber otro Rover u obstaculo
function moveBackward(rover){

	switch(rover.direction){
		case 'N':
		if(rover.y != 9){
		rover.y++;
		}
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
		rover.y--;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x}, y:${rover.y+1} there is an other Rover`)
        }
		if(board[rover.y][rover.x] ==='Stop'){
		rover.y--;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x}, y:${rover.y+1} there is a Stop`)
}
		break;

		case 'W':
		if(rover.x !=9){
		rover.x++;
		}
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
		rover.x--;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x+1}, y:${rover.y} there is an other Rover`);
        }
		if(board[rover.y][rover.x] ==='Stop'){
		rover.x--;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x+1}, y:${rover.y} there is a Stop`);
}
		break;

		case 'S':
		if(rover.y!=0){
		rover.y--;
		}
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
		rover.y++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x}, y:${rover.y-1} there is an other Rover`)
        }
		if(board[rover.y][rover.x] ==='Stop'){
		rover.y++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x}, y:${rover.y-1} there is a Stop`);
} 
		break;

		case 'E':
		if(rover.x !=0){
		rover.x--;
		}
		if(board[rover.y][rover.x]==='R1' || board[rover.y][rover.x]==='R2'){
		rover.x++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x-1}, y:${rover.y} there is an other Rover`)
        }
		if(board[rover.y][rover.x] ==='Stop'){
		rover.x++;
		console.log(`Hey Rover, you can´t go there. In x:${rover.x-1}, y:${rover.y} there is a Stop`)		
}
		break;
	}
}

//Funcion donde damos las ordenes de movimiento y contiene el resto de funciones anteriormente creadas	
function command (rover, orders){

//bucle recorrer todas las indicaciones
	for (let i = 0; i<orders.length; i++){
		let order = orders[i];

		//condición para que sólo atienda a las ordenes correctas
		if(orders[i] === 'l' || orders[i] === 'b' || orders[i] === 'f' || orders[i] === 'r'){

		//Creamos bucles para recorrer el tablero e indicamos que en caso de no estar libre o es un obstaculo, lo deje libre.
		for(let i=0; i<board.length; i++){
		for(let j = 0; j<board[i].length; j++){
			if(rover===roverOne && board[i][j] !=' '&& board[i][j] != 'Stop' && board[i][j]!='R2'){
				board[i][j]=' ';
    			}if(rover === roverTwo && board[i][j] !=' '&& board[i][j] != 'Stop' && board[i][j]!='R1'){	
				board[i][j]=' ';
    		}
		}
    }


		switch(order){
		
		case 'f':
		moveForward(rover);
        break;

		case 'b':
		moveBackward(rover);
		break;


		case 'r':
		turnRight(rover);
		break;

		case 'l':
		turnLeft(rover);
		break;

}		
		//Recorrido de Rover
		let newPosition = {x: rover.x, y: rover.y}; 
		rover.travelLog.push(newPosition);


	}else{
		console.log(`Sent an incorrect order, please check it, you must to send (l,f,r or b)`)
    }


	} 
	//Vemos por pantalla el recorrido
	console.log(rover.travelLog)

	//Vemos por pantalla la posición de Rover	
	console.log(`Rover is right now in: x:${rover.x}, y:${rover.y}`);


	
	//En caso de estar libre la casilla, Rover puede ocuparla
	if(board[rover.x][rover.y]===' ' ){
	board[rover.y][rover.x]=rover.rBoard;
 }

	//Vemos el tablero
	console.log(board);
}