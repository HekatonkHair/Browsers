var navOpenInBackgroundTab = 0x1000;
var objIE = new ActiveXObject("InternetExplorer.Application");

fs = new ActiveXObject("Scripting.FileSystemObject");
f = fs.GetFile("sites.txt");

is = f.OpenAsTextStream( 1, 0 );

objIE.Visible = true;

while( !is.AtEndOfStream ){
   var url = is.ReadLine();
   objIE.Navigate2(url,navOpenInBackgroundTab);
   WScript.Sleep(3000);
}
 
is.Close();