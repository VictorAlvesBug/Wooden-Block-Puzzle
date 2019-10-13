class Piece
{
	constructor(index)
	{
		this.lotType();
		
		this.size = (width-200-20)/3;
		this.x = 100 + index*(this.size+10);
		this.y = width-200 + 10;

		this.drag = false;

		this.mouseDistanceX = 0;
		this.mouseDistanceY = 0;
	}

	lotType()
	{
		let type = int(random(7));

		switch(type)
		{
			case S:
				this.parts = [
				[1,0],
				[2,0],
				[0,1],
				[1,1]
				];
				break;

			case Z:
				this.parts = [
				[0,0],
				[1,0],
				[1,1],
				[2,1]
				];
				break;

			case L:
				this.parts = [
				[0,0],
				[0,1],
				[0,2],
				[1,2]
				];
				break;

			case J:
				this.parts = [
				[1,0],
				[1,1],
				[1,2],
				[0,2]
				];
				break;

			case I:
				this.parts = [
				[0,0],
				[0,1],
				[0,2],
				[0,3]
				];
				break;

			case O:
				this.parts = [
				[0,0],
				[1,0],
				[0,1],
				[1,1]
				];
				break;

			case T:
				this.parts = [
				[0,0],
				[0,1],
				[0,2],
				[1,1]
				];
				break;
		}

		let timesToRotate = int(random(4));

		for(let i=0; i<timesToRotate; i++)
		{
			//AVERAGE POINT(CENTER OF THE ROTATION)
			let avgI = this.parts[3][0];
			let avgJ = this.parts[3][1];

			//newI = avgI + (avgJ - currJ);
			//newJ = avgJ - (avgI - currI);

			//ROTATION MATRIX (R(a))
			//
			// | cos(a)   sin(a) |
			// | -sin(a)  cos(a) |

			// newP = R(a) * currP;

			//ROTATION MATRIX (R(a))
			// a = -90°
			//
			// | 0  -1 |
			// | 1   0 |

			// | newI |   | 0  -1 |   | currI |
			// |      | = |       | * |       |
			// | newJ |   | 1   0 |   | currJ |

			// newI = (0*currI) + (-1*currJ);
			// newJ = (1*currI) + (0*currJ);

			// newI = -currJ;
			// newJ = currI;

			// I = newI + avgI;
			// J = newJ + avgJ;

			//ROTATE EACH PART OF THE PIECE IN (avgI,avgJ) CENTER
			for(let p=0; p<4; p++)
			{
				// currI = I - avgI;
				// currJ = J - avgJ;
				let currI = this.parts[p][0] - avgI;
				let currJ = this.parts[p][1] - avgJ;

				// newI = -currJ;
				// newJ = currI;
				let newI = -currJ;
				let newJ = currI;

				// I = newI + avgI;
				// J = newJ + avgJ;
				this.parts[p][0] = newI + avgI;
				this.parts[p][1] = newJ + avgJ;
			}
		}

		let smallestI = 5;
		let smallestJ = 5;
		
		for(let p=0; p<4; p++)
		{
			if(this.parts[p][0] < smallestI)
			{
				smallestI = this.parts[p][0];
			}

			if(this.parts[p][1] < smallestJ)
			{
				smallestJ = this.parts[p][1];
			}
		}
		
		for(let p=0; p<4; p++)
		{
			this.parts[p][0] = this.parts[p][0] - smallestI + 2;
			this.parts[p][1] = this.parts[p][1] - smallestJ + 2;
		}
	}

	dragged()
	{
		this.drag = true;
		this.mouseDistanceX = 3 * (width-200)/8;
		this.mouseDistanceY = 3 * (width-200)/8;
	}

	update()
	{
		if(this.drag)
		{
			this.x = mouseX - this.mouseDistanceX;
			this.y = mouseY - this.mouseDistanceY;
		}
	}

	show()
	{
		stroke(35, 0, 0);
		fill(193, 169, 135);

		for(let p=0; p<4; p++)
		{
			let singleSize;

			if(this.drag)
			{
				singleSize = (width-200)/8;
			}
			else
			{
				singleSize = this.size/7;
			}

			let px = singleSize*this.parts[p][0];
			let py = singleSize*this.parts[p][1];

			rect(this.x+px, this.y+py, singleSize, singleSize);
		}
	}
}