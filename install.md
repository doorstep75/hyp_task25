#STEPS TO DOWNLOAD/CREATE A REPO

- use terminal/command-line based app
- decide where on your operating system (windows or mac) where you intend to create/store projects
- Using the terminal:
- mkdir PROJECT_NAME (to create the folder to store the project)
- cd PROJECT_NAME (note: PROJECT_NAME is whatever project name you decide of course!)
- git init (to initialise git within the project)
- git commit -m 'first commit'
- git remote add origin https://github.com/USER/PROJECT_NAME.git
  - for example on this project of mine it is https://github.com/doorstep75/hyp_task25.git
- git push origin master
  - Note: you may need to git pull prior to push if your project files are not saved locally
  - You will get an error on git push if so
  - therefore git pull origin master first if necessary

##Existing Git Repo?

- cd existing_git_repo
- git remote add origin https://github.com/USER/PROJECT_NAME.git
- git push origin master
