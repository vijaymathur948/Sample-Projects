# get list of modules from a json file
$modules= ((Get-Content -Path .\list_of_packages.json | ConvertFrom-Json).client[3].name).split(" ")

# install all the modules through npm package manager  one by one
foreach ($item in $modules) {
  yarn add $item
}
