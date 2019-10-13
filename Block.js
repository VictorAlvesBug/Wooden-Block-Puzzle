class Block
{
	constructor(i,j,type)
	{
		this.i = i;
		this.j = j;
		this.type = type;
		this.status = NONE;

		if(type == PLAYGROUND)
		{
			let amountI = 8;
			this.size = (width-200)/amountI;
			this.x = 100 + this.size*i;
			this.y = 10 + this.size*j;
		}
		else
		{
			/*this.size = 50;
			this.x = 10 + (this.size+2)*i;
			this.y = 10 + (this.size+2)*j;*/
		}
	}

	aaa()
	{

	}

	show()
	{
		/// 35, 0, 0
		/// 41, 11, 66
		/// 130, 82, 1
		/// 182, 155, 76
		/// 193, 169, 135
		
		stroke(108, 50, 4);

		if(this.status == NONE)
		{
			fill(35, 0, 0);
		}
		else
		{
			fill(193, 169, 135);
		}
		
		rect(this.x, this.y, this.size, this.size);
	}
}