$list= (Get-Content -Path .\rawData.txt) 

$flag=0

# this is the exact format in which I have to create the array and then  just export
# [
# {title:"title",items=["v1","v2"]},
# ]

$str= "["
foreach($items in $list)
{
if($items -cmatch "^[A-Z]*$")
{
    if($flag -eq 1)
    {
        $str+="]},"
    }
    $str+="{title:`""+$items+"`",items:["  
}else{
    $str+="`""+$items+"`","
}
    # udpated flag
    $flag=1
}
    # close the array brackets
   if($list.length -gt 0) 
    {
        $str+="]},"   
    }
    $str+="]"
    
    # create an array of links just copy and paste
    Set-Clipboard $str

