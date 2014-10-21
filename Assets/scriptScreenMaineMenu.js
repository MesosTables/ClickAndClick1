// main menu script

//
function OnGUI() 
{

	if(GUI.Button(Rect(10,10,90,50), "Start Game")) //true when button pressed
	{
		//print("Start Game");
		Application.LoadLevel("sceneScreenLevel1");
	}
	
	if(GUI.Button(Rect(10,70,90,50), "Exit Game")) //true when button pressed
	{
		// print("Exited game");
		Application.OpenURL("http://mesostables.github.io/");
	}
	
	
}