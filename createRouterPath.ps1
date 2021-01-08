
$fileName= ".\src\components\routerPath.js"
if(Test-Path $fileName)
{
Remove-Item -Path $fileName
}

$list = (get-childitem -file -recurse -path '.\src\components') | Select-Object -Property PSPath
$routerPath=@{}

foreach($items in $list)
{
    $path = $items.PSPath
    $directoryName= "components"
    $lastIndex= $path.LastIndexOf($directoryName)
    $updatedPath= $path.Substring($lastIndex+$directoryName.Length)
    $updatedPath =$updatedPath.replace("\","/").insert(0,".")
    $updatedPath =$updatedPath.Substring(0,$updatedPath.LastIndexOf("."))
    $key= $updatedPath.remove(0,1)
    if($key -eq "/main")
    {    }
    else
    {
       $routerPath.Add($key,$updatedPath)
}
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
