
# first add all the files then commit with the given message then push it to the remote repo on master branch
# developed by Vijay Mathur
# date : 04/01/2021


# execute this powershell script with one parameter which indicates comments
function gitPush($message){

# it will build our project
npm run build

git add . 
git commit -m $message 
git push origin master  

}
gitPush -message $args[0]

function createOtherRepo()
{
$parentDirectory= ((Get-Item . ).Name)
cd ../
$buildFolder = "buildFolder"
remove-item $buildFolder -recurse -force

if(-NOT (test-path $buildFolder ))
{
new-item  -path $buildFolder -type directory
cd $buildFolder
git init 
git remote add origin https://github.com/vijaymathur948/personal-projects.git
}else {
  cd $buildFolder
}

if(-NOT (test-path build))
{
copy-item  -recurse -path ../$parentDirectory/build 
}
git add .
git commit -m "build folder added 2"
git push origin master

}