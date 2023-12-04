# pdx-bife-2024

Portland Bitcoin Is For Everyone Conference 2024

## Information


## Development

Site is developed using NPM 8.x, Node v16.20.2, and Angular 16.2.0 with SCSS styling.

Use Node Version Manager (nvm) to install Node v16.20.2 on your machine.

NOTE: Should we send email with SendGrid? https://console.cloud.google.com/marketplace/details/sendgrid-app/sendgrid-email

## Developer Setup

    npm install -g @angular/cli@16.2.0
    npm install
    npm run build
    ng serve --open

NOTE: Considering using deployment to Azure storage account instead of 
  GitHub pages: https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel

To deploy, you must first run `npm run build` locally, then check in the changes.   Once the changes are checked 
  in, then you need to manually trigger the `pages-build-deploymen` action in the GitHub project to actually deploy the site.

### Archive Of Commands That Created This Project

Commands that created this project, more or less in order of occurence.

    ng new pdx-bife-2024
    ng add angular-cli-ghpages
    ng build --output-path docs --base-href /pdx-bife-2024/
    ## configure GitHub pages to deploy from /docs
    ng generate component home --flat
    ng generate component about
    ng generate component header
    ng generate component title
    ng generate component contact
    ng generate component sponsor
    ng generate component passes
    ng generate component schedule
    npm i ngx-markdown@16.0.0
    npm i marked@4.3.0

### Font configuration

Uses instructions from this site:

    https://www.telerik.com/blogs/angular-basics-how-best-use-fonts-angular

Default font for the site is set in the `styles.css` global file.   You can override the font by putting a font config 
  in the `.scss` file of a sub-component.

Choose a font pair from this site: https://www.fontpair.co/all

