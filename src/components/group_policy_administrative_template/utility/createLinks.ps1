Invoke-Expression ".\file_nos.ps1"
$location= @(Get-Clipboard)

$content= ((Get-Content -Path .\values.txt -Encoding UTF8) |% {"`""+$_+"`""})
$location+=$content.Length

function get($start,$end)
{
$local= $content[$start..($end-1)]

$str = "{title:"
for($i=0;$i -lt $local.Length;$i++)
{
if($i -eq 0)
{
    $str+=$local[$i]+",";
    $str+="items:["
}else
{
    $str+=$local[$i]+","
}
}
$str+="]},"

return $str
}

$data= ""

$start=0;

for($i=1;$i -lt $location.Length;$i++)
{
    $end= $location[$i]
    $data+=(get -start $start -end $end)
    $start=$location[$i]
}

set-clipboard ("["+$data+"]")

# execute this script
# create one json file and paste the data into that file
# import json file into your component 