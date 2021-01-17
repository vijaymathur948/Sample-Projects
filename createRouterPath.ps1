
function removeEmptyDirectories($path){
    $directories=  (get-childitem -directory -path $path | Select-Object -property Name) 
foreach ($directory in $directories) {

    #$relativeUrl= ($directory.Name).insert(0,$path)
    $relativeUrl= $path+$directory.Name
    # content inside directory is empty 
    if(0 -eq (get-childitem -path $relativeUrl).count)
    {
        Remove-Item -path $relativeUrl -recurse -force
    }

}
}

$MainDirectory= '.\src\components\'
$response= read-host "Do you want to remove empty directories before exection ? `nPress 1 for Yes. `nPress 2 for No.`n "
if($response -eq 1 )
{
    removeEmptyDirectories -path $MainDirectory
    write-host "Done Successfully Removed the Empty Directories"
}
$fileName= ".\src\components\routerPath.js"
if(Test-Path $fileName)
{
Remove-Item -Path $fileName
}

$list_of_directories = (get-childitem -directory -path $MainDirectory) | Select-Object -Property Name
$routerPath=@{}

foreach($directory in $list_of_directories)
{
    $updatedName= "/"+ $directory.Name + "/"
    
    $key= $updatedName
    $finalPath= $updatedName.insert(0,".")

    # store the path in the form of dictionary or hash table
    $routerPath.Add($key,$finalPath)
   # $routerPath.Add($name+"/index.jsx","./"+$name+"/index.jsx")
    
}

# second step
$content= "const routerPath = () => { `n"
$content+= "const routes = {} `n"

foreach($key in $routerPath.Keys )
{
    $content+= "routes[`"$key`"] = require(`""
    $content+= $routerPath[$key]
    $content+= "`").default `n"
}


$content+= "return routes }`n"
$content+= "export default routerPath"

$content | Set-Content  $fileName
