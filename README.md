# Git Reset & Commit History Management

A beginner-friendly static website explaining Git commit history, `git reset`, and `git revert`.

## Run the project
1. Download and extract the ZIP file.
2. Open the folder.
3. Double-click `index.html`, or open it with VS Code and use Live Server.

No installation or backend is required.

## Files
- `index.html` — page content
- `style.css` — responsive styling
- `script.js` — copy-command buttons

## Commands covered
- `git log --oneline`
- `git status`
- `git reset --soft HEAD~1`
- `git reset --mixed HEAD~1`
- `git reset --hard HEAD~1`
- `git revert <commit-id>`

## Safety note
`git reset --hard` can discard tracked changes. Check `git status` first and consider making a backup branch. For commits already shared with others, `git revert` is usually safer than rewriting shared history.
