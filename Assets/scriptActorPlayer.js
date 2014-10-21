//Player Script

//Inspector Variables

//tag to be applied to objects to be edited
var tagName : String;
// Ray length from main camera to object
var rayDistance : float = 0.0;
//score for our player
var score : int = 0;
//number of points to win
var numberOfPointsToWin: int = 5;

//Private Variables
// amount of time the game will last
private var gameTime:float = 10.0;

function Start()
{
	//upon start repeat the function countdown every second
	InvokeRepeating("Countdown", 1.0, 1.0); 
}

//Update called every frame
function Update () 
{
	//use the left mouse button to select on gameObjects in the scene
	if(Input.GetMouseButtonDown(0))
	{
		//used to get information from the RayCast
		var hit : RaycastHit; 
		//takes the mouse position coordinates and casts a ray from the main camera through the pixel coordinates
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		//Casts a ray against all colliders in the scene - 
		// return true if ray hits an object with the given distance
		if(Physics.Raycast(ray, hit, rayDistance))
		{
			if(hit.transform.tag == tagName) //if object hit has an enemy tag
			{
				//new Vector3 variable with random x,y coordinates
				// var position = Vector3(Random.Range(-6,6),Random.Range(-4,4),0);
				//change object hit to new random position
				// hit.transform.position = position;
				
				// decreases the numberOfClick amount in the enemyScript
				var enemyScript = hit.transform.GetComponent(scriptActorEnemy);
				enemyScript.numberOfClicks -= 1;
				
				//check that the object is destroyed before adding a point to the score
				if(enemyScript.numberOfClicks == 0){
					score += enemyScript.enemyPoints; //add points to overall score
				}
			}
		}
	}
	
	
}

function Countdown()
{
	if(--gameTime <= 0) //if next second is 0 cancel countdown 
	{
		CancelInvoke("Countdown");
		if(score >= numberOfPointsToWin)
		{
			Application.LoadLevel("sceneScreenWin");
		}
		else
		{
			Application.LoadLevel("sceneScreenLose");
		}
	}
}

function OnGUI()
{
	GUI.Label(Rect(10,10,100,20), "Score: " + score);
	GUI.Label(Rect(10,25,100,35), "Time: " + gameTime);
}


