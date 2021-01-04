
# first add all the files then commit with the given message then push it to the remote repo on master branch
# developed by Vijay Mathur
# date : 04/01/2021


function git-push($message){

git add . 
git commit -m $message 
git push origin master  

}
git-push -message $args[0]

