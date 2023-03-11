# MRE for incorrect type mistmatch error in JSX in IntelliJ IDEA

If you open `index.jsx` in IntelliJ IDEA, you will see that it shows that there is a type mismatch error for the `prop` parameter. However, there's no type mismatch indicated for `index_t.tsx` which has identical contents.

This doesn't happen in VS Code. `index2.jsx` is there to demonstrate that VS Code does show a type mismatch error when it actually exists.
