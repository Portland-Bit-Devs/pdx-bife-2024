# pdx-bife-2024

Portland Bitcoin Is For Everyone Conference 2024

## Information


## Development

Site is developed using NPM 8.x, Node v16.20.2, and Angular 16.2.0 with SCSS styling.

Considering using deployment to Azure storage account instead of GitHub pages: https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel


### Commands that built this project

    ng new pdx-bife-2024
    npm install -g @angular/cli@16.2.0
    npm install
    ng build
    ng analytics disable
    ng serve --open
    ng add angular-cli-ghpages
    ng build --output-path docs --base-href /pdx-bife-2024/
    ## added .github/workflows/.node.js.yml

