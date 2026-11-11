const {app,BrowserWindow,shell}=require("electron");
function create(){
  const w=new BrowserWindow({width:460,height:860,minWidth:360,autoHideMenuBar:true,icon:require("path").join(__dirname,"icon.png"),title:"Bunny Buddy",webPreferences:{contextIsolation:true}});
  w.loadFile("index.html");
  w.webContents.setWindowOpenHandler(({url})=>{shell.openExternal(url);return{action:"deny"}});
}
app.whenReady().then(create);
app.on("window-all-closed",()=>app.quit());
