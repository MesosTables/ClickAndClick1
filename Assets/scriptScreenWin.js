//Win script

//
function OnGUI()
{
	GUI.Label(Rect(10,10,100,40),"YOU WIN!!");
	
	
	if(GUI.Button(Rect(10,60,100,50), "Restart Game"))
	{
		Application.LoadLevel("sceneScreenLevel1");
	}
	if(GUI.Button(Rect(10,120,100,50), "Main Menu"))
	{
		Application.LoadLevel("sceneScreenMainMenu");
	}
	if(GUI.Button(Rect(10,180,90,50), "Exit Game"))
	{
		Application.OpenURL("http://mesostables.github.io/");
	}
}