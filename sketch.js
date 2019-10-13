let blocks;
let options;
let firstTime = true;

//CONSTANTS 
const S = 0;
const Z = 1;
const L = 2;
const J = 3;
const I = 4;
const O = 5;
const T = 6;
const PLAYGROUND = 0;
const NONE = 0;
const FIXED = 1;

function setup()
{
	createCanvas(600, 600);

	blocks = [];

	for(let i=0; i<8; i++)
	{
		blocks[i] = [];

		for(let j=0; j<8; j++)
		{
			blocks[i][j] = new Block(i, j, PLAYGROUND);
		}		
	}

	options = [];

	for(let i=0; i<3; i++)
	{
		options[i] = new Piece(i);
	}
}

function draw()
{
	background(108, 50, 4);

	for(let i=0; i<blocks.length; i++)
	{
		for(let j=0; j<blocks[0].length; j++)
		{
			blocks[i][j].show();
		}		
	}

	for(let i=0; i<options.length; i++)
	{
		options[i].show();
	}

	if(mouseIsPressed)
	{
		if(firstTime)
		{
			for(let i=0; i<options.length; i++)
			{
				if(mouseX > options[i].x &&
					mouseX < options[i].x+options[i].size &&
					mouseY > options[i].y &&
					mouseY < options[i].y+options[i].size)
				{
					console.log("DRAGGED");
					options[i].dragged();
				}
			}

			firstTime = false;
		}
		else
		{
			for(let i=0; i<options.length; i++)
			{
				options[i].update();
			}
		}
	}
	else
	{
		for(let i=0; i<options.length; i++)
		{
			options[i].drag = false;
		}

		firstTime = true;
	}
}