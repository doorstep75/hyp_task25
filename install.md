#STEPS TO DOWNLOAD/CREATE A REPO

- use terminal/command-line based app
- decide where on your operating system (windows or mac) where you intend to create/store projects
- Using the terminal:
- mkdir PROJECT_NAME (to create the folder to store the project)
- cd PROJECT_NAME (note: PROJECT_NAME is whatever project name you decide of course!)
- git init (to initialise git within the project)
- git commit -m 'first commit'
- git remote add origin git@github.com:USER/PROJECT_NAME.git
- git push origin master

##Existing Git Repo?

- cd existing_git_repo
- git remote add origin git@github.com:USER/PROJECT_NAME.git
- git push origin master
