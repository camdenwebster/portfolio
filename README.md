# Camden Webster Portfolio Website
## Running the Site
```shell
npm install && npm run dev
```
## Syncing Blog Posts from Obsidian Vault
### Set environment variable
```shell
   export BLOG_SOURCE_DIR="/path/to/your/obsidian/blog/posts"
```

### Commit a change to run pre-commit hook, or run manually:
```shell
npm run sync-blog
```