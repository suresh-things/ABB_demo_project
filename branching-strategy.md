# Branching Strategy
### List of Branches
- main
- develop
- feature
- bugfix
- hotfix
- release

#### main
* Production ready code will be available here

#### develop
* Latest development changes before release.

#### feature
* For new feature development, create a branch from develop branch
* After making changes, create a pull request to merge code to the develop branch

#### bugfix
* Used to fix the non critical bugs
* Create a branch bugfix/... from develop and fix the bugs
* Create a pull request from bugfix branch to develop branch

#### hotfix
* Used to fix critical bugs
* Create a branch from main and fix the bugs
* Create a PR to merge changes to both main and develop branch
* Add a tag for the hotfix

### release
* Used to release new features
* Create a release/... from develop
* Run all the tests and add documentation for the release
* Merge the code to both main and develop branches by raising PRs
* Add a tag version to the release branch for releasing the new features


