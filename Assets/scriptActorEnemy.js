//Player Script

//Inspector Variables
//how many times to click on object before destroyed
var numberOfClicks : int = 2;
//color of the object
var shapeColor : Color []; //set colors in unity
var explosion: Transform;
//point per destroying of the object
var enemyPoints:int = 1;

//Private Variables
private var storeClicks: int = 0;

//start only called once in the lifetime of the behavior
function Start()
{
	storeClicks = numberOfClicks;
	// new Vector3 variable with random x,y coordinates
	var startPosition = Vector3(Random.Range(-5.0,5.0),Random.Range(-4.0,4.0),0);
	
	//change object hit to new random position
		transform.position = startPosition;
		RandomColor();
		
	
}

//Update called every frame
function Update () 
{
	var backgroundRadial = GameObject.Find("BackgroundRadial");
	backgroundRadial.transform.Rotate(Vector3.up, Time.deltaTime);
	//once the object has been clicked so many times it will move positions
	if(numberOfClicks <= 0)
	{
		if(explosion)
		{
			// create explosion at objects position
			Instantiate(explosion, transform.position, transform.rotation);
		}
	// new Vector3 variable with random x,y coordinates
		var position = Vector3(Random.Range(-5.0,5.0),Random.Range(-4.0,4.0),0);
		RespawnWaitTime();
	//change object hit to new random position
		transform.position = position;
		//reset the amount the object needs to be clicked before it is moved
		numberOfClicks = storeClicks;
	}
}

//RespawnWaitTime is used to hide Game Object for set amount of time and then unhid it
function RespawnWaitTime()
{
	var respawnWaitTime = Random.Range(1.0,3.0);
	renderer.enabled = false;
	RandomColor();
	yield WaitForSeconds(respawnWaitTime);
	renderer.enabled = true;
}

//random color is generated to change the material of the game object when it respawns
function RandomColor()
{
	if(shapeColor.Length >0)
	{
		//assign a random color from the group selected by the UI
		var newColor = Random.Range(0,(shapeColor.length));
		//set the new color
		renderer.material.color = shapeColor[newColor];
	}
}
