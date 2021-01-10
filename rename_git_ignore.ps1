if(test-path ./.gitignore-master)
{
  rename-item -path ./.gitignore ".gitignore-deploy"
  rename-item -path ./.gitignore-master ".gitignore"
  write-host "master"
}else 
{
  if(test-path ./.gitignore-deploy)
{
  rename-item -path ./.gitignore ".gitignore-master"
  rename-item -path ./.gitignore-deploy ".gitignore"
  write-host "deploy"
}
}