$keys =@(Get-Content -Path .\keys.txt).split(",")
$values= @(Get-Content -Path .\values.txt)

$locations=@()
$keys | % {
    if($values.IndexOf($_) -ne -1)
    {
        $locations+=$values.IndexOf($_)
    }
}
Set-Clipboard ($locations)
